import {useState, useEffect, useCallback} from 'react'
import config from "./variable.ts";
import axios from "axios";

type RequestOptions = {
  body?: unknown
  queryParams?: Record<string, unknown>
  disable?: boolean
  deps?: unknown[]
}

type ApiResponse<T> = {
  data: T | null
  error: Error | null
  isLoading: boolean
  reload: () => void
}

export const useApi = <T>(
  url: string,
  {queryParams, body, disable, deps = []}: RequestOptions
): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [key, setKey] = useState<number>(0)
  const jwt = localStorage.getItem("jwt") ?? "";


  const doRequest = useCallback(async () => {
    if (disable) {
      return
    }

    const queryString = queryParams
      ? '?' +
      Object.keys(queryParams)
        .reduce((acc: string[], key) => {
          const value = queryParams[key]
          if (value !== undefined && value !== null) {
            acc.push(`${key}=${value}`)
          }
          return acc
        }, [])
        .join('&')
      : ''

    const callUrl = `${config.api}/${url}${queryString}`
    try {
      const response = await axios.request<T>({
        headers: {
          authorization: `Bearer ${jwt}`
        },
        method: "GET",
        url: callUrl,
        data: body,
        responseType: 'json'
      })

      if (response.status !== 200) {
        console.error(`HTTP error! Status: ${response.status}\n ${response.statusText}\n ${response.data}`)
      }
      if (response.status === 401) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("expire");
        window.location.href = '/login'
      }

      const result = response.data
      setData(result)
    } catch (error) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("expire");
      window.location.href = '/login'
      setError(error)
    } finally {
      setIsLoading(false)
    }
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [queryParams, disable])

  useEffect(() => {
    doRequest()
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [key, disable, ...deps])

  const reload = () => {
    setIsLoading(true)
    setKey((prevKey) => prevKey + 1)
  }

  return {data, error, isLoading, reload}
}

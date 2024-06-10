import axios from "axios";
import config from "./variable.ts";


/*
  *<TC> Type of the request body
  *<TR> Type of the response body
  *This function is used to make an API request to the backend
 */
export async function apiRequest<TC, TR>(
  url: string,
  method?: 'GET' | 'DELETE' | 'PUT' | 'POST',
  body?: TC | unknown,
  queryParams?: Record<string, unknown>
): Promise<{ response: TR; status: number }> {
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

  const request = await axios.request<TR>({
    method: method,
    url: callUrl,
    data: body,
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt") ?? ""}`
    }
  });
  if (request.status !== 200) {
    console.error(`HTTP error! Status: ${request.status}\n ${request.statusText}\n ${request.data}`)
  }
  return {response: request.data, status: request.status}
}
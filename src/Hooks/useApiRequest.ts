import React, {useEffect, useState} from "react";
import {apiRequest} from "../utils";
import {APIError, APIRequest} from "../Types/API.ts";

interface UseApiRequestOption {
	method?: string,
	body?: APIRequest,
	reset?: boolean,
	if?: boolean,
	onError?: (e: APIError) => void
}

export function useApiRequest<T>(url: string, deps: React.DependencyList = [], options?: UseApiRequestOption): T | undefined{
	const [data, setData] = useState<T>();
	const stringDeps = JSON.stringify(deps);
	const onError = options?.onError;
	useEffect(() => {
		apiRequest<T>(url, {method:options?.method, body:options?.body}).then((response) => {
			if(response != null){
				setData(response);
			}
		}).catch((err) => {
			if(err instanceof APIError){
				if(onError !== undefined) {
					onError(err);
				} else {
					console.warn(`Error in request. Code : ${err.code}. Message : ${err.message}`);
				}
			}else{
				console.error(err);
			}
		});
	}, [url, stringDeps, onError]);
	return data;
}
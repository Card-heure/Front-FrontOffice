import config from "../variable";
import {APIRequest} from "./Types/API.ts";
export async function apiRequest<T>(url: string, options?: ApiRequestOption): Promise<T | undefined>{
    const init: RequestInit = {
        method: options?.method ?? "GET",
        body: JSON.stringify(options?.body),
        redirect: 'follow',
    }
    let response: Response;
    try {
        console.log("URL : ", config.api + url)
        console.log("Body : ", init)
        response = await fetch(config.api + url, init);
    }catch (e) {
        if(!(e instanceof DOMException)) {
            console.warn({code: -1, message: "No network"});
        }
        return undefined;
    }
    if (response.status.toString()[0] !== '2') {
        const test = await response.json();
        if(Object.keys(test).includes("code") && Object.keys(test).includes("message")) {
            console.warn(test.code, test.message, test.data);
        }else {
            throw response;
        }
    }
    if (response.status === 204) {
        return undefined;
    }
    try {
        const responseText = await response.text();
        return JSON.parse(responseText, (_key, value) => {
            if(typeof value === "string") {
                if(isISODateTime(value)){
                    return new Date(value);
                } else if (isISODate(value)) {
                    return new Date(value);
                }
            }
            return value;
        })
    } catch (e) {
        return undefined;
    }
}

function isISODateTime(date: string): boolean {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,5})?(Z|[+-][0-9]{2}:[0-9]{2})$/i;
    return regex.test(date);
}

function isISODate(date: string): boolean {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i
    return regex.test(date);
}
interface ApiRequestOption {
    method?: string;
    body?: APIRequest;
}
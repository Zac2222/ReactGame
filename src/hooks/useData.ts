import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Axios, AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGeneres";


interface FetchResponse<T>{ //passing in T means it can take in anytype if we dont know what it will be yet
    count: number;
    result: T[] //this is now a game array, an array made out of the interface above with the properties in it
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T[]>([]) //the type and array sets the type so it can be used in out return map
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController()
        setIsLoading(true)

        apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((response) => {
            setData(response.data.result)
            setIsLoading(false)
        })
    
        .catch(error => {
            if(error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
        });

        return () => controller.abort()
    }, [])
    return { data, error, isLoading }
}

export default useData

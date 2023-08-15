import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";

export interface Genre{
    id: number;
    name: string;
}

interface FetchGenreResponse{
    count: number;
    result: Genre[] //this is now a game array, an array made out of the interface above with the properties in it
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]) //the type and array sets the type so it can be used in out return map
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController()
        setIsLoading(true)

        apiClient
        .get<FetchGenreResponse>('/genres', { signal: controller.signal })
        .then(response => {
            setGenres(response.data.result)
            setIsLoading(false)
        })
    
        .catch(error => {
            if(error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
        });

        return () => controller.abort()
    }, [])
    return { genres, error, isLoading }
}

export default useGenres
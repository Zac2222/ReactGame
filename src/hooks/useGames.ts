import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
}

interface FetchGameResponse{
    count: number;
    result: Game[] //this is now a game array, an array made out of the interface above with the properties in it
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]) //the type and array sets the type so it can be used in out return map
    const [error, setError] = useState(null)

    useEffect(() => {

        const controller = new AbortController()

        apiClient
        .get<FetchGameResponse>('/games', { signal: controller.signal })
        .then(response => setGames(response.data.result))
        .catch(error => {
            if(error instanceof CanceledError) return;
            setError(error.message)});

        return () => controller.abort()
    }, [])
    return { games, error }
}

export default useGames
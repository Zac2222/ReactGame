import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGeneres";

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
    metacritic: number;
}

const useGames = (selectedGenre: Genre) => useData<Game>('/genres', {params: {genres: selectedGenre?.id}}) 


export default useGames
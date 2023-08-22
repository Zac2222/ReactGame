import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGeneres";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id}}, [
    gameQuery
]) 


export default useGames
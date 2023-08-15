import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre{
    id: number;
    name: string;
    image_Background: string;
}

interface FetchGenreResponse{
    count: number;
    result: Genre[] //this is now a game array, an array made out of the interface above with the properties in it
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres
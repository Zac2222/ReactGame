import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { Text } from '@chakra-ui/react';

interface Game{
    id: number;
    name: string;
}

interface FetchGameResponse{
    count: number;
    result: Game[] //this is now a game array, an array made out of the interface above with the properties in it
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]) //the type and array sets the type so it can be used in out return map
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
        .then(response => setGames(response.data.result))
        .catch(error => setError(error.message))
    }, [])

  return (
    <ul>
        {error && <Text>{error}</Text>}
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGrid

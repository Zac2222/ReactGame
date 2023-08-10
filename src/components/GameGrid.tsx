import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';


const GameGrid = () => {

  const {games, error} = useGames(); 

  return (
    <>
        {error && <Text>{error}</Text>}

    <SimpleGrid columns={3} spacing={10}>
        {games.map(game => <Gamecard key={game.id} game={game}></Gamecard>)}
    </SimpleGrid>

    </>
  )
}

export default GameGrid

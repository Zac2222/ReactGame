import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {

  const {games, error, isLoading} = useGames(); 
  const skeleton = [1,2,3,4,5,6];

  return (
    <>
        {error && <Text>{error}</Text>}

    <SimpleGrid columns={3} spacing={10}>
        {isLoading && skeleton.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map(game => <Gamecard key={game.id} game={game}></Gamecard>)}
    </SimpleGrid>

    </>
  )
}

export default GameGrid

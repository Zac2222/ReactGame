import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {

  const {data, error, isLoading} = useGames(); 
  const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <>
        {error && <Text>{error}</Text>}

    <SimpleGrid
      columns={{sm: 1, md: 2, lg: 3, xl: 4}}
      padding='20px'
      spacing={10}
    >
        {isLoading && skeleton.map(skeleton =>
        <GameCardContainer>
          <GameCardSkeleton key={skeleton}/>
        </GameCardContainer> 
        )}

        <GameCardContainer>
          {data.map((game) => <Gamecard key={game.id} game={game}/>)}
        </GameCardContainer>
    </SimpleGrid>

    </>
  )
}

export default GameGrid

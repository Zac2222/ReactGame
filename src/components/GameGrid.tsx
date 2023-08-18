import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGeneres';

interface  Props{
  selectedGenre: Genre | null
}


const GameGrid = ({selectedGenre}: Props) => {

  const {data, error, isLoading} = useGames(selectedGenre);
  const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <>
        {error && <Text>{error}</Text>}

    <SimpleGrid
      columns={{sm: 1, md: 2, lg: 3, xl: 4}}
      padding='20px'
      spacing={3}
    >
        {isLoading && skeleton.map(skeleton =>
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer> 
        )}

        {data.map((game) => (
          //the most upper component needs a key 
          <GameCardContainer key={game.id}> 
            <Gamecard game={game}/>
          </GameCardContainer>
        ))} 
    </SimpleGrid>

    </>
  )
}

export default GameGrid

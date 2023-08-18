import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useData from "../hooks/useData"
import useGenres, { Genre } from "../hooks/useGeneres"
import getCroppedImageUrl from "../services/imageUrl"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}:Props) => {

    const {data,isLoading,error} = useGenres();

  return (
    <List>
      {error && <Text>help</Text>}
      {isLoading && <Spinner />}
      {data.map((genre) => <ListItem key={genre.id} paddingY='5px'>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_Background)}/>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'} onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList

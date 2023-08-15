import { HStack, Image, ListItem, Text } from "@chakra-ui/react"
import useData from "../hooks/useData"
import useGenres, { Genre } from "../hooks/useGeneres"
import getCroppedImageUrl from "../services/imageUrl"


const GenreList = () => {

    const {data} = useData<Genre>('/genres')

  return (
    <ul>
      {data.map((genre) => <ListItem key={genre.id}>
        <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_Background)}/>
            <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
      </ListItem>)}
    </ul>
  )
}

export default GenreList

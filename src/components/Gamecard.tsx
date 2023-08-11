import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/imageUrl"

interface GameProps{
    game: Game
}

const Gamecard = ({game}: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <HStack justifyContent={'space-between'}>
              <PlatformIconsList platform={game.parent_platforms.map(({platform}) => platform)}/>
              <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default Gamecard

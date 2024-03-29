import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/imageUrl"
import Emoji from "./Emoji"

interface GameProps{
    game: Game
}

const Gamecard = ({game}: GameProps) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIconsList platform={game.parent_platforms?.map(p => p.platform)}/>
              <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default Gamecard

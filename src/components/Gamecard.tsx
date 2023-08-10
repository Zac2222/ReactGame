import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"

interface GameProps{
    game: Game
}

const Gamecard = ({game}: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}

            <PlatformIconsList platform={game.parent_platforms.map(({platform}) => platform)}/>
        </CardBody>
    </Card>
  )
}

export default Gamecard

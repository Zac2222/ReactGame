import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";
import PlatformSelect from "./components/PlatformSelect";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) //this usestate now works as a replacement for the other two with the interface
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  //chakra can create a gird, and you can import tsx files into the grid system, very cool
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px'
      }}
      
      >

      <GridItem area={"nav"}>
        <Navbar/> 
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} marginLeft='20px' marginBottom={5}>
          <PlatformSelect selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;

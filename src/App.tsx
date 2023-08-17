import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
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
        <GridItem area="aside">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;

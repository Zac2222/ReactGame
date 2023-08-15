import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  //chakra can create a gird, and you can import tsx files into the grid system, very cool
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //1024px
      }}>

      <GridItem area={"nav"}>
        <Navbar/> 
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;

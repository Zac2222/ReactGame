import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

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
        <GridItem area={"aside"} bg={"gold"}>
          Aside
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"blue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

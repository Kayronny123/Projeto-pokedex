import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/system";

function Home() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <PokemonCard />
      </Container>
    </div>
  );
}
export default Home;

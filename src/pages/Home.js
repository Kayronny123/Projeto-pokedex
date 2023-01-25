import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 0; i < 5; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon?limit${i}/`);
    }
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));

    // axios
    //   .get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
    //   .then((res) => setPokemons(res.data.results))
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Home;

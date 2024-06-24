import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/Constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/intialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);

      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

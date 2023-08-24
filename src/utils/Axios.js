import axios from "axios";

const createAxios = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
  });
};

const pokemonApiV2 = createAxios("https://pokeapi.co/api/v2/");

export { pokemonApiV2 };

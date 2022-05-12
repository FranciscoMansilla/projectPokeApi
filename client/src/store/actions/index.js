import axios from "axios";

export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';


export function getAllPokemons() {
  return async function(dispatch) {
    await axios.get("http://localhost:3001/pokemons/1")
    .then(response => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
    .catch((error)=>console.log(error))
    };
}

export function getAllTypes() {
  return async function(dispatch) {
    return await axios.get("http://localhost:3001/pokemons/type")
    .then(response => dispatch({ type: GET_ALL_TYPES, payload: response.data }))
  };
}

export function getPokemonByName(name) {
  return async function(dispatch) {
      return await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data }))
  };
}

export function getPokemonById(id) {
  return async function(dispatch) {
      return await axios.get(`http://localhost:3001/pokemons/${id}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_ID, payload: response.data }))
  };
}


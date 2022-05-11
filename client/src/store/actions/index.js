export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';

const axios = require('axios')

export function getAllTypes() {
  return async function(dispatch) {
    return await axios.get("http://localhost:3001/pokemons/")
    .then(response => dispatch({ type: GET_ALL_TYPES, payload: response }))
  };
}

export function getAllPokemons() {
  return async function(dispatch) {
    return await axios.get("http://localhost:3001/pokemons/")
    .then(response => dispatch({ type: GET_ALL_POKEMONS, payload: response }))
  };
}

export function getPokemonByName(name) {
  return async function(dispatch) {
      return await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_NAME, payload: response }))
  };
}

export function getPokemonById(id) {
  return async function(dispatch) {
      return await axios.get(`http://localhost:3001/pokemons/${id}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_ID, payload: response }))
  };
}

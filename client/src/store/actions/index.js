import axios from "axios";

export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const FILTER_INDEX_PAGINATED = 'FILTER_INDEX_PAGINATED' 
export const GET_SHOWED_POKE = 'GET_SHOWED_POKE' 
export const UPDATE_SHOWED_POKE = 'UPDATE_SHOWED_POKE'
export const SORT = 'SORT'
export const CLEAN_POKE_DETAIL ='CLEAN_POKE_DETAIL'


export function cleanPokeDetail(){
  return {type:CLEAN_POKE_DETAIL}
}

export function sort(payload){
  return {type:SORT,payload}
}

export function getShowedPoke(payload){
  return {type:GET_SHOWED_POKE,payload}
}

export function updateShowedPoke(payload){
  return {type:UPDATE_SHOWED_POKE,payload}
}

export function filterIndexPaginated(payload){
  return {type:FILTER_INDEX_PAGINATED,payload}
}

export function getAllPokemons() {
  return  function(dispatch) {
    axios.get("/pokemons/")
    .then(response => dispatch({ type: GET_ALL_POKEMONS, payload: response.data }))
    .catch((error)=>console.log(error))
    };
}

export function getAllTypes() {
  return function(dispatch) {
    return axios.get("/types")
    .then(response => dispatch({ type: GET_ALL_TYPES, payload: response.data }))
  };
}

export function getPokemonByName(name) {
  return function(dispatch) {
      return axios.get(`/pokemons?name=${name}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data }))
  };
}

export function getPokemonById(id) {
  return function(dispatch) {
      return axios.get(`/pokemons/${id}`)
          .then(response => dispatch({ type: GET_POKEMON_BY_ID, payload: response.data }))
  };
}


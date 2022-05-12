import {
  GET_ALL_TYPES,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID
} from "../actions";

const initialState = {
  pokemons: [],
  pokemonDetail:{},
  filteredPokemons: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TYPES:
      return{
        ...state,
        types: action.payload
      }
      case GET_ALL_POKEMONS:
      return{
        ...state,
        pokemons: action.payload
      }
    case GET_POKEMON_BY_ID:
      return{
        ...state,
        pokemonDetail: action.payload
      }
    case GET_POKEMON_BY_NAME:
      return{
        ...state,
        pokemonDetail: action.payload
      }
    default:
      return state;
  }
}
import {
  GET_ALL_TYPES,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  FILTER_INDEX_PAGINATED,
  GET_SHOWED_POKE,
  UPDATE_SHOWED_POKE,
  SORT,
  CLEAN_POKE_DETAIL
} from "../actions";


const initialState = {
  pokemons: [],
  pokemonDetail:[],
  showedPokemons:[],
  paginatedPokemons: [],
  types: [],
  flag: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAN_POKE_DETAIL:
      return {
        ...state, //spread operator ecma-script6
        pokemonDetail:[]
      }
    case UPDATE_SHOWED_POKE:
      return{
        ...state,
        showedPokemons: action.payload,
      }
    case GET_SHOWED_POKE:
      return{
        ...state,
        showedPokemons: action.payload,
      }
    case FILTER_INDEX_PAGINATED:
      return{
        ...state,
        paginatedPokemons: action.payload
      }
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
      let array =[]
      array.push(action.payload)
      console.log(array)
      return{
        ...state,
        showedPokemons: array
      }
    default:
      return state;
  }
}
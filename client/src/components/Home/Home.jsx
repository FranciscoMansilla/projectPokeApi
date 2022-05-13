import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../store/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import SearchBox from "../SearchBox/SearchBox";


export default function Home (){
  let pokemons = useSelector((state)=>state.pokemons)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!pokemons) dispatch(getAllPokemons())
  },[])
  return(
    <div>
      <SearchBox />
      {pokemons && pokemons.map(pokemon=><CardPokemon pokemon={pokemon} />)}
    </div>
  )
}
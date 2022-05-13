import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../store/actions";
import SearchBox from "../SearchBox/SearchBox";


export default function Home (){
  let pokemons = useSelector((state)=>state.pokemonDetail)

  // useEffect(()=>{
  //   dispatch(getAllPokemons())
  // },[])
  return(
    <div>
      <SearchBox />
      {pokemons && <div>
        <h1>{pokemons.name}</h1> 
        <img src={pokemons.img} alt="asd" />
      </div>}
    </div>
  )
}
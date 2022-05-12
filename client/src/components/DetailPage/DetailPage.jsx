import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../store/actions";


export default function DetailPage (props){
  let pokemon = useSelector((state)=>state.pokemonDetail)
  const id = props.match.params.id
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemonById(id))
  },[])
  
  return(
    <div>
      {pokemon && <div>
        <h1>{pokemon.name}</h1> 
        <img src={pokemon.img} alt="asd" />
      </div>}
    </div>
  )
}
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
        <p>Hp: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: </p>
        { pokemon.type && pokemon.type.length>0 && pokemon.type.map(t=><p>•{t.name}</p>)}
      </div>}
    </div>
  )
}
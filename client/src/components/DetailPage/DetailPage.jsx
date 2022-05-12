import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPokemonById } from "../../store/actions";


export default function DetailPage (){
  let pokemon = useSelector((state)=>state.pokemonDetail)
  
  let params = useParams();
  console.log('params',params)
  //let {id} = useParams();

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getPokemonById(id))
  // },[])
  
  return(
    <div>
      {/* {pokemon && <div>
        <h1>{pokemon.name}</h1> 
        <img src={pokemon.img} alt="asd" />
      </div>} */}
    id: {}
    </div>
  )
}
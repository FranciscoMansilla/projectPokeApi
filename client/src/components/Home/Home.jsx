import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../store/actions";


export default function Home (){
  let pokemons = useSelector((state)=>state.pokemons)

  // useEffect(()=>{
  //   dispatch(getAllPokemons())
  // },[])
  
  return(
    <div>
      {pokemons && <div>
        <h1>{pokemons.name}</h1> 
        <img src={pokemons.img} alt="asd" />
      </div>}
    </div>
  )
}
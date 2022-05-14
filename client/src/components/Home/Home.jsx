import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../store/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import OpcionBar from "../OpcionBar/OpcionBar";
import SearchBox from "../SearchBox/SearchBox";


export default function Home (){
  let pokemons = useSelector((state)=>state.pokemons)
  let filteredPokemons = useSelector((state)=>state.filteredPokemons)
  const dispatch = useDispatch()
  const[paginado, setPaginado] = useState(0)
  
  const nroPaginado = (long) =>{
    return Math.ceil(long / 12)
  }
  const paginatedButton = (nro) =>{
    let array = []
    for(let i=0;i<nro;i++){
      array.push(i+1)
    }
    
    return array
  }
  useEffect(()=>{
    if(pokemons.length <= 0){
      console.log('cargando pokemons')
      dispatch(getAllPokemons()) 
    }
    if(pokemons.length>0){
      console.log(nroPaginado(pokemons.length))
      setPaginado(nroPaginado(pokemons.length))
    }
  },[])

  return(
    <div>
      <SearchBox />
      <OpcionBar />
      {pokemons.length>0 && pokemons.map(pokemon=><CardPokemon pokemon={pokemon} />)}
      <ul>
        {/* {paginado>0 && console.log(paginatedButton(paginado))} */}
      {paginado>0 && paginatedButton(paginado).map(n=><li><input type="button" value={n}/></li>)}
      </ul>
    </div>
  )
}
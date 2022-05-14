import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterIndexPaginated, getAllPokemons } from "../../store/actions";
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
  // const indexFilter = (value)=>{
  //   const _CANTIDAD_POKE_ = 12;
  //   let pokemonfilte=pokemons.slice(((value-1)*_CANTIDAD_POKE_),(value*_CANTIDAD_POKE_)-1)
  //   dispatch(filterIndexPaginated(pokemonfilte))
  // }
  const onClickIndex = (e)=>{
    let value = e.target.value
    const _CANTIDAD_POKE_ = 12;
    let pokemonfilte=pokemons.slice(((value-1)*_CANTIDAD_POKE_),(value*_CANTIDAD_POKE_))
    dispatch(filterIndexPaginated(pokemonfilte))
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
    if(pokemons.length>0 && filteredPokemons.length<=0){
      let pokemonfilte = pokemons.slice(0,12)
      dispatch(filterIndexPaginated(pokemonfilte))
    }
  },[pokemons])
  
  return(
    <div>
      <SearchBox />
      <OpcionBar />
      {filteredPokemons.length>0 && filteredPokemons.map(pokemon=><CardPokemon pokemon={pokemon} />)}
      <ul>
        {paginado>0 && paginatedButton(paginado).map(n=><li><input onClick={onClickIndex} type="button" value={n}/></li>)}
      </ul>
    </div>
  )
}
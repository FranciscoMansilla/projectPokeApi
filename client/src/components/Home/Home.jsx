import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterIndexPaginated, getAllPokemons, getShowedPoke, setFlagFalse } from "../../store/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import OpcionBar from "../OpcionBar/OpcionBar";
import SearchBox from "../SearchBox/SearchBox";
import './Home.css'

export default function Home (){
  let pokemons = useSelector((state)=>state.pokemons)
  let showedPokemons = useSelector((state)=>state.showedPokemons)
  let filteredPokemons = useSelector((state)=>state.paginatedPokemons)
  let flag = useSelector((state)=>state.flag)

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
  const onClickIndex = (e)=>{
    let value = e.target.value
    const _CANTIDAD_POKE_ = 12;
    let pokemonfilte=showedPokemons.slice(((value-1)*_CANTIDAD_POKE_),(value*_CANTIDAD_POKE_))
    dispatch(filterIndexPaginated(pokemonfilte))
  }
  const setflag = ()=>{
    dispatch(setFlagFalse())
  } 
  useEffect(()=>{
    if(pokemons.length <= 0){
      console.log('cargando pokemons')
      dispatch(getAllPokemons()) 
    }
    if(pokemons.length>0 && showedPokemons.length<=0){
      dispatch(getShowedPoke(pokemons))
      console.log('holaa linea42')
    }
    if(showedPokemons.length>0){
      setPaginado(nroPaginado(showedPokemons.length))
    }
    if(showedPokemons.length>0 && filteredPokemons.length<=0){
      let pokemonfilte = showedPokemons.slice(0,12)
      dispatch(filterIndexPaginated(pokemonfilte))
    }
  },[pokemons,showedPokemons])
  useEffect(()=>{
    if(filteredPokemons.length>0){
      showedPokemons.map(pokemon=>console.log(pokemon.name))
    }
  },[showedPokemons])
  return(
    <div>
      <div className="divHome">
        <OpcionBar />
        <SearchBox />
      </div>
      <ul>
        {flag && showedPokemons.length>0 && filteredPokemons.map(pokemon=> <li><CardPokemon pokemon={pokemon} /></li> ) }
      </ul>
      <ul>
        {paginado>0 && paginatedButton(paginado).map(n=><li><input onClick={onClickIndex} type="button" value={n}/></li>) }
      </ul>
    </div>
  )
}
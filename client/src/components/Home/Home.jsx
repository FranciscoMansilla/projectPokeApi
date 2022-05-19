import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterIndexPaginated, getAllPokemons, getShowedPoke} from "../../store/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import Loading from "../Loading/Loading";
import OpcionBar from "../OpcionBar/OpcionBar";
import SearchBox from "../SearchBox/SearchBox";
import './Home.css'

export default function Home (){
  let pokemons = useSelector((state)=>state.pokemons)
  let showedPokemons = useSelector((state)=>state.showedPokemons)
  const dispatch = useDispatch()
  
  const [paginado, setPaginado] = useState(0)
  
  const [paginatedPokemons, setPaginatedPokemons] = useState([])
  const [pagActual,setPagActual] = useState(0)
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
    console.log(value-1)
    setPagActual(value-1)
  }
  useEffect(()=>{
    if(pokemons.length <= 0){
      dispatch(getAllPokemons()) 
    }
    if(pokemons.length>0 && showedPokemons.length<=0){
      dispatch(getShowedPoke(pokemons))
    }
    if(showedPokemons.length>0){
      setPaginado(nroPaginado(showedPokemons.length))
    }
    if(showedPokemons.length>0 ){
      let pokemonfilte = showedPokemons.slice((pagActual*12),((pagActual+1)*12))
      setPaginatedPokemons(pokemonfilte)
      console.log(pokemonfilte)
    }
  },[pokemons,showedPokemons,pagActual])

  if(showedPokemons.length>0){
    return(
      <div>
        <div className="divHome">
          <OpcionBar />
          <SearchBox />
        </div>
        <ul className="ulHome">
          {paginatedPokemons.map(pokemon=> <li className="liCard"><CardPokemon pokemon={pokemon} /></li> ) }
        </ul>
        <ul className="ulHomePaginated">
          {paginado>0 && paginatedButton(paginado).map(n=><li className="liPaginated"><input className="paginatedButton_hl87" onClick={onClickIndex} type="button" value={n}/></li>) }
        </ul>
      </div>
    )
  } else {
    return(
      <div>
        <Loading />
      </div>
    )
  }

}
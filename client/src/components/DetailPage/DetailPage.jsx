import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanPokeDetail, getPokemonById } from "../../store/actions";
import './DetailPage.css'

export default function DetailPage (props){
  let pokemon = useSelector((state)=>state.pokemonDetail)
  const id = props.match.params.id
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPokemonById(id))
    return dispatch(cleanPokeDetail())
  },[])
  
  return(
    <div >
      <div className="divTotal_1xjk">
        <div className="divCard_qw78">
          {pokemon && 
          <div className="divScreenCard_a6f4s">
            <h1>{pokemon.name}</h1>
            <div className="divCardImgText_4j5g">
              <div>
                <img src={pokemon.img} alt="asd" />
              </div>
              <div className="divCardText_7qt8">
                <label>Hp: {pokemon.hp}</label>
                <label>Attack: {pokemon.attack}</label>
                <label>Defense: {pokemon.defense}</label>
                <label>Speed: {pokemon.speed}</label>
                <label>Height: {pokemon.height}</label>
                <label>Weight: {pokemon.weight}</label>
                <label>Types: </label>
                { pokemon.type && pokemon.type.length>0 && pokemon.type.map(t=><label>•{t.name}</label>)}
              </div>
            </div> 
            <Link to='/n/home'>
              <div><label>Close</label></div>
            </Link>
          </div>}
        </div>
      </div>

      </div>
  )
}
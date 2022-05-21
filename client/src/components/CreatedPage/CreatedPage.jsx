import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getAllPokemons, getShowedPoke } from "../../store/actions"
import './CreatedPage.css'

export default function CreatedPage ({pokemon}){
  const dispatch = useDispatch();
  
  useEffect(()=>{
    setTimeout(function(){
      dispatch(getAllPokemons())
      dispatch(getShowedPoke([]))
    }, 2000);
  },[])
  return( 
    <div>
      <div >
          <div className="divTotal_1x79a">
            <div className="divCard_79tr">
              <div className="topPokedex_9er8">
                <div className="circleTopPokedex_green_q7wt"></div>
                <div className="circleTopPokedex_yellow_q7wt"></div>
                <div className="circleTopPokedex_red_q7wt"></div>
              </div>
              <div className="divScreenContorn_w7qe">
                {pokemon && 
                <div className="divScreenCard_aew4s">
                  <label>Created Pokemon</label>
                  <h3>{pokemon.name}</h3>
                  <div className="divCardImgText_4j5g">
                    <div>
                      <img className="img_qw79" src={pokemon.img} alt="asd" />
                    </div>
                    <div className="divCardText_7qt8">
                      <label><b>Hp: </b>{pokemon.hp}</label>
                      <label><b>Attack: </b>{pokemon.attack}</label>
                      <label><b>Defense: </b>{pokemon.defense}</label>
                      <label><b>Speed: </b>{pokemon.speed}</label>
                      <label><b>Height: </b>{pokemon.height}</label>
                      <label><b>Weight: </b>{pokemon.weight}</label>
                      <label><b>Type: </b></label>
                      { pokemon.type && pokemon.type.length>0 && pokemon.type.map(t=><label>{t}</label>)}
                    </div>
                  </div> 
                </div>}
              </div>
              <div className="divBottom">
                <div className="divbutonBottom_dfg8"></div>
                <div className="divBottomButtonsab_64re">
                  <div className="divbuttonA_k1l2">A</div> 
                  <div className="divbuttonB_s1r2">B</div>
                </div>
              </div>
              <div className="divDeAbajo_79fd">
                <Link className="buttonClose_u5o3" to='/n/home'>
                  <label>Close</label>
                </Link>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}
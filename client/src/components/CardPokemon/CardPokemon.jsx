import { Link } from "react-router-dom";
import './CardPokemon.css'



export default function CardPokemon ({pokemon}){
  let {id,img,name,type} = pokemon
  
  return(
      <Link className="pStyle" to={`/n/pokemon/${id}`}>
    <div className="divCard">
      <div className="topPokedex_9er8">
        <div className="circleTopPokedex_green_q7wt"></div>
        <div className="circleTopPokedex_yellow_q7wt"></div>
        <div className="circleTopPokedex_red_q7wt"></div>
      </div>
        <div className="divScreenContorn">
          <div className="divScreenCard">
              <label ><b>{name.charAt(0).toUpperCase() + name.slice(1)}</b></label>
              <div className="divCardImgText">
                <div>
                  <img className="imgCard_7r9y" src={img} alt="pokeImg" />
                </div>
                <div className="divCardText">
                  <label ><b>Type:</b></label>
                  {type && type.length>0 && type.map(t=><label>{t.name}</label>)}
                </div>
              </div>
          </div>
        </div>
        <div className="divBottom">
          <div className="divbutonBottom_dfg8"></div>
          <div className="divBottomButtonsab_64re">
            <div className="divbuttonA_k1l2">A</div> 
            <div className="divbuttonB_s1r2">B</div>
          </div>
        </div>
    </div>
      </Link>
  )
}

import { Link } from "react-router-dom";



export default function CardPokemon ({pokemon}){
  let {id,img,name,type} = pokemon
  //console.log(props)
  return(
    <div>
      <Link to={`/n/pokemon/${id}`}>
        <div>
          <img src={img} alt="pokeImg" />
          <p>{name}</p>
          <p>Type: </p>
          {type && type.length>0 && type.map(t=><p>•{t.name}</p>)}
        </div>
      </Link>
    </div>
  )
}
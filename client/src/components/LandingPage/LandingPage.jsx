import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../store/actions";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function Home (){
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
  },[])
  return(
    <div>
      <Link to='/n/home'>
        <div className='divLandingPage'>
          {/* <img src="https://images3.alphacoders.com/273/273289.jpg" alt="imagenLandingPage" /> */}
          <h1 className="h1LP">PokemonApp</h1>
          <h2 className="h2LP">Click Anywhere</h2>
        </div>
      </Link>
    </div>
  )
}
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../store/actions";
import { Link } from "react-router-dom";

export default function Home (){
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPokemonById(9))
  },[])
  return(
    <div>
      <Link to='/n/home'>
        <h1>Landing Page</h1>
      </Link>
    </div>
  )
}
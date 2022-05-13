import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../store/actions";
import { Link } from "react-router-dom";

export default function Home (){
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
  },[])
  return(
    <div>
      <Link to='/n/home'>
        <h1>Landing Page</h1>
      </Link>
    </div>
  )
}
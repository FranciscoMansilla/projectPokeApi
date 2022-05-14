import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../store/actions";
import { Link } from "react-router-dom";

export default function OpcionBar (){
  // let dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getAllPokemons())
  //   dispatch(getAllTypes())
  // },[])
  return(
    <div>
      <label for="filter" class="">Sort by:</label>
      <select name="filter" class="">
        <optgroup label="By name:">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </optgroup>
        <optgroup label="By Hp">
          <option value="Ascendent">Ascendent</option>
          <option value="Descendent">Descendent</option>
        </optgroup>
      </select>

      <label for="filter" class="">Filter by Origin:</label>
      <select name="filter" class="">
        <option value="all">All Pokemons</option>
        <option value="existing">Existing Pokemons</option>
        <option value="created">Created by User</option>
      </select>

      <label for="filter" class=''>Filter by Type:</label>
      <select name="filter" class="">
        <option value="all">All Pokemons</option>
      </select>
    </div>
  )
}
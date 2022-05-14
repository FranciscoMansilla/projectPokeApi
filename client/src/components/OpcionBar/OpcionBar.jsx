import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../store/actions";
import { Link } from "react-router-dom";

export default function OpcionBar (){
  let dispatch = useDispatch()
  let pokemons = useSelector((state)=>state.pokemons)

  
  const onChangeSort = (e)=>{
    let value = e.target.value
    if(value==="A-Z"){
      let pokeSort =pokemons
      pokeSort.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;}
        if (a.name < b.name) {
          return -1;}
        return 0;
      });
      console.log(pokeSort)
    }
    if(value==="Z-A"){
      let pokeSort =pokemons
      pokeSort.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;}
        if (a.name > b.name) {
          return -1;}
        return 0;
      });
      console.log(pokeSort)
    }
    if(value==="Ascendent"){
      let pokeSort =pokemons
      pokeSort.sort(function (a, b) {
        if (a.hp > b.hp) {
          return 1;}
        if (a.hp < b.hp) {
          return -1;}
        return 0;
      });
      console.log(pokeSort)
    }
    if(value==="Descendent"){
      let pokeSort =pokemons
      pokeSort.sort(function (a, b) {
        if (a.hp < b.hp) {
          return 1;}
        if (a.hp > b.hp) {
          return -1;}
        return 0;
      });
      console.log(pokeSort)
    }
  }
  const onChangeFilterByOrigin = (e)=>{
    if(e.target.value==='existing'){
      let pokefilter = pokemons.filter(p=>p.id>=1 && p.id<=40)
      console.log(pokefilter)
    }
    if(e.target.value==='created'){
      let pokefilter = pokemons.filter(p=>!(p.id>=1 && p.id<=40))
      console.log(pokefilter)
    }
    if(e.target.value==='all'){
      console.log(pokemons)
    }
  }
  // useEffect(()=>{
  //   dispatch(getAllPokemons())
  //   dispatch(getAllTypes())
  // },[])
  return(
    <div>
      <label for="filter" class="">Sort by:</label>
      <select onChange={onChangeSort} name="filter" class="">
        <option  value="select"></option>
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
      <select onChange={onChangeFilterByOrigin} name="filter" class="">
      <option  value="select"></option>
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
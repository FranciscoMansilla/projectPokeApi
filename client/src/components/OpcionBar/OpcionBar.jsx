import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes, getShowedPoke, updateShowedPoke } from "../../store/actions";
import { Link } from "react-router-dom";
import './OpcionBar.css'

export default function OpcionBar (){
  let dispatch = useDispatch()
  let pokemons = useSelector((state)=>state.pokemons)
  let showedPokemons = useSelector((state)=>state.showedPokemons)
  let types = useSelector((state)=>state.types)
  
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
      dispatch(updateShowedPoke(pokeSort))
      //console.log(pokeSort)
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
      dispatch(updateShowedPoke(pokeSort))
      //console.log(pokeSort)
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
      dispatch(updateShowedPoke(pokeSort))
      //console.log(pokeSort)
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
      dispatch(updateShowedPoke(pokeSort))
      //console.log(pokeSort)
    }
  }
  const onChangeFilterByOrigin = (e)=>{
    if(e.target.value==='existing'){
      let pokefilter = pokemons.filter(p=>p.id>=1 && p.id<=40)
      dispatch(updateShowedPoke(pokefilter))
      //console.log(pokefilter)
      return
    }
    if(e.target.value==='created'){
      let pokefilter = pokemons.filter(p=>!(p.id>=1 && p.id<=40))
      //console.log(pokefilter)
      dispatch(updateShowedPoke(pokefilter))
      return
    }
    if(e.target.value==='all'){
      dispatch(updateShowedPoke(pokemons))
      //console.log(pokemons)
      return
    }
  }
  const onChangeFilterTypes = (e)=>{
    let type =  e.target.value
    let pokeTypeFilter = []
    pokemons.forEach(p=>{
      p.type.forEach(t=> t.name ===type? pokeTypeFilter.push(p):null)
    })
    dispatch(updateShowedPoke(pokeTypeFilter))
    //console.log(pokeTypeFilter)
  }
  useEffect(()=>{
    if(types.length<=0){
      dispatch(getAllTypes())
    }
  },[])
  return(
    <div>
      <label className="textOpcionbar" >Sort by:</label>
      <select onChange={onChangeSort} name="filter" >
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

      <label className="textOpcionbar" >Filter by Origin:</label>
      <select onChange={onChangeFilterByOrigin} name="filter" >
      <option  value="select"></option>
        <option value="all">All Pokemons</option>
        <option value="existing">Existing Pokemons</option>
        <option value="created">Created by User</option>
      </select>

      <label className="textOpcionbar" >Filter by Type:</label>
      <select onChange={onChangeFilterTypes} name="filter" >
        <option value="all">All Pokemons</option>
        {types.length>0 && types.map(t=><option value={t.name}>{t.name}</option>)}
      </select>
    </div>
  )
}
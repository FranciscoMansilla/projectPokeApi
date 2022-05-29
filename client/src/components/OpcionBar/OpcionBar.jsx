import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, updateShowedPoke } from "../../store/actions";
import './OpcionBar.css'

export default function OpcionBar (){
  let dispatch = useDispatch()
  let pokemons = useSelector((state)=>state.pokemons)
  let types = useSelector((state)=>state.types)
  let showedPokemons = useSelector((state)=>state.showedPokemons)
  
  const onChangeSort = (e)=>{
    let value = e.target.value
    if(value==="A-Z"){
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;}
        if (a.name < b.name) {
          return -1;}
        return 0;
      });
      dispatch(updateShowedPoke(pokeSort))
    }
    if(value==="Z-A"){
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
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
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
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
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
        if (a.hp < b.hp) {
          return 1;}
        if (a.hp > b.hp) {
          return -1;}
        return 0;
      });
      dispatch(updateShowedPoke(pokeSort))

      //console.log(pokeSort)
    }
    if(value==="A_ascendent"){
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
        if (a.attack > b.attack) {
          return 1;}
        if (a.attack < b.attack) {
          return -1;}
        return 0;
      });
      dispatch(updateShowedPoke(pokeSort))
      //console.log(pokeSort)
    }
    if(value==="A_descendent"){
      let pokeSort =[...showedPokemons]
      pokeSort= pokeSort.sort(function (a, b) {
        if (a.attack < b.attack) {
          return 1;}
        if (a.attack > b.attack) {
          return -1;}
        return 0;
      });
      dispatch(updateShowedPoke(pokeSort))
  }
}
  const onChangeFilterByOrigin = (e)=>{
    if(e.target.value==='existing'){
      let pokefilter = showedPokemons.filter(p=>p.id>=1 && p.id<=40)
      dispatch(updateShowedPoke(pokefilter))
      return
    }
    if(e.target.value==='created'){
      let pokefilter = showedPokemons.filter(p=>!(p.id>=1 && p.id<=40))
      dispatch(updateShowedPoke(pokefilter))
      return
    }
    if(e.target.value==='all'){
      dispatch(updateShowedPoke(pokemons))
      return
    }
  }
  const onChangeFilterTypes = (e)=>{
    let type =  e.target.value
    let pokeTypeFilter = []
    showedPokemons.forEach(p=>{
      if(p.type){
        p.type.forEach(t=> t.name ===type? pokeTypeFilter.push(p):null)
      }
      if(p.types){
        p.types.forEach(t=> t.name ===type? pokeTypeFilter.push(p):null)
      }
    })
    dispatch(updateShowedPoke(pokeTypeFilter))
  }
  useEffect(()=>{
    if(types.length<=0){
      dispatch(getAllTypes())
    }
  },[])
  return(
    <div >
      <label className="textOpcionbar" >Sort by:</label>
      <select className="select_qw73" onChange={onChangeSort} name="filter" >
        <option  value="select"></option>
        <optgroup label="By name:">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </optgroup>
        <optgroup label="By Hp">
          <option value="Ascendent">Ascendent</option>
          <option value="Descendent">Descendent</option>
          
        </optgroup>
        <optgroup label="By Atacck">
          <option value="A_ascendent">Ascendent</option>
          <option value="A_descendent">Descendent</option>
        </optgroup>
      </select>

      <label className="textOpcionbar" >Filter by Origin:</label>
      <select className="select_qw73" onChange={onChangeFilterByOrigin} name="filter" >
      <option  value="select"></option>
        <option value="all">All Pokemons</option>
        <option value="existing">Existing Pokemons</option>
        <option value="created">Created by User</option>
      </select>

      <label className="textOpcionbar" >Filter by Type:</label>
      <select className="select_qw73" onChange={onChangeFilterTypes} name="filter" >
        <option value="all">All Pokemons</option>
        {types.length>0 && types.map(t=><option value={t.name}>{t.name}</option>)}
      </select>
    </div>
  )
}
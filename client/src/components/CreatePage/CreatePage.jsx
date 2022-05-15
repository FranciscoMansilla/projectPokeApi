import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import CreatedPage from "../CreatedPage/CreatedPage";




export default function CreatePage (){
  const [state, setState] = useState({
    name: '',
    img: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types:[]
  })
  const [flag, setFlag] = useState(false)
  const type_ = []
  const types = useSelector((state)=>state.types)
  function onSubmit(e){
    e.preventDefault();
    try {
      console.log('envio',state)
      axios.post('http://localhost:3001/pokemons',state)
      .then(response=>{
        console.log(response.data)
        setFlag(true)
        setState(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  function onClick(e){
    //e.preventDefault();
    type_.push(e.target.value)
    setState({...state,types: type_})
  }
  
  if(!flag){
  return(
    
    <div>
        <form onSubmit={onSubmit}>
          <label>Name: </label>
              <input 
                type="text" 
                name='name' 
                value={state.nombre}
                onChange={e => setState({...state,name: e.target.value})}   
              />
          <br/>
          <label>Img Url: </label>
              <input 
                type="text" 
                name='imgUrl' 
                value={state.img}
                onChange={e => setState({...state,img: e.target.value})}
              />
          <br/>
          <label>Hp: </label>
            <input 
              type="range" 
              name='hp'
              min='0'
              max='100'
              value={state.hp}
              onChange={e => setState({...state,hp: e.target.value})}
            />
          <br/>
          <label>Attack: </label>
            <input 
              type="range" 
              name='attack'
              min='0'
              max='100'
              value={state.attack}
              onChange={e => setState({...state,attack: e.target.value})}
            />
          <br/>
          <label>Defense: </label>
            <input 
              type="range" 
              name='defense'
              min='0'
              max='100'
              value={state.defense}
              onChange={e => setState({...state,defense: e.target.value})}
            />
          <br/>
          <label>Height: </label>
            <input 
              type="range" 
              name='height'
              min='0'
              max='100'
              value={state.height}
              onChange={e => setState({...state,height: e.target.value})}
            />
          <br/>
          <label>Weight: </label>
            <input 
              type="range" 
              name='weight'
              min='0'
              max='100'
              value={state.weight}
              onChange={e => setState({...state,weight: e.target.value})}
            />
          <br/>
          <select onChange={onClick}>
            <option disabled="">Select Type</option>
            {types && types.map(t=><option value={t.name} >{t.name}</option>)}
          </select>
          <br/>

          <button type="submit">Create Pokemon</button>
        </form>
      </div>
  )} else{
    return(
      <div>
        <h1>
          {console.log('created page',state)}
          <CreatedPage pokemon={state}/>
        </h1>
      </div>
    )
  }
}
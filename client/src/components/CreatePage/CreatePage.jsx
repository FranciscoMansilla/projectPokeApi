import { useState } from "react";
import { useDispatch } from "react-redux";



export default function CreatePage (){
  const [state, setState] = useState({
    name: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
  })

  const dispatch = useDispatch();
  return(
    <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
        //  dispatch(createProduct(state));
        }}>
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
          <select>
            <option disabled="">Select Type</option>
            <option value="Fire">Fire</option>
            <option value="Sueño">Sueño</option>
          </select>
          <br/>

          <button type="submit">Create Pokemon</button>
        </form>
      </div>
  )
}
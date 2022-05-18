import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatedPage from "../CreatedPage/CreatedPage";
import './CreatePage.css'



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
  const [error, setError] = useState('')
  const [pokeCreated, setPokeCreated] = useState('')
  const type_ = []
  const types = useSelector((state)=>state.types)
  function onSubmit(e){
    e.preventDefault();
    try {
      axios.post('http://localhost:3001/pokemons',state)
      .then(response=>{
        console.log(response.data)
        setFlag(true)
        setPokeCreated(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const validateName = (value)=>{
    if(!/^[a-zA-Z]+$/.test(value)){
      setError('The name cannot contain \nsymbols or numbers')
    } else{
      setError('')
    }
    setState({...state, name:value})
  }
  function onClick(e){
    //e.preventDefault();
    type_.push(e.target.value)
    setState({...state,types: type_})
  }
  
  if(!flag){
  return(
    
    <div>
      <div>
        <div className="divTotal_1x79l">
              <div className="divCard_qw14">
                <div className="topPokedex_9er8">
                  <div className="circleTopPokedex_green_q7wt"></div>
                  <div className="circleTopPokedex_yellow_q7wt"></div>
                  <div className="circleTopPokedex_red_q7wt"></div>
                </div>
                <div className="divScreenContorn_w87z">
                  
                  <div className="divScreenCard_a6fza">
                    <div className="divScreenLeft_7w8q">
                      <h3>Create Pokemon</h3>
                      {state.img.length>0  && <img className="imgCard_7r9y" src={state.img} alt="" />}
                      {error && <p className="labelError_qw78">{error}</p>}
                    </div>
                    <div className="divScreenRight_7w8q">
                      <form onSubmit={onSubmit}>
                        <label>Name: </label>
                            <input className="input_e7a8"
                              type="text" 
                              name='name' 
                              value={state.nombre}
                              onChange={(e)=>validateName(e.target.value)}   
                            />
                        <br/>
                        <label>Img Url: </label>
                            <input className="input_e7a8"
                              type="text" 
                              name='imgUrl' 
                              value={state.img}
                              onChange={e => setState({...state,img: e.target.value})}
                            />
                        <br/>
                        <label>Hp: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='hp'
                            min='0'
                            max='100'
                            value={state.hp}
                            onChange={e => setState({...state,hp: e.target.value})}
                          />
                        <br/>
                        <label>Attack: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='attack'
                            min='0'
                            max='100'
                            value={state.attack}
                            onChange={e => setState({...state,attack: e.target.value})}
                          />
                        <br/>
                        <label>Defense: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='defense'
                            min='0'
                            max='100'
                            value={state.defense}
                            onChange={e => setState({...state,defense: e.target.value})}
                          />
                        <br/>
                        <label>Height: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='height'
                            min='0'
                            max='100'
                            value={state.height}
                            onChange={e => setState({...state,height: e.target.value})}
                          />
                        <br/>
                        <label>Weight: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='weight'
                            min='0'
                            max='100'
                            value={state.weight}
                            onChange={e => setState({...state,weight: e.target.value})}
                          />
                        <br/>
                        <select className="input_e7a8" onChange={onClick}>
                          <option disabled="">Select Type</option>
                          {types && types.map(t=><option value={t.name} >{t.name}</option>)}
                        </select>
                        <br/>
                        <button disabled={!!error} type="submit">Create Pokemon</button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="divBottom">
                  <div className="divbutonBottom_dfg8"></div>
                  <div className="divBottomButtonsab_64re">
                    <div className="divbuttonA_k1l2">A</div> 
                    <div className="divbuttonB_s1r2">B</div>
                  </div>
                </div>
                <div className="divDeAbajo_79fd">
                  <Link className="buttonClose_u5o3" to='/n/home'>
                    <label>Close</label>
                  </Link>
                </div>
              </div>
            </div>
      </div>
        
      </div>
  )} else{
    return(
      <div>
        <h1>
          {console.log('created page',state)}
          {pokeCreated && <CreatedPage pokemon={state}/>}
        </h1>
      </div>
    )
  }
}
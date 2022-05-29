import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTypes } from "../../store/actions";
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
    type:[]
  })
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState([])
  const [pokeCreated, setPokeCreated] = useState('')
  
  var type_ = []
  const types = useSelector((state)=>state.types)
  function onSubmit(e){
    e.preventDefault();
    try {
      axios.post('/pokemons',state)
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
    let msg='The name cannot contain symbols or numbers'
    if(!/^[a-zA-Z]+$/.test(value)){
      if(!error.includes(msg)){
        setError([...error,msg])
      }
    } else{
      setError(error.filter(e=>e!==msg))
    }
    setState({...state, name:value.toLowerCase()})
  }
  const validateRange = (value,name)=>{
    let msg=`${name} must be between 10 and 90`
    if(value<10 || value>90){
      if(!error.includes(msg)){
        setError([...error,msg])
      }
    } else{
      setError(error.filter(e=>e!==msg))
    }
    setState({...state, [name]:value})
  }
  function onChangeType(e){
    if(!state.type.includes(e.target.value)){
      type_.push(e.target.value)
      setState({...state,type: [...state.type,...type_]})
    }
  }
  function deleteType(e){
    let value= e.target.value
    let newTypes = state.type.filter(t=>t!==value)
    setState({...state,type: newTypes})
  }
  const disabledButton = ()=>{
    if(state.name.length<=0)return true;
    if(state.img.length<=0)return true;
    if(state.hp<=0)return true;
    if(state.attack<=0)return true;
    if(state.defense<=0)return true;
    if(state.speed<=0)return true;
    if(state.height<=0)return true;
    if(state.weight<=0)return true;
    if(state.type.length<=0)return true;
    return false
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    if(types.length<=0){
      dispatch(getAllTypes())
    }
  },[])
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
                      {state.type.length>0&& <label>Type: </label>}
                      {state.type.length>0 && state.type.map(t=>
                      <div>
                        <label>{t}</label><button className="buttonClose_78fd" onClick={deleteType} value={t} >x</button>
                      </div>
                        )}
                      {error.length>0 && <p className="labelError_qw78">{error[0]}</p>}
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
                            //onChange={e => setState({...state,hp: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.hp}</label>
                        <br/>
                        <label>Attack: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='attack'
                            min='0'
                            max='100'
                            value={state.attack}
                            //onChange={e => setState({...state,attack: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.attack}</label>
                        <br/>
                        <label>Defense: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='defense'
                            min='0'
                            max='100'
                            value={state.defense}
                            // onChange={e => setState({...state,defense: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.defense}</label>
                        <br/>
                        <label>Speed: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='speed'
                            min='0'
                            max='100'
                            value={state.speed}
                            // onChange={e => setState({...state,speed: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.speed}</label>
                        <br/>
                        <label>Height: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='height'
                            min='0'
                            max='100'
                            value={state.height}
                            // onChange={e => setState({...state,height: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.height}</label>
                        <br/>
                        <label>Weight: </label>
                          <input className="input_e7a8"
                            type="range" 
                            name='weight'
                            min='0'
                            max='100'
                            value={state.weight}
                            // onChange={e => setState({...state,weight: e.target.value})}
                            onChange={e=>validateRange(e.target.value,e.target.name)}
                          /><label>{state.weight}</label>
                        <br/>
                        <select className="input_e7a8" onChange={onChangeType}>
                          <option disabled="">Select Type</option>
                          {types && types.map(t=><option value={t.name} >{t.name}</option>)}
                        </select>
                        <br/>
                        <button className="buttonSubmit_1h5j2" disabled={disabledButton() || !error.length<=0} type="submit">Create Pokemon</button>
                        
                        {/* <button className="buttonSubmit_1h5j2" disabled={state.name.length<=0 || !error.length<=0} type="submit">Create Pokemon</button> */}
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
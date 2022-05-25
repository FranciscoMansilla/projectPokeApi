import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanPokeDetail, getPokemonById } from "../../store/actions";
import Loading from "../Loading/Loading";
import './DetailPage.css'

// class DetailPage extends React.Component{
//   //let pokemon = useSelector((state)=>state.pokemonDetail)
//   constructor(props){
//     super(props);
//   }
//   componentDidMount(){
//     let id = this.props.match.params.id
//     this.props.getPokemonById(id)
//   }
//   componentWillUnmount(){
//     this.props.cleanPokeDetail()
//   }
//   // useEffect(()=>{
//   //     dispatch(getPokemonById(id))
    
//   //   return dispatch(cleanPokeDetail())
//   // },[])
//   render(){
//     let pokemon = this.props.pokemonDetail
//     if(pokemon.name){
//       return(
//         <div >
//           <div className="divTotal_1xjk">
//             <div className="divCard_qw78">
//               <div className="topPokedex_9er8">
//                 <div className="circleTopPokedex_green_q7wt"></div>
//                 <div className="circleTopPokedex_yellow_q7wt"></div>
//                 <div className="circleTopPokedex_red_q7wt"></div>
//               </div>
//               <div className="divScreenContorn_w8er">
//                 {pokemon && 
//                 <div className="divScreenCard_a6f4s">
//                   <h3>{pokemon.name}</h3>
//                   <div className="divCardImgText_4j5g">
//                     <div>
//                       <img className="img_qw79" src={pokemon.img} alt="asd" />
//                     </div>
//                     <div className="divCardText_7qt8">
//                       <label><b>Hp: </b>{pokemon.hp}</label>
//                       <label><b>Attack: </b>{pokemon.attack}</label>
//                       <label><b>Defense: </b>{pokemon.defense}</label>
//                       <label><b>Speed: </b>{pokemon.speed}</label>
//                       <label><b>Height: </b>{pokemon.height}</label>
//                       <label><b>Weight: </b>{pokemon.weight}</label>
//                       <label><b>Types: </b></label>
//                       { pokemon.type && pokemon.type.length>0 && pokemon.type.map(t=><label>  {t.name}</label>)}
//                       { pokemon.types && pokemon.types.length>0 && pokemon.types.map(t=><label>  {t.name}</label>)}
//                     </div>
//                   </div> 
//                 </div>}
//               </div>
//               <div className="divBottom">
//                 <div className="divbutonBottom_dfg8"></div>
//                 <div className="divBottomButtonsab_64re">
//                   <div className="divbuttonA_k1l2">A</div> 
//                   <div className="divbuttonB_s1r2">B</div>
//                 </div>
//               </div>
//               <div className="divDeAbajo_79fd">
//                 <Link className="buttonClose_u5o3" to='/n/home'>
//                   <label>Close</label>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           </div>
//       )
//     } else{
//       return(
//         <div>
//           <Loading />
//         </div>
//       )
//     }
//   }
// }
// export function mapStateToProps(state){
//   return{
//     pokemonDetail: state.pokemonDetail
//   }
// }
// export function mapDispatchToProps(dispatch){
//   return{
//     getPokemonById : (id) => dispatch(getPokemonById(id)),
//     cleanPokeDetail : () => dispatch(cleanPokeDetail())
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)


export default function DetailPage (props){
  let pokemon = useSelector((state)=>state.pokemonDetail)
  const id = props.match.params.id
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getPokemonById(id))
    
    return dispatch(cleanPokeDetail())
  },[])
    if(pokemon.name){
      return(
        <div >
          <div className="divTotal_1xjk">
            <div className="divCard_qw78">
              <div className="topPokedex_9er8">
                <div className="circleTopPokedex_green_q7wt"></div>
                <div className="circleTopPokedex_yellow_q7wt"></div>
                <div className="circleTopPokedex_red_q7wt"></div>
              </div>
              <div className="divScreenContorn_w8er">
                {pokemon && 
                <div className="divScreenCard_a6f4s">
                  <h3>{pokemon.name}</h3>
                  <div className="divCardImgText_4j5g">
                    <div>
                      <img className="img_qw79" src={pokemon.img} alt="asd" />
                    </div>
                    <div className="divCardText_7qt8">
                      <label><b>Hp: </b>{pokemon.hp}</label>
                      <label><b>Attack: </b>{pokemon.attack}</label>
                      <label><b>Defense: </b>{pokemon.defense}</label>
                      <label><b>Speed: </b>{pokemon.speed}</label>
                      <label><b>Height: </b>{pokemon.height}</label>
                      <label><b>Weight: </b>{pokemon.weight}</label>
                      <label><b>Types: </b></label>
                      { pokemon.type && pokemon.type.length>0 && pokemon.type.map(t=><label>  {t.name}</label>)}
                      { pokemon.types && pokemon.types.length>0 && pokemon.types.map(t=><label>  {t.name}</label>)}
                    </div>
                  </div> 
                </div>}
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
      )
    } else{
      return(
        <div>
          <Loading />
        </div>
      )
    }
    
}
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonByName } from "../../store/actions";
import './SearchBox.css'

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: ''
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getPokemonByName(this.state.search.toLowerCase())
    this.setState({search: ""})
  }
  render(){
    return(
      <div className='divSearch_'>
        <Link className='buttonCreatePoke_rt77' to='/n/create/pokemon'> Create Pokemon</Link>
        
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input className="input_qwv3"
            type="text"
            placeholder="Pokemon name..."
            value={this.state.search}
            onChange={e => this.setState({search: e.target.value})}
          />
          <input className="inputButton_qwv3" type="submit" value="🔎" />
        </form>
      </div>
    )
  }
}

export function matchDispatchToProps(dispatch){
  return{
    getPokemonByName: (name)=> dispatch(getPokemonByName(name))
  }
}
export default connect(null,matchDispatchToProps)(SearchBox)
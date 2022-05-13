import React from "react";
import { connect } from "react-redux";
import { getPokemonByName } from "../../store/actions";



class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      search: ''
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getPokemonByName(this.state.search)
    this.setState({search: ""})
  }

  render(){
    //let {onSearch} = this.props;
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Pokemon name..."
          value={this.state.search}
          onChange={e => this.setState({search: e.target.value})}
        />
        <input type="submit" value="🔎" />
      </form>
    )
  }
}
//export default SearchBox;

export function matchDispatchToProps(dispatch){
  return{
    getPokemonByName: (name)=> dispatch(getPokemonByName(name))
  }
}
export default connect(null,matchDispatchToProps)(SearchBox)


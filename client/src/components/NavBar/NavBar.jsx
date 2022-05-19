import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../img/pokemonLogoSinfondo.png'

export default class NavBar extends Component {
    render() {
        return (
            <div className='divNav'>
                <Link className='text' to='/n/home'>
                    {/* PokemonApp */}
                    <img className='imgLogo_9wtu' src={logo} alt="" />
                    </Link>
                <Link className='buttonCreatePoke_rt77' to='/n/create/pokemon'> Create Pokemon</Link>
                
            </div>
        )
    }
}
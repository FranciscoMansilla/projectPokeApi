import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'


export default class NavBar extends Component {
    render() {
        return (
            <div className='divNav'>
                <Link className='text' to='/n/home'>
                    PokemonApp
                    </Link>
                <Link className='text' to='/n/create/pokemon'> Create Pokemon</Link>
                
            </div>
        )
    }
}
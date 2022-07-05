import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../img/pokemonLogoSinfondo.png'

export default class NavBar extends Component {
    render() {
        return (
            <div className='divNav'>
                <Link className='text' to='/n/home'>
                    <img className='imgLogo_9wtu' src={logo} alt="" />
                </Link>
                <div>
                    <Link className='text' to='/n/home'>
                        <img className='imgLogo_' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="" />
                    </Link>
                    <a href="https://www.linkedin.com/in/francisco-mansilla-5a6667237/">
                        <img className='imgLogo_' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt="" />
                    </a>
                </div>
            </div>
        )
    }
}
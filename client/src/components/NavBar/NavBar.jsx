import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/n/home'>Home</Link>
                <Link to='/n/create/pokemon'>Create Product</Link>
                <SearchBox />
            </div>
        )
    }
}
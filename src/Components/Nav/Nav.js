import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor() {
        super();


    }
    render() {
        return (
            <div className="total_nav">
                <div className="left_nav">
                    <Link to='/browsing'><a>Browse</a></Link>
                    <Link to='/cart'><a>Cart</a></Link>
                    <Link to='/shelf'><a>My Shelf</a></Link>
                </div>
                <div className="right_nav">
                    <Link to='/'><a>Logout</a></Link>
                </div>


            </div>

        )
    }
}

export default Nav;
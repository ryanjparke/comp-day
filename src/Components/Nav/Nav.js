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
                    <a>Browse</a>
                    <a>Cart</a>
                    <a>My Shelf</a>
                </div>
            </div>

        )
    }
}

export default Nav;
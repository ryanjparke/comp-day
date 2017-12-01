import React, { Component } from 'react';
import './Shelf.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';




class Shelf extends Component {
    constructor() {
        super();

    }
    render () {
        return(
            <div className="shelf_container">
                <Nav />
                <div className="child_shelf">
                <h1>My Shelf</h1>
                </div>
            </div>
        )

    }
}

export default Shelf;
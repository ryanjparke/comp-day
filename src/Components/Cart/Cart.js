import React, { Component } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';




class Cart extends Component {
    constructor() {
        super();

    }
    render () {
        return(
            <div className="cart_container">
                <Nav />
                <div className="child_cart">
                <h1>My Cart</h1>
                </div>
            </div>
        )

    }
}

export default Cart;
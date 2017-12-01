import React, { Component } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';




class Details extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { products }=this.props
        return (
            <div className="details_container">
                <Nav />
                <div className="child_details">
                    <h1>Details</h1>
                    <div className="products_container">
                        <div className="indv_product">
                            <h2>The Hobbit</h2>
                            <button className="addToCart" onClick={()=>{this.props.addToCart(products[0])}}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return({
        products: state.products
    })
}

export default connect(mapStateToProps, { addToCart })(Details);

// export default Details;
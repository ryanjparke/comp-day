import React, { Component } from 'react';
import './Browsing.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';




class Browsing extends Component {
    constructor() {
        super();

    }
    render () {
        return(
            <div className="browsing_container">
                <Nav />
                <div className="child_browse">
                <h1>Browse Inventory</h1>
                </div>
            </div>
        )

    }
}

export default Browsing;


























// class Browsing extends Component {
//     constructor(props) {
//         super(props);
//     }

// }

// render() {
//     return (
//         <div className="Browsing_container" >
//             <h1>Browsing</h1>
//         </div>
//     )
// }
// }


// export default Browsing;
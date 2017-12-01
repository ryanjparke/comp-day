import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';




class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val })
    }

    render() {
        return (
            <div id="login_container">
                <div id="login_child">
                    <h1>Book Exchange</h1>
                    <div id="input_container" >
                        <input className="login_input" type='text' placeholder='Username' onChange={(e) => this.handleChange('username', e.target.value)} />
                        <input className="login_input" type='password' placeholder='Password' onChange={(e) => this.handleChange('password', e.target.value)} />
                        <div className="Lbutton_container" >
                            <Link to='/browsing'><button >Login </button></Link>
                            <Link to='/'><button>Register </button></Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;

// export default connect( state => state, { loginName, loginPassword, registerName, registerPassword } )( Login );
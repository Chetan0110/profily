import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticateUser } from '../actions';

/**
 * Login component which displays two input box to enter
 * username and password, and one login button,
 * on click of which login will happen
 */
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    /**
     * On change of the text in username or password field,
     * exection comes here, set the entered text accordingly in 
     * the state
     * @param {*} e 
     */
    onInputChange(e) {
        if (e.target.id === 'user_name') {
            this.setState({ user_name: e.target.value });
        }
        else {
            this.setState({ password: e.target.value });
        }
    }

    /**
     * On click of login button, execution comes here.
     * Call the action to initiate API call, which will check
     * for valid username and password
     */
    onLoginClick() {
        this.props.authenticateUser(this.state.user_name, this.state.password);
    }

    /**
     * render method of the component to construct the DOM
     * to display two text field to enter username and password,
     * and login button
     */
    render() {
        return (
            <div>
                <h1 style={{ marginTop: "20px" }}>Profily App</h1>
                <div className="loginDiv">
                    <form style={{ marginTop: "100px" }}>
                        <div className="form-group">
                            <label htmlFor="user_name">User Name</label>
                            <input
                                id="user_name"
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="form-group" style={{ marginTop: "20px" }}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <button
                            type="button"
                            className='btn btn-success'
                            style={{ marginTop: "20px", marginLeft: "45%" }}
                            onClick={this.onLoginClick}
                        >
                            <Link
                                to='/profile'
                                style={{ color: 'white', display: 'block', height: '100%' }}
                            >
                                Login
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    user_data: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user_data: state.userData
    };
}

export default connect(mapStateToProps, {
    authenticateUser
})(Login);
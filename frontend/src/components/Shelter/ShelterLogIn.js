import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

function ShelterLogin() {
    return (
        <div className="container">
            <LoginForm />
            <Link to="/sheltercreateaccount" className="createAccountLink">Create An Account</Link>
        </div>
    )
}

export default ShelterLogin;
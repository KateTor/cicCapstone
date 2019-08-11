import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

function UserLogin() {
    return (
        <div className="container">
            <LoginForm />
            <Link to="/createaccount" className="createAccountLink">Create An Account</Link>
        </div>
    )
}

export default UserLogin;
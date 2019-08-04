import React from 'react';

class UserLoginChoice extends React.Component {
    userSignUp = (event) => {
        this.props.history.push(`/createaccount`)
    }

    userSignIn = (event) => {
        this.props.history.push(`/usersignin`)
    }

    render() {
        return (
            <div>
                <h2>Header</h2>
                <button
                    onClick={this.userSignUp}>
                        CreateAccount
                </button>
                <button
                    onClick={this.userSignIn}>
                        Log In
                </button>
            </div>
        )
    }
}

export default UserLoginChoice;


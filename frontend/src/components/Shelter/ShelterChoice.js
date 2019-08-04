import React from 'react';

class ShelterLoginChoice extends React.Component {
    shelterCreateAccount = (event) => {
        this.props.history.push(`/sheltercreateaccount`);
    }

    shelterLogIn = (event) => {
        this.props.history.push(`/sheltersignin`)
    }

    render() {
        return (
            <div>
                <h3>Logo</h3>
                <h2>Shelter</h2>
                <button
                    onClick={this.shelterCreateAccount}>
                        Create An Account
                </button>
                <button
                    onClick={this.shelterLogIn}>
                        Log In
                </button>
            </div>
        )
    }
}

export default ShelterLoginChoice;
import React from 'react';

class WelcomePage extends React.Component {

    takeQuiz = (event) => {
        this.props.history.push(`/quiz`);
    }

    userLogin = (event) => {
        this.props.history.push(`/userlogin`);
    }

    shelterLogin = (event) => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <h1>Logo</h1>
                <Button
                    onClick={this.takeQuiz}>Take the Quiz</Button>
                <span><a onClick={this.userLogin}>User</a></span>
                <span><a onClick={this.shelterLogin}>Shelter</a></span>
            </div>
        )
    }
}

export default WelcomePage
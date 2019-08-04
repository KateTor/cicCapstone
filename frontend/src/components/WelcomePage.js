import React from 'react';

class WelcomePage extends React.Component {

    takeQuiz = (event) => {
        this.props.history.push(`/quiz`);
    }

    render() {
        return (
            <div>
                <h1>Logo</h1>
                <button
                    onClick={this.takeQuiz}>Take the Quiz
                </button>
                <div>
                    <a href="/user">User</a>
                    <a href="/shelter">Shelter</a>
                </div>
            </div>
        )
    }
}

export default WelcomePage
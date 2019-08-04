import React from 'react';

class UserHomepage extends React.Component {
    takeQuiz = (event) => {
        this.props.history.push(`/quiz`)
    }

    render() {
        return (
            <div>
                display for user's homepage
                <button onClick={this.takeQuiz}>
                    Take The Quiz
                </button>
            </div>
        )
    }
}

export default UserHomepage;
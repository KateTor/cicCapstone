import React from 'react';
import { Link } from 'react-router-dom';

class WelcomePage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="welcomeContainer">
                    <h1 className="logo">Pup Ups</h1>
                    <h2 className="welcomeExplainer">Welcome to Pup Ups, a fun quiz that matches your personality to an adoptable dog looking for their forever home.</h2>
                    <button className="button"><Link to="/quiz" className="button">Take the Quiz</Link></button>
                </div>
                <footer className="welcomeFooter">
                    <div className="welcomeFooterContainer">
                        <Link to="/shelter" className="footerLink">Shelter Log In</Link>
                        <Link to="/user" className="footerLink">Log In</Link>
                    </div>
                </footer>
            </div>
        )
    }
}

export default WelcomePage
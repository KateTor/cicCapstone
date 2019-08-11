import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import App from './App';
import ShelterHomepage from './Shelter/ShelterHomepage';
import ShelterSignUp from './Shelter/ShelterSignUp';
import ShelterLogIn from './Shelter/ShelterLogIn';
import UserHomepage from './User/UserHomepage';
import UserLogIn from './User/UserLogIn';
import UserSignUp from './User/UserSignUp';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/quiz" component={App} />

            <Route path="/shelteraccount" component={ShelterHomepage} />
            <Route path="/sheltercreateaccount" component={ShelterSignUp} />
            <Route path="/shelter" component={ShelterLogIn} />

            <Route path="/useraccount" component={UserHomepage} />
            <Route path="/user" component={UserLogIn} />
            <Route path="/createaccount" component={UserSignUp} />
        </Switch>
    </BrowserRouter>
)

export default Router;
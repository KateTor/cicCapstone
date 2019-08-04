import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import App from './App';
import ShelterForm from './Shelter/ShelterForm';
import ShelterHomepage from './Shelter/ShelterHomepage';
import ShelterSignUp from './Shelter/ShelterSignUp';
import ShelterLogIn from './Shelter/ShelterLogIn';
import UserHomepage from './User/UserHomepage';
import UserSignIn from './User/UserSignIn';
import UserSignUp from './User/UserSignUp';
import UserChoice from './User/UserChoice';
import ShelterChoice from './Shelter/ShelterChoice';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/quiz" component={App} />
            <Route path="/shelterform" component={ShelterForm} />
            <Route path="/shelteraccount" component={ShelterHomepage} />
            <Route path="/sheltercreateaccount" component={ShelterSignUp} />
            <Route path="/sheltersignin" component={ShelterLogIn} />
            <Route path="/shelter" component={ShelterChoice} />
            <Route path="/useraccount" component={UserHomepage} />
            <Route path="/usersignin" component={UserSignIn} />
            <Route path="/createaccount" component={UserSignUp} />
            <Route path="/user" component={UserChoice} />
        </Switch>
    </BrowserRouter>
)

export default Router;
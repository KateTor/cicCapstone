import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import App from './App';
import ShelterForm from './Shelter/ShelterForm';
import ShelterHomepage from './Shelter/ShelterHomepage';
import ShelterSignUp from './Shelter/ShelterSignUp';
import UserHomepage from './User/UserHomepage';
import UserSignIn from './User/UserSignIn';
import UserSignUp from './User/UserSignUp';
import LoginChoice from './User/UserLogInChoice';
import ShelterLoginChoice from './Shelter/ShelterLoginChoice';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/quiz" component={App} />
            <Route path="/shelterform" component={ShelterForm} />
            <Route path="/shelteraccount" component={ShelterHomepage} />
            <Route path="/sheltercreateaccount" component={ShelterSignUp} />
            <Route path="/shelterlogin" component={ShelterLoginChoice} />
            <Route path="/useraccount" component={UserHomepage} />
            <Route path="/usersignin" component={UserSignIn} />
            <Route path="/createaccount" component={UserSignUp} />
            <Route path="/userlogin" component={LoginChoice} />
        </Switch>
    </BrowserRouter>
)

export default Router;
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
import DogContainer from './DogContainer';
import AddDogForm from './Shelter/AddDogForm';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/quiz" component={App} />

            <Route path="/shelteraccount" component={ShelterHomepage} />
            <Route path="/sheltercreateaccount" component={ShelterSignUp} />
            <Route path="/shelter" component={ShelterLogIn} />
            <Route path="/newdog" component={AddDogForm} />

            <Route path="/useraccount" component={UserHomepage} />
            <Route path="/user" component={UserLogIn} />
            <Route path="/createaccount" component={UserSignUp} />

            <Route path="/dogcontainer" component={DogContainer} />
        </Switch>
    </BrowserRouter>
)

export default Router;
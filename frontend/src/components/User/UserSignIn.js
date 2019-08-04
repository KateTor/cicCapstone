import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UserSignIn extends React.Component {
    signIn = (event) => {
        //submit form and confirm user in database

        //if user doesn't exist, alert to create account

        //if user exists but credentials don't work alert, log in incorrect

        //if correct send user to their home page
        this.props.history.push(`/useraccount`)
    }

    render() {
        return(
            <Form onSubmit={this.signIn}>
                <FormGroup>
                    <Label for="email" hidden>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password"></Input>
                </FormGroup>
                <Button>Log In</Button>
            </Form>
        )
    }
}

export default UserSignIn;
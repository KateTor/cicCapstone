import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends React.Component {
    render() {
        return(
            <Form>
                <FormGroup>
                    <Label for="email" hidden>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password" hidden>Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password"></Input>
                </FormGroup>
                <Button>Sign In</Button>
            </Form>
        )
    }
}
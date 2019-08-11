import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function LoginForm() {
    return (
        <div>
            <h1 className="logo">Pup Ups</h1>
            <div className="loginFormContainer">
                <Form>
                    <FormGroup>
                        <Label for="email" hidden>Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" hidden>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password"></Input>
                    </FormGroup>
                    <button className="button">Log In</button>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;
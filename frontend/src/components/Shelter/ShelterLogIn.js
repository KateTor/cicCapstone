import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ShelterLogin extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <FormGroup>
                        <Label for="email" hidden>Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" hidden>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password"></Input>
                    </FormGroup>
                    <Button>Log In</Button>
                </form>
            </div>
        )
    }
}

export default ShelterLogin;
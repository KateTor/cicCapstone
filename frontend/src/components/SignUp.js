import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends React.Component {
  render() {
    return(
      <Form>
        <FormGroup>
          <Label for="firstName" hidden>First Name</Label>
          <Input type="firstName" name="firstName" id="firstName" placeholder="First Name"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="lastName" hidden>Last Name</Label>
          <Input type="lastName" name="lastName" id="lastName" placeholder="Last Name"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email" hidden>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Create Password</Label>
          <Input type="password" name="password" id="password" placeholder="Create Password"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword" hidden>Confirm Password</Label>
          <Input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"></Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> I want to receive updates when a dog becomes available that matches my results.
          </Label>
        </FormGroup>
      </Form>
    )
  }
}
import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

function SignUp() {
    return (
      <div className="container">
        <h1 className="logo">Pup Ups</h1>
        <Form className="createAccountForm">
          <Row>
            <Col>
              <FormGroup>
                <Label for="firstName" hidden>First Name</Label>
                <Input type="firstName" name="firstName" id="firstName" placeholder="First Name"></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="lastName" hidden>Last Name</Label>
                <Input type="lastName" name="lastName" id="lastName" placeholder="Last Name"></Input>
              </FormGroup>
            </Col>
          </Row>
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
            <Label check className="updatesCheckbox">
              <Input type="checkbox" /> I want to receive updates when a dog becomes available that matches my results.
            </Label>
          </FormGroup>
          <button className="button">Submit</button>
        </Form>
      </div>
    )
}

export default SignUp
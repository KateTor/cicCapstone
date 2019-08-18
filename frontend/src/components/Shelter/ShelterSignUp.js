import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

function ShelterSignUp() {
  return (
    <div className="container">
      <h1 className="logo">Pup Ups</h1>
      <Form>
          <FormGroup>
            <Label for="organizationName" hidden>Organization's Name</Label>
            <Input type="text" name="organizationName" id="organizationName" placeholder="Organization's Name"></Input>
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="streetNumber" hidden>Street Number</Label>
                <Input type="text" name="streetNumber" id="streetNumber" placeholder="Street Number"></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="streetName" hidden>Street</Label>
                <Input type="text" name="streetName" id="streetName" placeholder="Street"></Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="city" hidden>City</Label>
            <Input type="text" name="city" id="city" placeholder="City"></Input>
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="state" hidden>State</Label>
                <Input type="text" name="state" id="state" placeholder="State"></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="zipCode" hidden>Zip Code</Label>
                <Input type="text" name="zipCode" id="zipCode" placeholder="Zip Code"></Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="phoneNumber" hidden>Phone Number</Label>
            <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="email" hidden>Email</Label>
            <Input type="text" name="email" id="email" placeholder="Email"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="website" hidden>Website</Label>
            <Input type="text" name="website" id="website" placeholder="Website"></Input>
          </FormGroup>
          <button type="submit" className="button">Submit</button>  
      </Form>
    </div>
  )
}

export default ShelterSignUp;
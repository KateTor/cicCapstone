import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ShelterForm extends React.Component {
  render() {
    return(
      <Form>
        <FormGroup>
          <Label for="shelterName" hidden>Name of Shelter</Label>
          <Input type="shelterName" name="shelterName" id="shelterName" placeholder="Name of Shelter"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="shelterAbout" hidden>Tells about your shelter.</Label>
          <Input type="textarea" name="shelterAbout" id="shelterAbout" />
        </FormGroup>
        <FormGroup>
          <Label for="shelterAddress" hidden>Address</Label>
          <Input type="shelterAddress" name="shelterAddress" id="shelterAddress" placeholder="Address"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber" hidden>Phone Number</Label>
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"></Input>
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
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default ShelterForm
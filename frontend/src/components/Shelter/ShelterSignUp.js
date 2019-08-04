import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const ShelterSignUp = () => (
    <Form>
        <FormGroup>
          <Label for="shelterName" hidden>Shelter's Name</Label>
          <Input type="text" name="shelterName" id="shelterName" placeholder="Shelter Name"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="streetNumber" hidden>Street Number</Label>
          <Input type="text" name="streetNumber" id="streetNumber" placeholder="streetNumber"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="streetName" hidden>Street</Label>
          <Input type="text" name="streetName" id="streetName" placeholder="Street"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="city" hidden>City</Label>
          <Input type="text" name="city" id="city" placeholder="City"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="state" hidden>State</Label>
          <Input type="text" name="state" id="state" placeholder="State"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="zipCode" hidden>Zip Code</Label>
          <Input type="text" name="zipCode" id="zipCode" placeholder="Zip Code"></Input>
        </FormGroup>
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
        <button type="submit">Submit</button>  
    </Form>
)

export default ShelterSignUp;
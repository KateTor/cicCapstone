import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddDogForm extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className="logo">Pup Ups</h1>
        <h2>Add a New Dog</h2>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name" hidden>Name</Label>
                <Input type="text" name="dogName" id="dogName" placeholder="Name" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="description" hidden>Description</Label>
                <Input type="textarea" name="dogDescription" id="dogDescription" placeholder="Description" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="Upload a Photo">Upload Photo</Label>
                <Input type="file" name="dogPhoto" id="dogPhoto"/>
              </FormGroup>
            </Col>
          </Row>
         
          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                  <Input type="radio" name="radioA" />{' '}
                    Option one is this and that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                  <Input type="radio" name="radioB" />{' '}
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                  <Input type="radio" name="radioC" />{' '}
                    Option three is disabled
                  </Label>
                </FormGroup>
              </Col>
          </FormGroup>


          <button class="button" type="submit">Submit</button>
        </Form>
      </div>
    )
  }
}

export default AddDogForm;
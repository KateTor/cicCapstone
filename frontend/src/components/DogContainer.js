import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function DogContainer(props) {
    return (
        <Container>
            <Row>
                <Col xs = "6">
                    <img src = "#" alt = "Dog"></img>
                </Col>
                <Col xs = "6">
                    {/* result meter */}
                    <h3>Dog's Name</h3>
                    <p>Description</p>
                </Col>
            </Row>
            <div className="organizationInfo">
                <h5>Organization's Name</h5>
                <a>Organization's Website</a>
                <h6>Organization's Address</h6>
                <h6>Organization's Phone Number</h6>
            </div>
        </Container>
    )
}

export default DogContainer;
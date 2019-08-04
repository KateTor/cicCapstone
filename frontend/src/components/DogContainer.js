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
            <h5>Shelter Information</h5>
        </Container>
    )
}

export default DogContainer;
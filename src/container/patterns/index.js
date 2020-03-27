import React from 'react';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Patterns = () => {
    return (
        <Container>
            <Row>
                <Col className='column'>1 of 3</Col>
                <Col className='column'>2 of 3</Col>
                <Col className='column'>3 of 3</Col>
            </Row>
            <Row>
                <Col className='column'>1 of 3</Col>
                <Col className='column'>2 of 3</Col>
                <Col className='column'>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Patterns;

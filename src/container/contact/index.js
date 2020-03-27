import React from 'react';
import Sidebar from '../../components/sidebar';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col className='contact'>Contact information</Col>
                <Col className='sidebar' xs={2}>
                    <Sidebar ></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

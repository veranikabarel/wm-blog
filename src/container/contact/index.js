import React from 'react';
import Sidebar from '../../components/sidebar';
import ContactForm from '../../components/contactForm';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ContactForm></ContactForm>
                </Col>
                <Col xs={2}>
                    <Sidebar ></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

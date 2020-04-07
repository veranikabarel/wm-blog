import React from 'react';
import Sidebar from '../../components/sidebar';
import ContactForm from '../../components/contactForm';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const Contact = () => {
    return (
        <Container className='contactPage'>
            <Row>
                <Col sm={9}>
                    <ContactForm></ContactForm>
                </Col>
                <Col sm={3}>
                    <Sidebar ></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

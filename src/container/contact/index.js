import React from 'react';
import Sidebar from '../../components/sidebar';
import './style.scss';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col className='contact'>
                    <p>If you have any question, would like to get some additional info, tell me
                        what’s up or just say “Hi!”, use the following form to contact me! I’ll answer
                        as soon as possible.</p>
                    <Form>
                        <Form.Row className='contactRow'>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name"/>
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name"/>
                            </Col>
                        </Form.Row>

                        <Form.Row className='contactRow'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='name@example.com'/>
                        </Form.Row>

                        <Form.Row className='contactRow'>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type='subject'/>
                        </Form.Row>

                        <Form.Row className='contactRow'>
                            <Form.Label>Message
                            </Form.Label>
                            <Form.Control type='text'/>
                        </Form.Row>
                    </Form>
                    <Button variant='light' type='submit'>
                        Send
                    </Button>

                </Col>
                <Col xs={2}>
                    <Sidebar ></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

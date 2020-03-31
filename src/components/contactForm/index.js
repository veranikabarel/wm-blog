import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import './style.scss';

const ContactForm = () => {
    return (
        <div className='contact'>
            <p>If you have any question, would like to get some additional info, tell me
                what’s up or just say “Hi!”, use the following form to contact me!</p>
            <Form>
                <Form.Row className='contactRow'>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name'/>
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name'/>
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
        </div>
    )
}

export default ContactForm;
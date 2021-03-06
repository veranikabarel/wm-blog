import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import './style.scss';

const NewsletterForm = () => {
    return (
        <Form.Group className='newsletterForm'>
            <h5>Newsletter:</h5>
            <Form.Row>
                <Col>
                    <Form.Control size='sm' type='email'/>
                </Col>
            </Form.Row>
            < Button className='newsletterFormButton' variant='light' type='submit' size='sm'>
                Sign Up
            </Button>
        </Form.Group>
    );
}

export default NewsletterForm;
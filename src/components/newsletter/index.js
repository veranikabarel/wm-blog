import React from 'react';
import {Form, Button} from 'react-bootstrap';

const NewsletterForm = () => {
    return (
        <Form>
            <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>
                    <h5>Newsletter:</h5>
                </Form.Label>
                <Form.Control type='email' placeholder='name@example.com'/>
            </Form.Group>
            <Button variant='light' type='submit'>
                Sign up
            </Button>
        </Form>
    );
}

export default NewsletterForm;

import React from 'react';
import {Image, Container, Row} from 'react-bootstrap';
import postPic from '../../assets/random.png';
import './style.scss';

const ContactForm = () => {
    return (
        <Container>
            <Row>
                <p>If you have any question or would like to tell me what’s up or just say
                    “Hi!”, don't hesistate to contact me!</p>
            </Row>
            <Row>
                <p>veranikabarel(at)gmail.com</p>
            </Row>
            <Row>
                <Image className='contactPageImage' src={postPic} fluid rounded/>
            </Row>

        </Container>
    )
}

export default ContactForm;
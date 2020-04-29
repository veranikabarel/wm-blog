import React from 'react';
import {Card, Button} from 'react-bootstrap';
import postPic from '../../assets/sockss.JPG';
import './style.scss';

const CardTemplate = () => {
    return (
        <Card className='text-center'>
            <Card.Img className='cardImg' variant="top" src={postPic}/>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="light">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardTemplate;

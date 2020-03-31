import React from 'react';
import {Card, Button} from 'react-bootstrap';
import profilePic from './me.jpg';
import './style.scss';

const CardTemplate = () => {
    return (
        <div>
            <Card className='cardTemplate text-center'>
                <Card.Img variant="top" src={profilePic}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="light">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CardTemplate;

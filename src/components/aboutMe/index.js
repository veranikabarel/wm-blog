import React from 'react';
import me from './me.jpg';
import {Card} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div>
            <Card>
                <Card.Img variant='top' src={me} alt='Me'/>
                <Card.Body>
                    <Card.Text>
                        Hello!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutMe;

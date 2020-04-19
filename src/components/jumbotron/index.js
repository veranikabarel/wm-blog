import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './style.scss';

const JumbotronImg = () => {
    return (
        <Jumbotron className='jumbotron'>
            <h1>love for wool</h1>
            <p>
                <Button href ='/blog' className='jumbotron_btn' variant="light">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default JumbotronImg;

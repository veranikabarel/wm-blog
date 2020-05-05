import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
// import postPic from '../../assets/random.png';
import './style.scss';

const JumbotronImg = () => {
    return (
        <Jumbotron className='jumbotron'>
            {/* <img src={postPic} alt='hero'/> */}
            <h1>love for wool</h1>
            <p>
                <Button href='/blog' className='jumbotron_btn' variant="light">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default JumbotronImg;

import React from 'react';
import {Container} from 'react-bootstrap';
import JumbotronImg from '../../components/jumbotron';
import './style.scss';

const Home = () => {
    return (
        <Container className='home'>
            <JumbotronImg/>
        </Container>
    );
}

export default Home;
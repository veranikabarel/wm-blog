import React from 'react';
import Sidebar from '../../components/sidebar';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className='home'>Home stuff (new posts)</Col>
                <Col className='sidebar' xs={2}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

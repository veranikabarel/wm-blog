import React from 'react';
import BlogPost from '../../components/blogPost'; 
import Sidebar from '../../components/sidebar';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';

const blogPage = () => {
    return (
        <Container>
        <Row>
            <Col className='contact'><BlogPost/></Col>
            <Col className='sidebar' xs={2}>
                <Sidebar ></Sidebar>
            </Col>
        </Row>
    </Container>
    )
}

export default blogPage;

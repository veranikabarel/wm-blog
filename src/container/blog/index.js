import React from 'react';
import BlogPostTemplate from '../../components/blogPostTemplate';
import Sidebar from '../../components/sidebar';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const blogPage = () => {

    return (
        <Container>
            <Row>
                <Col className='blogPostTemplate'><BlogPostTemplate/></Col>
                <Col xs={2}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Container>
    )
}

export default blogPage;

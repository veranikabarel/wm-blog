import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BlogPostTemplate from '../../components/blogPostTemplate';
import Sidebar from '../../components/sidebar';
import './style.scss';

const blogPage = () => {

    return (
        <Container>
            <Row>
                <Col sm={9}><BlogPostTemplate/></Col>
                <Col sm={3}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Container>
    )
}

export default blogPage;

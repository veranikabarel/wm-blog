import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BlogPostTemplate from '../../components/blogPostTemplate';
import Pagination from '../../components/pagination';
import Sidebar from '../../components/sidebar';
import './style.scss';

const blogPage = () => {

    return (
        <Container className='blogPage'>
            <Row>
                <Col sm={9}><BlogPostTemplate/></Col>
                <Col sm={3}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default blogPage;

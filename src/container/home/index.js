import React from 'react';
import Sidebar from '../../components/sidebar';
import BlogPostTemplate from '../../components/blogPostTemplate';
import PaginationNumbers from '../../components/pagination';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <BlogPostTemplate></BlogPostTemplate>
                    <BlogPostTemplate></BlogPostTemplate>
                    <BlogPostTemplate></BlogPostTemplate>
                </Col>
                <Col sm={3}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            <PaginationNumbers></PaginationNumbers>
        </Container>
    );
}

export default Home;
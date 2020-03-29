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
                <Col className='home'>
                    <BlogPostTemplate></BlogPostTemplate>
                    <PaginationNumbers></PaginationNumbers>
                </Col>

                <Col className='sidebar' xs={2}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;
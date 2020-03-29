import React from 'react';
import Sidebar from '../../components/sidebar';
import BlogPostTemplate from '../../components/blogPostTemplate';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className='home'>
                    <BlogPostTemplate>
                        <h1>The title of the blog post</h1>
                        <h5>Highlights of the article</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </BlogPostTemplate>
                </Col>

                <Col className='sidebar' xs={2}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
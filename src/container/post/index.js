import React from 'react';
import BlogPost from '../../components/blogPost';
import Sidebar from '../../components/sidebar';
import './style.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Post = () => {
    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <BlogPost/>
                </Col>
                <Col sm={3}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>

    );
}

export default Post;

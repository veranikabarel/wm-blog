import React from 'react';
import {Image, Button, Container, Row, Col} from 'react-bootstrap';
import postPic from '../../assets/random.png';
import './style.scss';

const BlogPostTemplate = () => {
    return (
        <Container className='post'>
        <Row>
            <Col>
                <Image className='postTemplateImage' src={postPic} fluid/>
            </Col>
            <Col className='postText'>
                <h3 className='postTemplateHeading'>The title of the blog post</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant='light'>Learn more</Button>
            </Col>
        </Row>
    </Container>

    );
}

export default BlogPostTemplate;
import React from 'react';
import {Row, Container} from 'react-bootstrap';

import './style.scss';

const BlogPost = () => {
    return (
        <Container className='blogPost'>
            <Row><p>This is a blog post.</p></Row>
        </Container>
    );
}

export default BlogPost;

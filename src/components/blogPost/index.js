import React from 'react';
import {Container} from 'react-bootstrap';
import BlogPostTemplate from '../blogPostTemplate';
import './style.scss';

const BlogPost = () => {
    return (
        <Container>
            <BlogPostTemplate></BlogPostTemplate>
        </Container>
    );
}

export default BlogPost;

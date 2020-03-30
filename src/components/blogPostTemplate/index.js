import React from 'react';
import random from './random.jpg';
import {Container, Image, Button} from 'react-bootstrap';
import './style.scss';

const BlogPostTemplate = () => {
    return (
        <Container>
            <div className='post'>
                <Image className='postTemplateImage' src={random} fluid/>
                <h3 className='postTemplateHeading'>The title of the blog post</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant="light">Learn more</Button>
            </div>
        </Container>
    );
}

export default BlogPostTemplate;

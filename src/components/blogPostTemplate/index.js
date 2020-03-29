import React from 'react';
import './style.scss';
import {Container} from 'react-bootstrap';

const BlogPostTemplate = () => {
    return (
        <Container>
            <div className='post'>
                <h3>The title of the blog post</h3>
                <h5>Highlights of the article</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </Container>
    );
}

export default BlogPostTemplate;

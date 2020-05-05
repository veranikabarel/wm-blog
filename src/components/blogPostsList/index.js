import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import postPic from '../../assets/random.png';
import './style.scss';

const BlogPostsList = () => {
    return (
        <div className='blogPostsList'>
            <Row>
                <Col>
                    <Card.Img className='cardImg' src={postPic}/>
                </Col>
                <Col>
                    <Card.Body className='text-center'>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button href='/blog-post' variant="light">Go somewhere</Button>
                    </Card.Body>
                </Col>
            </Row>
        </div>
    );
}

export default BlogPostsList;

import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';
import './style.scss';

const SearchForm = () => {
    return (
        <Form.Group className='searchForm'>
            <Form.Row>
                <Col>
                    <Form.Control size='sm' type='text'/>
                </Col>
                < Button className='searchButton' variant='light' type='submit' size='sm'>
                    Search
                </Button>
            </Form.Row>
        </Form.Group>
    );
}

export default SearchForm;
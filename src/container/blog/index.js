import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../../components/pagination';
import Sidebar from '../../components/sidebar';
import './style.scss';
import CardTemplate from '../../components/cardTemplate';

const blogPage = () => {

    return (
        <Container className='blogPage'>
            <Row>
                <Col sm={9}><CardTemplate/></Col>
                <Col sm={3}>
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            <Pagination/>
        </Container>
    )
}

export default blogPage;

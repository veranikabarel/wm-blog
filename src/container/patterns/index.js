import React from 'react';
import CardTemplate from '../../components/cardTemplate';
import {Container, Row, Col} from 'react-bootstrap';
import './style.scss';

const Patterns = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <CardTemplate></CardTemplate>
                </Col>
                <Col sm={4}>
                    <CardTemplate></CardTemplate>
                </Col>
                <Col sm={4}>
                    <CardTemplate></CardTemplate>
                </Col>
            </Row>
        </Container>
    );
}

export default Patterns;

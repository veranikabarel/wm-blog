import React from 'react';
import {Pagination} from 'react-bootstrap';
import './style.scss';

const PaginationNumbers = () => {

    return (
        <div>
            <Pagination size='sm' className='pagination justify-content-center'>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next/>
            </Pagination>
        </div>
    );
}

export default PaginationNumbers;

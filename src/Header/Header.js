import React from 'react';
import {Row, PageHeader} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Row>
            <PageHeader bsClass='page-header' className='header'>
                <h1>Check the current weather 1234567890</h1>
            </PageHeader>
        </Row>
    );
}

export default Header;
import React from 'react';
import {Row, PageHeader} from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <PageHeader bsClass='page-header'>
                <h1>Check the current weather</h1>
            </PageHeader>
        </Row>
    );
}

export default Header;
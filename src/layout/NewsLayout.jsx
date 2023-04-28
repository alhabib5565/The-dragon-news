import React, { useEffect, useState } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import Headertitle from '../pages/shared/Header/Headertitle';

const NewsLayout = () => {
    return (
        <div>
            <Container>
                <Headertitle></Headertitle>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;
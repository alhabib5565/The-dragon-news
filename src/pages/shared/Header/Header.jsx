import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Headertitle from './Headertitle';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Provider/AuthProvider';
import HeaderNav from './HeaderNav';

const Header = () => {

    return (
        <Container>
            <Headertitle></Headertitle>
            <div className='d-flex p-2'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div className='my-4'>
                <HeaderNav></HeaderNav>
            </div>
        </Container>
    );
};

export default Header;
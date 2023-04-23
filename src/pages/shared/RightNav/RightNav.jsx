import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <>
            <div className='mb-5'>
                <h2 className='mb-4 fw-bold'>Login With</h2>
                <Button className='mb-2 d-block' variant="outline-success"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
            </div>
            <div>
                <h3 className='mb-4 fw-bold'>Find Us</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            <div>
                <Qzone></Qzone>
            </div>
            </div>
        </>
    );
};

export default RightNav;
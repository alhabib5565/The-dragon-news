import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button } from 'react-bootstrap';

const Headertitle = () => {
    return (
            <div className='text-center mb-4'>
                <img className='mb-2' src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        
    );
};

export default Headertitle;
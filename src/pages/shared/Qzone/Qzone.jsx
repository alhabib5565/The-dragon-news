import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-secondary bg-opacity-50 my-3'>
            <h2>Q-Zone</h2>
            <div className=' text-center'>
                <img className='mb-3' src={qZone1} alt="" />
                <img className='mb-3' src={qZone2} alt="" />
                <img className='mb-3' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
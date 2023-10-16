import React from 'react';
import license1 from '../../../src/assets/license1.jpg'
import license2 from '../../../src/assets/license2.jpg'

const License = () => { 
    return (
        <div className=' text-2xl text-yellow-700 text-center py-5'>
            <h1>Govt License Page</h1>
            <div className=' flex justify-center w-full md:w-1/2 mx-auto'>
                <img src={license1} alt="" />
            </div>
            <h1>Information In Here Added</h1>
            <div className=' flex justify-center w-full md:w-1/2 mx-auto'>
                <img src={license2} alt="" />
            </div>
            <h1>Information Added In Here</h1>
        </div>
    );
};

export default License;
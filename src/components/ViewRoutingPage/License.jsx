import React from 'react';
import license1 from '../../../src/assets/license1.jpg'
import license2 from '../../../src/assets/license2.jpg'

const License = () => {
    return (
        <div className=' text-center py-5'>
            <h1 className=' uppercase text-2xl text-light-blue-600'>Recruiting License</h1>
            <h1 className=' text-lg md:px-48 py-3 text-jus'>HM ANGEL OVERSEAS LTD has got it's Recruiting Agency Licence from BMET in August 2022. After years of experience Bangladesh government honored us with this licence. We are bound to do proper use of this licence.</h1>
            <div className=' flex justify-center w-full md:w-1/2 mx-auto pb-5'>
                <img src={license1} alt="" />
            </div>
            <div className=' border-2 border-gray-600 inline-block p-5 shadow-md'>
                <h1 className=' text-2xl text-light-blue-600 pt-12'>Travel Agency</h1>
                <h1 className=' text-lg  md:px-12 py-3'>HM EXPO PRIVATE LTD is parent company of HM ANGEL OVERSEAS LTD. HM EXPO PRIVATE LTD is on business for over a decade with honor and dignity.</h1>
                <div className=' flex justify-center w-full md:w-1/2 mx-auto'>
                    <img src={license2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default License;
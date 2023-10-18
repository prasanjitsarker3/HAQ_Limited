import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import TimeLine from '../CustomComponentPage/TimeLine';

const Profile = () => {
    return (
        <div className='px-12 bg-blue-gray-100'>
            {/* <h1 className='text-center font-semibold text-3xl primaryColor py-5 '>Company Profile Information</h1> */}
            <div className="grid md:grid-cols-2 gap-12 py-5">
                <div className=' flex items-center'>
                    <div>
                        <h1 className='text-4xl py-2 text-light-blue-600 font-semibold font-serif'>HM Angel Overseas Ltd.</h1>
                        <p className='pt-3 text-justify'>
                            HM ANGEL OVERSEAS LIMITED is a government-approved recruiting agency in Bangladesh, with Recruiting License No. 2129. Since 2012, HM ANGEL OVERSEAS LTD has created more than 7,000 overseas jobs for Bangladeshi people. The company has been working with top-class companies and providing them with HR solutions. HM ANGEL OVERSEAS LTD is renowned for its work in the SAUDI ARABIA & Middle East market. The company has a vision to create more than 10 million jobs for Bangladeshi people by 2030. Following the growing demand, HM ANGEL OVERSEAS LTD aims to grab the market and create over 50,000 new jobs.

                        </p>
                        {/* <p>
                        HM Angel Overseas Limited. maintains a consistent reasonably pure method in finishing any process from a responsible position. As an international employment agency, HM Angel Overseas Limited provides qualified employees to various industries such as construction, engineering, oil and gas shipping, hospitality, medical services, and so on.
                    </p> */}
                        <div className="flex justify-center py-3">
                            <Button
                                size="lg"
                                variant="outlined"
                                color="blue"
                                className="flex items-center gap-3 "
                            >
                                <img src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" alt="metamask" className="h-6 w-6 rounded-full" />
                                SEE MORE ABOUT HAO Limited
                            </Button>

                        </div>
                    </div>
                </div>
                <div >
                    <figure className="relative h-96 w-full">
                        <img
                            className="h-full w-full rounded-xl object-cover object-center"
                            src="https://i.ibb.co/P90818w/DB7A1123.jpg"
                            alt="nature image"
                        />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <div>
                                <Typography variant="" color="blue-gray">
                                    HM Angel Overseas Limited
                                </Typography>
                                <Typography color="gray" className="mt-2 font-normal">
                                    20 July 2010
                                </Typography>
                            </div>
                            <Typography variant="" color="blue-gray">
                                International Agency
                            </Typography>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <TimeLine></TimeLine>
        </div>
    );
};

export default Profile;
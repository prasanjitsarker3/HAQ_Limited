import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import TimeLine from '../CustomComponentPage/TimeLine';

const Profile = () => {
    return (
        <div className='px-12 bg-blue-gray-100'>
            {/* <h1 className='text-center font-semibold text-3xl primaryColor py-5 '>Company Profile Information</h1> */}
            <div className="grid md:grid-cols-2 gap-12 py-5">
                <div>
                    <h1 className='text-xl py-2 primaryColor'>INTERNATIONAL MANPOWER COMPANY PROFILE</h1>
                    <p>
                        HM Angel Overseas Limited is one of the most reputed recruitment establishments. Recognized by
                        the Government of the people’s Republic of Bangladesh. Our registration number is. We as an
                        overseas placement agency provide an international job for skilled, semi-skilled, and unskilled workers with
                        various corporate giants in Qatar, Kuwait, Oman, United Arab-Emirates, Saudi Arabia,
                        Malaysia, Asia Pacific Countries, Europian Countries & in others countries including.
                    </p>
                    <p>
                        HM Angel Overseas Limited. follows a constantly relatively pure process in completing any process
                        from a responsible position. HM Angel Overseas Limited. as an international recruitment agency, we
                        provide skilled manpower to meet the needs of various industries such as Construction, Engineering,
                        Oil and Gas shipping, Hospitality, Medical Services, etc.
                    </p>
                    <div className="flex justify-center py-3">
                        <Button
                            size="lg"
                            variant="outlined"
                            color=""
                            className="flex items-center gap-3 primaryColor border-amber-700 "
                        >
                            <img src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" alt="metamask" className="h-6 w-6 rounded-full" />
                            SEE MORE ABOUT HAO Limited
                        </Button>

                    </div>
                </div>
                <div >
                    <figure className="relative h-96 w-full">
                        <img
                            className="h-full w-full rounded-xl object-cover object-center"
                            src="https://img.freepik.com/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais"
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
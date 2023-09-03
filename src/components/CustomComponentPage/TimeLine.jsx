import { Avatar } from '@material-tailwind/react';
import React from 'react';
import { FaDiagnoses, FaFontAwesomeFlag, FaHandsHelping, FaUserFriends } from 'react-icons/fa';
import { FaDollarSign, FaGavel } from 'react-icons/fa6';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  gap-0"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#0D0D0D' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present || Our Mission"
                    style={{gap:"0px"}}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaFontAwesomeFlag />}

                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/9539/9539805.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title primaryColor pt-2 font-bold text-center text-xl">Our Mission</h3>
                    <p>
                        "Continuing global cooperation for economic prosperity, forging strong client relationships, and delivering top-quality hiring services."
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  gap-0 m-0 p-0"
                    date="2010 - 2011 || Our Vision "
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaDiagnoses />}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/3316/3316606.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-center primaryColor text-xl font-bold">A Vision for Innovation and Progress</h3>
                    <p>
                        Our company wants to reach a leading role in providing skilled manpower to meet the required employment worldwide
                    </p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010 || Communication"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaUserFriends />}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/608/608968.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-center text-xl primaryColor">Bridging Connections for a Brighter Future</h3>
                    <p>
                        "Envisioning a world of seamless, inclusive communication, where diverse individuals, organizations, and communities effortlessly connect, share ideas, and collaborate for shared goals."
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008 || People Cohesion"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaHandsHelping />}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/1535/1535044.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-center primaryColor text-xl">Fostering People Cohesion</h3>
                    <p>
                        Promoting unity in diversity, we aim to bring people together, transcending differences for a more harmonious and inclusive world
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013 || Our Strategy"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaGavel />}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/3589/3589787.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title text-center primaryColor text-xl">Charting Our Course</h3>
                    <p>
                        Our strength lies in our unity, as we draw from diverse talents and perspectives to tackle challenges and forge a brighter future together
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012 || Compensation"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaDollarSign />}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-16 w-16' src="https://cdn-icons-png.flaticon.com/128/7067/7067947.png" alt="" />
                    </div>
                    <h3 className="vertical-timeline-element-title"> A Roadmap to Employee Value</h3>
                    <p>
                        Our compensation philosophy centers on fair recognition and reward for every contributor's dedication and performance, fostering a culture of value and motivation within our organization
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;
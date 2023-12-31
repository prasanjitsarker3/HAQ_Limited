import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useParams } from 'react-router-dom';
import { TabsHeader } from '@material-tailwind/react';
import ManPower from '../TabData/ManPower';
import VisaTab from '../TabData/VisaTab';

// import { Tab } from "@material-tailwind/react";

const ServiceTab = () => {
    const [service, setService] = useState([]);
    const [activeTabIndex, setActiveTabIndex] = useState(2);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    useEffect(() => {
        fetch('tab.json')
            .then(res => res.json())
            .then(data => setService(data.tabs))
    }, [])
    const categories = ['manpower', 'visa', 'consult']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category) > -1 ? categories.indexOf(category) : 2;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const manPower = service.filter(data => data.category === "manpower"); 
    const visa = service.filter(data => data.category === "visa");
    const consult = service.filter(data => data.category === "consult");

    console.log("Visa data", visa);
    return (
        <div className=' px-12 py-12'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex flex-col md:flex-row justify-evenly gap-5   p-3 rounded text-lg font-extralight border-b-0">
                    <Tab
                        className={`  px-7 cursor-pointer border-2 border-blue-600 p-2 text-center rounded ${activeTabIndex === 0 ? ' shadow-md text-white bg-blue-600 border-none  transition duration-300 ease-in-out' : ''
                            }`}
                        onClick={() => handleTabClick(0)}
                    >
                        Manpower
                    </Tab>
                    <Tab
                        className={` cursor-pointer border-2 border-blue-600 p-2 text-center rounded px-7 ${activeTabIndex === 1 ? 'shadow-md text-white bg-blue-600 border-none  transition duration-300 ease-in-out' : ''
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Visa Processed
                    </Tab>
                    <Tab
                        className={` cursor-pointer border-2 border-blue-600 p-2 text-center rounded px-7 ${activeTabIndex === 2 ? 'shadow-md text-white bg-blue-600 border-none transition duration-300 ease-in-out' : ''
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        HR Consult
                    </Tab>
                </TabList>
                <TabPanel>
                    <ManPower categoryData={manPower}></ManPower>
                </TabPanel>
                <TabPanel>
                    <VisaTab visa={visa}></VisaTab>
                </TabPanel>
                <TabPanel>
                    <ManPower categoryData={consult}></ManPower>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ServiceTab;
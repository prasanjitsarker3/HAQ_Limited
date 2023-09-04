import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography, 
    TimelineHeader,
} from "@material-tailwind/react";
import { FaHeadphones, FaRProject, FaRegSun } from "react-icons/fa";
// import {
//     BellIcon,
//     ArchiveBoxIcon,
//     CurrencyDollarIcon,
// } from "@heroicons/react/24/solid";

const ChooseTime = () => {
    return (
        <div className="">
            <Timeline>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost">
                            <FaRegSun className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                Employees & Service
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                The Employees & Service are always help growths.
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="red">
                            <FaHeadphones className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                Quick Online Consultancy
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Agency's full potential with our innovative solutions.
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" variant="ghost" color="green">
                            <FaRProject className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                Functional Program
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                The Functional Program are always help growths.
                            </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default ChooseTime;
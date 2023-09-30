
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import date from "../../CustomComponentPage/Date/Date";

const UserTable = ({ isOnline, allUser }) => {
    const [selectedTab, setSelectedTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const time = date

    const TABS = [
        {
            label: "All User",
            value: "all",
            data: allUser,
        },
        {
            label: "Admin ",
            value: "monitored",
            data: allUser
        },
        {
            label: "Delay",
            value: "unmonitored",
            data: allUser
        },
    ];
    const TABLE_HEAD = ["Member", "Function", "Status", "Date", "Deleted"];

    const tabData = TABS.find((tab) => tab.value === selectedTab);
    const data = tabData ? tabData.data : [];

    const filteredTableRows = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())

    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredTableRows.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredTableRows.length / itemsPerPage);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value={selectedTab} className="w-full md:w-80">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setSelectedTab(value)}
                                    >
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<FaSearch className="h-5 w-5" />}
                                onChange={handleSearch}
                                value={searchQuery}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? (
                                currentData.map(
                                    // {getFilteredTableData().length > 0 ? (
                                    //     getFilteredTableData().map(
                                    ({ image, name, email, job, org, online, date }, index) => {
                                        const isLast = index === currentData.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={name}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar src={image || "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph"} alt={name} size="md" />
                                                        <div className="flex flex-col">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal text-lg"
                                                            >
                                                                {name}
                                                            </Typography>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal text-lg opacity-70"
                                                            >
                                                                {email}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Button>User</Button>
                                                </td>
                                                <td className={classes}>
                                                    <div className="w-max">
                                                        <Chip
                                                            variant="ghost"
                                                            size="sm"
                                                            value={isOnline ? "Online" : "Offline"}
                                                            color={online ? "green" : "blue-gray"}
                                                        />
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {time}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Tooltip content="Edit Delete">
                                                        <IconButton variant="text">
                                                            <FaTrash className="h-4 w-4 text-red-500" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                            ) : (
                                <tr>
                                    <td colSpan={TABLE_HEAD.length}>No data available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page <span className=" text-blue-700 font-bold">{currentPage}</span> of {totalPages}
                    </Typography>
                    <div className="flex gap-2">
                        <Button
                           color="blue"
                            size="sm"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </Button>
                        <Button
                            color="blue"
                            size="sm"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default UserTable;
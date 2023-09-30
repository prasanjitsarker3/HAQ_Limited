import React, { useState } from "react";
import {
  Button,
  Card,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import MenuDefault from "../MenuDefault";

const itemsPerPage = 6;

const CustomTable = (props) => {
  const { tableHead, tableRow, option } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // const filteredTableRows = tableRow.filter((item) =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  // );
  const filteredTableRows = tableRow.filter((item) =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredTableRows.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredTableRows.length / itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <div className="relative flex w-full max-w-[20rem] pl-5 py-5">
          <Input
            type="text"
            label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pr-20"
          />
          <Button
            size="sm"
            color="blue"
            onClick={() =>
              handleSearchChange({ target: { value: searchQuery } })
            }
            className="!absolute right-1 top-1 rounded mt-5"
          >
            Search
          </Button>
        </div>
        <table className="w-full min-w-max table-auto text-left pl-5">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head.name}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-lg leading-none opacity-70"
                  >
                    {head.name}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {currentData.map((item, index) => (
              <tr key={item.id} className="even:bg-blue-gray-50/50 pl-5">
                {tableHead.map((head, index) => {
                  return head.dataKey ? (
                    <td key={`${head.dataKey}-${item.id}`} className="p-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-lg"
                      >
                        {item[`${head.dataKey}`]}
                      </Typography>
                    </td>
                  ) : (
                    <td key={`menu-${item.id}`}>
                      <MenuDefault
                        options={option}
                        rowId={item._id}
                      ></MenuDefault>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-8 mt-5 py-3">
          {/* <Button>Previous</Button> */}
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className=" cursor-pointer "
            size="md"
            color="blue"
          >
            Previous
          </Button>

          <div className="flex justify-center ">
            <Typography className="text-lg">
              Page{" "}
              <span className=" text-blue-600 font-semibold">
                {currentPage}
              </span>{" "}
              of {totalPages}
            </Typography>
          </div>

          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="ml-3"
            size="md"
            color="blue"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomTable;
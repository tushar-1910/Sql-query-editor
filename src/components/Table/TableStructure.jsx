import React, { useState } from "react";
import TablePopup from "./TablePopup";
import GetTableInfo from "./GetTableInfo";

const TableStructure = ({ tableName, tableHead, tableNo }) => {
  // State for the table popup trigger
  const [trigger, setTrigger] = useState(false);

  // Extract table headers from the input
  tableHead = Object.values(tableHead);

  // State to hold table header and row data
  const [tableHeadData, setTableHeadData] = useState([]);
  const [tableRowData, setTableRowData] = useState([]);

  // Function to handle opening the table popup
  const handleTable = () => {
    const { tableHeaders, tableRows } = GetTableInfo(tableNo);
    setTableHeadData(tableHeaders);
    setTableRowData(tableRows);
    setTrigger(true);
  };

  return (
    <div className="mx-10">
      {/* Table Header Click */}
      <div className="flex items-center cursor-pointer" onClick={handleTable}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-gray-500"
        >
          {/* SVG Path */}
        </svg>
        <p className="font-bold text-lg ml-3 text-gray-500">{tableName} [-]</p>
      </div>

      {/* Table Head Rows */}
      {tableHead.map((row, index) => (
        <div className="flex items-end relative ml-3" key={index}>
          <div className="w-6 h-8 border-l-2 border-b-2"></div>
          <p className="absolute top-5 left-9 text-gray-500 text-sm font-semibold">
            {row}{" "}
            <span className="text-indigo-300 hover:text-indigo-400">
              [varchar(40)]
            </span>
          </p>
        </div>
      ))}

      {/* Table Popup */}
      <TablePopup
        trigger={trigger}
        setTrigger={setTrigger}
        headers={tableHeadData}
        rows={tableRowData}
      />
    </div>
  );
};

export default TableStructure;

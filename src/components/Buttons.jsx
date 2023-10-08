import React from "react";
import toast from "react-hot-toast";
import getTableInfo from "./Table/GetTableInfo";

const Buttons = ({
  setCSVData,
  setQuery,
  setValue,
  setHistory,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) => {
  // Get local data from localStorage or initialize it as an empty array
  const localData = JSON.parse(localStorage.getItem("sqlHistory")) || [];

  // Set defaults based on the length of localData
  if (localData.length > 0) {
    setDefaults(localData.length + 1);
  }

  // Function to run the query
  const runQuery = () => {
    setQuery(value);

    // Add the query to localData if it doesn't exist
    if (!localData.includes(value)) {
      localData.push(value);
      localStorage.setItem("sqlHistory", JSON.stringify(localData));
    }

    // Get table headers and rows from getTableInfo
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);

    const temp = [];
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });
      setCSVData(temp);

      if (temp.length > 0) {
        toast.success("Query ran successfully.");
      } else {
        toast.error("Query failed to run");
      }
    }
  };

  // Function to reset the editor and related state
  const reset = () => {
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };

  return (
    <div className="flex">
      {/* Reset Button */}
      <div className="p-2">
        <button
          onClick={reset}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="30"
            viewBox="0 0 30 37.243"
          >
            {/* SVG Path */}
          </svg>
        </button>
      </div>

      {/* Run Query Button */}
      <div className="p-2">
        <button
          onClick={runQuery}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <div className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="30"
              viewBox="0 0 31.499 36.001"
              className="fill-current"
            >
              {/* SVG Path */}
            </svg>
          </div>
          <div className="font-bold font-mono">Run Query</div>
        </button>
      </div>

      {/* History Button */}
      <div className="p-2">
        <button
          onClick={() => setHistory(true)}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <div className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 24 24"
              id="history"
            >
              {/* SVG Path */}
            </svg>
          </div>
          <div className="font-bold font-mono">History</div>
        </button>
      </div>
    </div>
  );
};

export default Buttons;

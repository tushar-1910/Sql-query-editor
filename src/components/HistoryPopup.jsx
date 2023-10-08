import React, { useState, useEffect } from "react";

const HistoryPopup = ({ setEditorValue, trigger, setTrigger }) => {
  const [history, setHistory] = useState([]);

  // Retrieve history from local storage on component mount
  useEffect(() => {
    const historyFromStorage = JSON.parse(localStorage.getItem("sqlHistory"));
    console.log(historyFromStorage);
    if (historyFromStorage) {
      setHistory(historyFromStorage);
    }
  }, []);

  // Handle click on history item
  const handleHistoryClick = (command) => {
    setEditorValue(command);
    setTrigger(false);
  };

  return (
    trigger && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-40 bg-gray-900 bg-opacity-25">
        <div className="mx-auto relative p-6 w-auto h-auto bg-white rounded-2xl">
          <button
            onClick={() => setTrigger(false)}
            className="absolute -top-4 -right-2 text-white font-extrabold bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full"
          >
            X
          </button>
          <h1 className="text-2xl font-bold mb-2">History</h1>
          <ul className="grid grid-cols-1 divide-y-4">
            {history.map((command, index) => (
              <li
                key={index}
                onClick={() => handleHistoryClick(command)}
                className="cursor-pointer p-3"
              >
                {command}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default HistoryPopup;

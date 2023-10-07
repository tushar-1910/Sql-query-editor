import React from "react";
import TableStructure from "./TableStructure";

function DataDraw() {
  let customers = require("../Store/customers.json");
  let suppliers = require("../Store/suppliers.json");
  let products = require("../Store/products.json");
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={1}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
        tableNo={2}
      />
      <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={3}
      />
    </div>
  );
}

export default DataDraw;

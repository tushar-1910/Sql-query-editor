import React from "react";
import TableStructure from "./Table/TableStructure";
import customers from "./Store/customers.json";
import suppliers from "./Store/suppliers.json";
import products from "./Store/products.json";

const DataStack = () => {
  return (
    <div className="w-full h-screen overflow-auto scrollbar-hide py-4">
      <TableStructure
        tableHead={customers[0]}
        tableName="customers"
        tableNo={1}
      />
      <Divider />
      <TableStructure
        tableHead={suppliers[0]}
        tableName="suppliers"
        tableNo={2}
      />
      <Divider />
      <TableStructure
        tableHead={products[0]}
        tableName="products"
        tableNo={3}
      />
    </div>
  );
};

const Divider = () => (
  <div className="w-8/12 border-b-2 mx-auto mt-8 mb-4"></div>
);

export default DataStack;

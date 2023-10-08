export default function GetTableInfo(data) {
  let infoStore = null;

  if (data === 1) {
    infoStore = require("../Store/customers.json");
  } else if (data === 2) {
    infoStore = require("../Store/suppliers.json");
  } else if (data === 3) {
    infoStore = require("../Store/products.json");
  } else if (data === 4) {
    infoStore = require("../Store/select_customer.json");
  }

  let tableHeaders = [];
  let tableRows = [];

  for (let i = 0; i < infoStore.length; i++) {
    const row = infoStore[i];

    if (i === 0) {
      for (const item in row) {
        tableHeaders.push(row[item]);
      }
    } else {
      let temp = [];

      for (const item in row) {
        temp.push(row[item]);
      }

      tableRows.push(temp);
    }
  }

  return { tableHeaders, tableRows };
}

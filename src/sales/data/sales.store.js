
let salesRecords = [];


function addSale(record) {
  salesRecords.push({
    agentName: record.agentName,
    amountSold: record.amountSold,
    salesCount: record.salesCount,
    timestamp: new Date()
  });
}


function getSales() {
  return salesRecords;
}


function clearSales() {
  salesRecords = [];
}

module.exports = {
  addSale,
  getSales,
  clearSales
};

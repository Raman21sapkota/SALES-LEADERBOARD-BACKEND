

const { addSale, getAllSales } = require('../data/salesStore');


async function createSale(saleData) {
  try {
   
    const cleanedData = {
      agentName: saleData.agentName.trim(),
      amountSold: Number(saleData.amountSold),
      salesCount: Number(saleData.salesCount)
    };

   
    const addedSale = await addSale(cleanedData);

    return addedSale;
  } catch (error) {
    throw error;
  }
}


async function getSales() {
  try {
    return await getAllSales();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createSale,
  getSales
};
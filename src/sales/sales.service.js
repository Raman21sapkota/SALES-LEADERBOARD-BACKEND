const { Injectable } = require('@nestjs/common');
const { addSale, getSales } = require('./data/sales.store');


const SalesService = class SalesService {

  addSale(saleData) {
 
    addSale(saleData);
    
    return {
      success: true,
      message: 'Sale record added successfully',
      data: saleData
    };
  }

  
  getAllSales() {
    return getSales();
  }
};

module.exports = {
  SalesService: Injectable()(SalesService)
};

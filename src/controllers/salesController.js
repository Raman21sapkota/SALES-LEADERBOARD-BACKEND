

const { validateSaleData } = require('../utils/validation');
const { createSale } = require('../services/salesService');


async function addSaleRecord(req, res) {
  try {
    const saleData = req.body;

    
    const validation = validateSaleData(saleData);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    
    const addedSale = await createSale(saleData);

    return res.status(201).json({
      success: true,
      message: 'Sale record created successfully',
      data: {
        id: addedSale.id,
        agentName: addedSale.agent_name,
        amountSold: addedSale.amount_sold,
        salesCount: addedSale.sales_count,
        timestamp: addedSale.created_at
      }
    });

  } catch (error) {
    console.error('Error adding sale:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}

module.exports = {
  addSaleRecord
};
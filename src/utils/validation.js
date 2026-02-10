

function validateSaleData(data) {
  const errors = [];

  
  if (!data) {
    return {
      isValid: false,
      errors: ['Request body is required']
    };
  }

  
  if (!data.agentName || typeof data.agentName !== 'string' || data.agentName.trim() === '') {
    errors.push('agentName must be a non-empty string');
  }

  
  if (typeof data.amountSold !== 'number' || data.amountSold <= 0) {
    errors.push('amountSold must be a positive number');
  }

  
  if (typeof data.salesCount !== 'number' || data.salesCount <= 0 || !Number.isInteger(data.salesCount)) {
    errors.push('salesCount must be a positive integer');
  }

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

module.exports = {
  validateSaleData
};

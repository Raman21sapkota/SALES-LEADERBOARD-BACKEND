const { Controller, Post, Body, HttpException, HttpStatus } = require('@nestjs/common');
const { SalesService } = require('./sales.service');
const { validateCreateSaleDto, createSaleDto } = require('./dto/create-sale.dto');


class SalesController {
  constructor(salesService) {
    this.salesService = salesService;
  }

  
  async createSale(body) {
   
    const validation = validateCreateSaleDto(body);
    
    if (!validation.isValid) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Validation failed',
          errors: validation.errors
        },
        HttpStatus.BAD_REQUEST
      );
    }

   
    const saleDto = createSaleDto(body);

    
    const result = this.salesService.addSale(saleDto);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Sale record created successfully',
      data: result.data
    };
  }
}


Post()(SalesController.prototype, 'createSale');
Body()(SalesController.prototype, 'createSale', 0);

module.exports = {
  SalesController: Controller('sales')(SalesController)
};

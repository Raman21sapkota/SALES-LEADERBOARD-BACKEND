const { Module } = require('@nestjs/common');
const { SalesController } = require('./sales.controller');
const { SalesService } = require('./sales.service');


const SalesModule = class SalesModule {};

module.exports = {
  SalesModule: Module({
    controllers: [SalesController],
    providers: [SalesService],
    exports: [SalesService] 
  })(SalesModule)
};

const { Injectable, Inject } = require('@nestjs/common');
const { SalesService } = require('../sales/sales.service');
const { rankAgents } = require('../common/utils/ranking.util');


const LeaderboardService = class LeaderboardService {
  constructor(salesService) {
    this.salesService = salesService;
  }

 
  generateLeaderboard() {
    
    const allSales = this.salesService.getAllSales();

    
    const agentMap = {};

    allSales.forEach(sale => {
      const agentName = sale.agentName;

      
      if (!agentMap[agentName]) {
        agentMap[agentName] = {
          agentName: agentName,
          totalSalesAmount: 0,
          totalDeals: 0
        };
      }

      
      agentMap[agentName].totalSalesAmount += sale.amountSold;
      agentMap[agentName].totalDeals += sale.salesCount;
    });

    
    const aggregatedAgents = Object.values(agentMap);

    
    const rankedLeaderboard = rankAgents(aggregatedAgents);

    return rankedLeaderboard;
  }
};

module.exports = {
  LeaderboardService: Injectable()(LeaderboardService)
};

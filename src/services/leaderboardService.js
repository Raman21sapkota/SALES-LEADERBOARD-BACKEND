

const { getSales } = require('./salesService');
const { rankAgents } = require('../utils/ranking');


async function generateLeaderboard(page = 1, limit = 5) {
  try {
  
    const allSales = await getSales();

   
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

   
    const totalRecords = rankedLeaderboard.length;
    const totalPages = Math.ceil(totalRecords / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

   
    if (page < 1 || page > totalPages) {
      return {
        success: false,
        message: `Invalid page number. Total pages: ${totalPages}`,
        totalRecords,
        totalPages,
        currentPage: page,
        limit,
        data: []
      };
    }

   
    const paginatedLeaderboard = rankedLeaderboard.slice(startIndex, endIndex);

    return {
      success: true,
      message: 'Leaderboard generated successfully',
      totalRecords,
      totalPages,
      currentPage: page,
      recordsPerPage: limit,
      recordsOnThisPage: paginatedLeaderboard.length,
      data: paginatedLeaderboard
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateLeaderboard
};
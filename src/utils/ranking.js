
function rankAgents(aggregatedAgents) {
  
  const sortedAgents = aggregatedAgents.sort((a, b) => {
    
    if (b.totalSalesAmount !== a.totalSalesAmount) {
      return b.totalSalesAmount - a.totalSalesAmount;
    }
    
   
    if (b.totalDeals !== a.totalDeals) {
      return b.totalDeals - a.totalDeals;
    }
    
    
    return a.agentName.localeCompare(b.agentName);
  });

  
  const rankedAgents = sortedAgents.map((agent, index) => ({
    rank: index + 1,
    agentName: agent.agentName,
    totalSalesAmount: agent.totalSalesAmount,
    totalDeals: agent.totalDeals
  }));

  return rankedAgents;
}

module.exports = {
  rankAgents
};

const { Module } = require('@nestjs/common');
const { LeaderboardController } = require('./leaderboard.controller');
const { LeaderboardService } = require('./leaderboard.service');
const { SalesModule } = require('../sales/sales.module');


const LeaderboardModule = class LeaderboardModule {};

module.exports = {
  LeaderboardModule: Module({
    imports: [SalesModule],
    controllers: [LeaderboardController],
    providers: [LeaderboardService]
  })(LeaderboardModule)
};

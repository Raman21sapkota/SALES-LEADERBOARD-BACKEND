const { Controller, Get, HttpStatus } = require('@nestjs/common');
const { LeaderboardService } = require('./leaderboard.service');

class LeaderboardController {
  constructor(leaderboardService) {
    this.leaderboardService = leaderboardService;
  }

 
  async getLeaderboard() {
    
    const leaderboard = this.leaderboardService.generateLeaderboard();

    return {
      statusCode: HttpStatus.OK,
      message: 'Leaderboard generated successfully',
      data: leaderboard,
      count: leaderboard.length
    };
  }
}


Get()(LeaderboardController.prototype, 'getLeaderboard');

module.exports = {
  LeaderboardController: Controller('leaderboard')(LeaderboardController)
};

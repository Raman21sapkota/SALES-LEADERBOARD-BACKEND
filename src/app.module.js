const { Module } = require('@nestjs/common');
const { SalesModule } = require('./sales/sales.module');
const { LeaderboardModule } = require('./leaderboard/leaderboard.module');


const AppModule = class AppModule {};

module.exports = {
  AppModule: Module({
    imports: [
      SalesModule,      
      LeaderboardModule 
    ],
    controllers: [],
    providers: [],
  })(AppModule)
};

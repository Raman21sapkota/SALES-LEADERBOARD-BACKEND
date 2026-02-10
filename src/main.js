require('reflect-metadata');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

 
  app.enableCors();

 
  const port = process.env.PORT || 3000;


  await app.listen(port);
  
  console.log(`🚀 Sales Leaderboard API is running on: http://localhost:${port}`);
  console.log(`📊 POST /sales - Submit sales records`);
  console.log(`🏆 GET /leaderboard - Get ranked leaderboard`);
}

bootstrap();

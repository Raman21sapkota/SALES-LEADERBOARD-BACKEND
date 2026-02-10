
const express = require('express');
const cors = require('cors');


const salesRoutes = require('./routes/salesRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');


const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use('/sales', salesRoutes);
app.use('/leaderboard', leaderboardRoutes);


app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sales Leaderboard API',
    version: '1.0.0',
    endpoints: {
      addSale: 'POST /sales',
      getLeaderboard: 'GET /leaderboard'
    }
  });
});


app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    availableRoutes: {
      root: 'GET /',
      health: 'GET /health',
      addSale: 'POST /sales',
      getLeaderboard: 'GET /leaderboard'
    }
  });
});


app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log('Sales Leaderboard API Server Started!');
 
  console.log(`Server running at: http://localhost:${PORT}`);
 
});

module.exports = app;

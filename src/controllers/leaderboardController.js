
const { generateLeaderboard } = require('../services/leaderboardService');


async function getLeaderboard(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    
    if (page < 1) {
      return res.status(400).json({
        success: false,
        message: 'Page number must be >= 1'
      });
    }

    if (limit < 1 || limit > 100) {
      return res.status(400).json({
        success: false,
        message: 'Limit must be between 1 and 100'
      });
    }

    const leaderboard = await generateLeaderboard(page, limit);

    
    if (!leaderboard.success) {
      return res.status(404).json(leaderboard);
    }

    return res.status(200).json(leaderboard);

  } catch (error) {
    console.error('Error generating leaderboard:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}

module.exports = {
  getLeaderboard
};
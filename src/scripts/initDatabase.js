
const pool = require('../config/database');

async function initDatabase() {
  try {
    console.log('Initializing database...');

   
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sales (
        id SERIAL PRIMARY KEY,
        agent_name VARCHAR(255) NOT NULL,
        amount_sold DECIMAL(10, 2) NOT NULL,
        sales_count INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Sales table created successfully');

    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_agent_name ON sales(agent_name);
    `);

   
    console.log('Database initialized!');

    await pool.end();
  } catch (error) {
    console.error(' Error initializing database:', error);
    process.exit(1);
  }
}

initDatabase();
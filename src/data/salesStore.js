
const pool = require('../config/database');


async function addSale(record) {
  try {
    const query = `
      INSERT INTO sales (agent_name, amount_sold, sales_count)
      VALUES ($1, $2, $3)
      RETURNING id, agent_name, amount_sold, sales_count, created_at;
    `;

    const values = [record.agentName, record.amountSold, record.salesCount];
    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}


async function getAllSales() {
  try {
    const query = `
      SELECT agent_name as "agentName", amount_sold as "amountSold", 
             sales_count as "salesCount", created_at as "timestamp"
      FROM sales
      ORDER BY created_at DESC;
    `;

    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}


async function clearAllSales() {
  try {
    await pool.query('DELETE FROM sales;');
    console.log('All sales cleared');
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

module.exports = {
  addSale,
  getAllSales,
  clearAllSales
};
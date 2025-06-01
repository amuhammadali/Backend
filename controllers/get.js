const pool = require('../config/db');

const getPets = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mega_pets');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getPets };

const pool = require('../config/db');

const postPet = async (req, res) => {
  const { name, species, size, special_power, origin, is_friendly } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO mega_pets (name, species, size, special_power, origin, is_friendly)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [name, species, size, special_power, origin, is_friendly]
    );
    res.status(201).json({ id: result.rows[0].id, message: 'Pet added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add pet' });
  }
};

module.exports = { postPet };

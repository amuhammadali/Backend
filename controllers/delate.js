const pool = require('../config/db');

const deletePet = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      'DELETE FROM mega_pets WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    res.json({ message: 'Pet deleted', id });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { deletePet };

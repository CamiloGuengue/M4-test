const express = require('express');
const { query } = require('../config/db');
const router = express.Router();

// Temporal comentado
// router.use(authMiddleware);

router.get('/customers', async (req, res) => {  // Sin checkRole
  try {
    const result = await query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/orders', async (req, res) => {  // Sin checkRole
  try {
    const result = await query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
router.post('/filter', async (req, res) => {  // Sin checkRole
  try {
    const result = await query('SELECT ');
    res.json(result.rows)
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;
const express = require("express");
const router = express.Router();
const { Chakra, Heal, Herb, Journal } = require('../models')
// Add your resource-specific routes here


// Get all chakras
router.get("/", async (req, res) => {
    try {
      const chakras = await Chakra.findAll(); 
      res.json(chakras);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving chakras", error });
    }
  });
module.exports = router;

// Get a specific chakra by ID
router.get('/id/:id', async (req, res) => {
    try {
        const chakra = await Chakra.findByPk(req.params.id)
    
  
      if (!chakra) {
        res.status(404).json({ message: 'Chakra not found' });
      } else {
        res.json(chakra);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving chakra', error });
    }
  });
const express = require("express");
const router = express.Router();
const { Herb } = require('../models')



// Get all herbs
router.get("/", async (req, res) => {
    try {
      const herbs = await Herb.findAll(); 
      res.json(herbs);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving herbs.", error });
    }
  });

  // Get all herbs for a certain chakra id
router.get("/chakra/:id", async (req, res) => {
    try {
        console.log(req.params.id)
      const herbs = await Heal.findAll({
        where:{
            chakraID:req.params.id
        }
      }); 
      res.json(herbs);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving herbs.", error });
    }
  });

  //add a herbs via post
  router.post('/', async (res, req)=> {
    const { name, chakraID, properties, actions } = req.body;
    try{
      const herb = await Herb.create( { name, chakraID, properties, actions });
      res.status(201).json(herb);
    } catch (error) {
      res.status(500).json({ message: "Error adding herb", error })
    }
  })
module.exports = router;


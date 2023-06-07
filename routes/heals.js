const express = require("express");
const router = express.Router();
const { Heal } = require('../models')
// Add your resource-specific routes here


// Get all healing activities
router.get("/", async (req, res) => {
    try {
      const heals = await Heal.findAll(); 
      res.json(heals);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving healing activities.", error });
    }
  });

  // Get all healing activities for a certain chakra id
router.get("/chakra/:id", async (req, res) => {
    try {
        console.log(req.params.id)
      const heals = await Heal.findAll({
        where:{
            chakraID:req.params.id
        }
      }); 
      res.json(heals);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving healing activities.", error });
    }
  });

  //get a random healing activity for a given chakra
  router.get("/random/chakra/:id", async (req,res) => {
    try {
      console.log(req.params.id)
    const heals = await Heal.findAll({
      where:{
          chakraID:req.params.id
      }
    }); 
    const healRan = Math.floor(Math.random()*(heals.length))
    const heal = heals[healRan]
    console.log(heal)
    res.json(heal);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving healing activities.", error });
  }
  })

  //add a healing activity via post
  router.post('/', async (res, req)=> {
    const { activity, chakraID } = req.body;
    try{
      const heal = await Heal.create( { activity, chakraID });
      res.status(201).json(heal);
    } catch (error) {
      res.status(500).json({ message: "Error adding healing activity", error })
    }
  })
module.exports = router;


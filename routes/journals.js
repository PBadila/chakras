const express = require("express");
const router = express.Router();
const { Journal } = require('../models')
// Add your resource-specific routes here


// Get all journal topics
router.get("/", async (req, res) => {
    try {
      const journals = await Journal.findAll(); 
      res.json(journals);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving journal entries.", error });
    }
  });

  // Get all journal topics for a certain chakra id
router.get("/chakra/:id", async (req, res) => {
    try {
        console.log(req.params.id)
      const journals = await Journal.findAll({
        where:{
            chakraID:req.params.id
        }
      }); 
      res.json(journals);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving journal topics.", error });
    }
  });

  //get a random jornal topic for a given chakra
  router.get("/random/chakra/:id", async (req,res) => {
    try {
      console.log(req.params.id)
    const journals = await Journal.findAll({
      where:{
          chakraID:req.params.id
      }
    }); 
    const journalRan = Math.floor(Math.random()*(journals.length))
    const journal = journals[journalRan]
    console.log(journal)
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving journal topics.", error });
  }
  })

  //add a journal entry via post
  router.post('/', async (res, req)=> {
    const { entry, chakraID } = req.body;
    try{
      const journal = await Journal.create( { entry, chakraID });
      res.status(201).json(journal);
    } catch (error) {
      res.status(500).json({ message: "Error adding journal topic", error })
    }
  })
module.exports = router;


const express = require('express');
const router = express.Router();
const MenuItem = require('../../models/MenuItem');

// Post route to add a Menuitem
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.messag });
  }
})


module.exports = router;

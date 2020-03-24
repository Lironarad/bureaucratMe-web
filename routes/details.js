const express = require('express');
const router = express.Router();

// @route GET api/details
// @desc  Get al user details
// @access Private
router.get('/', (req, res) => {
  res.send('Get all details');
});

// @route POST api/details
// @desc add user detail
// @access Private
router.post('/', (req, res) => {
  res.send('Add detail');
});

// @route PUT api/details/:id
// @desc update detail
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update detail');
});

// @route DELETE api/details/:id
// @desc delete detail
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete detail');
});

module.exports = router;

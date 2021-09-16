const express = require('express');
const router = express.Router();
const {
  getAllEmployers,
  getSingleEmployer,
  createEmployer,
  updateEmployer,
} = require('../controllers/empleador');

router.get('/all', getAllEmployers);

router.get('/:dni', getSingleEmployer);

router.post('/', createEmployer);

router.put('/:dni', updateEmployer);
module.exports = router;

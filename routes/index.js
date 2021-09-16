const express = require('express');
const router = express.Router();
const empleadorRouter = require('./empleador');
const cadeteRouter = require('./cadete');

router.use('/employer', empleadorRouter);
router.use('/employer', cadeteRouter);

module.exports = router;

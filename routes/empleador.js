const express = require('express');
const router = express.Router();
const service = require('../models/empleadores');

const getAllEmployers = (req, res) =>
  service
    .getEmployers()
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));

router.get('/all', getAllEmployers);
const getSingleEmployer = (req, res) => {
  service
    .getEmployers({ dni: req.params.dni })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};

router.get('/:dni', getSingleEmployer);

const createEmployer = (req, res) => {
  const { dni, nombre, apellido } = req.body;
  console.log(`dni`, dni, 'nombre', nombre, 'apellido', apellido);
  return service
    .newEmployer({ dni, nombre, apellido })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};
router.post('/', createEmployer);

const updateEmployer = (req, res) => {
  const { dni, nombre, apellido } = req.body;
  console.log(`dni`, dni, 'nombre', nombre, 'apellido', apellido);
  return service
    .updateEmployer({ dni }, { dni, nombre, apellido })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};

router.put('/:dni', updateEmployer);
module.exports = router;

const service = require('../models/empleadores');

const getAllEmployers = (req, res) =>
  service
    .getEmployers()
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));

const getSingleEmployer = (req, res) => {
  service
    .getEmployers({ dni: req.params.dni })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};

const createEmployer = (req, res) => {
  const { dni, nombre, apellido } = req.body;
  console.log(`dni`, dni, 'nombre', nombre, 'apellido', apellido);
  return service
    .newEmployer({ dni, nombre, apellido })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};

const updateEmployer = (req, res) => {
  const { dni, nombre, apellido } = req.body;
  console.log(`dni`, dni, 'nombre', nombre, 'apellido', apellido);
  return service
    .updateEmployer({ dni }, { dni, nombre, apellido })
    .then((response) => res.json(response))
    .catch((e) => res.json({ e }));
};

module.exports = {
  getAllEmployers,
  getSingleEmployer,
  createEmployer,
  updateEmployer,
};

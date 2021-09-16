const db = require('./../db');

const getEmployers = (params = {}) =>
  db('empleador').where(params).select('dni', 'nombre', 'apellido');

const newEmployer = (obj) => db('empleador').insert(obj);

const updateEmployer = (params, obj) =>
  db('empleador').where(params).update(obj);

module.exports = { getEmployers, newEmployer, updateEmployer };

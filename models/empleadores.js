const db = require('./../db');

const getAllEmployers = () => db(process.env.T_CADETES).select('dni', 'nombre');

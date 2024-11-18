// models/index.js
const sequelize = require('../config/db');
const Task = require('./task');
const User = require('./user');

// Sync the models with the database
sequelize.sync({ force: false }) // Use `force: true` only for development or initial structure changes
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Error:', err));

module.exports = { Task, User };

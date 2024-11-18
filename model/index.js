const sequelize = require('../config/db');
const Task = require('./task');
const User = require('./user');

sequelize.sync({ force: false })
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Error:', err));

module.exports = { Task, User };

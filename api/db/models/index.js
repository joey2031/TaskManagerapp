// Now in app.js we can load in all mongoose models with one statement
const { List } = require('./list.model');
const { Task } = require('./task.model');

module.exports = {
    List,
    Task
}
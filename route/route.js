'use strict';
module.exports = function(app) {
  var users = require('../controllers/users');

  // todoList Routes
  app.route('/user')
    .get(users.list_all_tasks);
    //.post(todoList.create_a_task);


  /*app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task); */
}; 

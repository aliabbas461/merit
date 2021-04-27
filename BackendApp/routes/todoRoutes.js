var express = require('express');
var router = express.Router();
const protect = require('../middleware/protectMiddleware');

const todoController = require('../controllers/todoController');

router.route('/all').get(protect, todoController.getAllTodos);
router.route('/add').post(protect, todoController.addTodo)
router.route('/:id').delete(protect, todoController.deleteTodo).patch(protect, todoController.updateTodo)

module.exports = router;
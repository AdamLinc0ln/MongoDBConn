const express = require('express')
const { getgid } = require('process')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')
//CRUD - create, read, update, delete
//app.get gets creates the endpoint '/api/goals' then the function takes the 
//request and response and res.send sends a response when the api is called
router.route('/').get(getGoals).post(setGoal)
//^ same as below
//router.get('/', getGoals)
//router.post('/', setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)
//^ same as below
//router.put('/:id', updateGoal)
//router.delete('/:id', deleteGoal)

module.exports = router
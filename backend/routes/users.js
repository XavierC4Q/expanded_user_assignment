const express = require("express")
const router = express.Router()
const queries = require("../db/queries/users")


router.get('/', queries.getAllUsers)
router.get('/user/:id', queries.getOneUser)
router.patch('/edit', queries.editUser)
router.post('/', queries.addNewUser)

module.exports = router
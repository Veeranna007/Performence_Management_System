const express = require ('express')
const router = express.Router()

const {getUsers,getUser} = require('../controller/user')


router.get("/oneuser",getUser )
router.get("/allusers",getUsers )

module.exports= router
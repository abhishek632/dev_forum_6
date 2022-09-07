const express=require('express')
const router=express.Router()

const AuthController=require('../controllers/AuthController')

router.post('/user',AuthController.register)
router.post('/login',AuthController.login)
router.get('/logout',AuthController.logout)
router.get('/user/:id',AuthController.returnUser)
router.post('/authorization',AuthController.authorization)

module.exports=router
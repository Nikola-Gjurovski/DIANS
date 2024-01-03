const express=require('express');
const fs=require('fs');
const userRoute=express.Router();
const userController=require('./userController');
const authController=require('./authController');

userRoute.route('/signup').post(authController.signUp);
userRoute.route('/login').post(authController.login);
userRoute.route('/logout').get(authController.logout)

userRoute.use(authController.protect);
userRoute.get('/me',userController.getMe)

userRoute.use(authController.restrictTo('admin'));
userRoute.get('/',userController.getAllUsers)
userRoute.route('/:id').get(userController.getUser).delete(userController.deleteUser)

module.exports=userRoute;
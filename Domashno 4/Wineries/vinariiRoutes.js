const express=require('express');
const fs=require('fs');
const eventRoute=express.Router();
const eventController=require('./vinariiController');
const authController=require('./../Users/authController')

eventRoute.route('/').get(eventController.getAllWineries).post(authController.protect,authController.restrictTo('admin'),eventController.createWinery);
eventRoute.route('/:id').get(eventController.getWinery).patch( authController.protect,authController.restrictTo('admin'),eventController.UpdateWinery).delete(authController.protect,authController.restrictTo('admin'),eventController.DeleteWinery);
module.exports=eventRoute;
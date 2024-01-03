const express=require('express');
const fs=require('fs');
const eventRoute=express.Router();
const eventController=require('./vinariiController');

eventRoute.route('/').get(eventController.getAllWineries).post(eventController.createWinery);
eventRoute.route('/:id').get(eventController.getWinery).patch( eventController.UpdateWinery).delete(eventController.DeleteWinery);
module.exports=eventRoute;
const express=require('express');
const fs=require('fs');
const Event=require('./vinariiModel');
const AppError = require('./../Error/appError');
const catchAsync=fun=>{
    return (req,res,next)=>{
        fun(req,res,next).catch(next);
    }
}
exports.getAllWineries=catchAsync(async(req,res,next)=>{
    const events=await Event.find();
    
    res.status(200).json({
        status:'success',
        results:events.length,
        data:{
            events
        }
    })
})
exports.getWinery=catchAsync(async (req,res,next)=>{
    const event=await Event.findById(req.params.id).populate('reviews');
    if(!event){
        return next(new AppError('No winery found with that id',404));
    }
    res.status(200).json({
        status:'success',
        data:{
            event
        }
    })
})
exports.createWinery=catchAsync(async(req,res,next)=>{
    //console.log(req.body);
    const event=await Event.create(req.body);
    //console.log(req.body);
  res.status(201).json({
        status:'success',
        data:{
            event
        }
    })
})
exports.UpdateWinery=catchAsync(async(req,res,next)=>{
    const event=await Event.findByIdAndUpdate(req.params.id,req.body,{
     new:true,
     runValidators:true
    })
    if(!event){
     return next(new AppError('No winery found with that id',404))
    }
    res.status(200).json({
     status:'success',
     data:{
         event
     }
    })
 })
 exports.DeleteWinery=catchAsync(async(req,res,next)=>{
     const event=await Event.findByIdAndDelete(req.params.id);
     if(!event){
         return next(new AppError('No winery found with that id',404))
     }
     res.statsu(204).json({
         status:'success',
         data:null
     })
 })
const express=require('express');
const fs=require('fs');
const User=require('./userModel');
const AppError = require('../Error/appError');
const { promisify }=require('util')
const jwt=require('jsonwebtoken')
const crypto=require('crypto');
const catchAsync=fun=>{
    return (req,res,next)=>{
        fun(req,res,next).catch(next);
    }
}
exports.getAllUsers=catchAsync(async(req,res,next)=>{
    const user=await User.find();
    res.status(200).json({
        status:'success',
        results:user.length,
        data:user
    })
})
exports.getUser=catchAsync(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    if (!user) {
      
        return next(new AppError(`No user found with that ID`, 404));
      }
    res.status(200).json({
        status:'success',
         data:user
    })
})
exports.getMe=catchAsync(async(req,res,next)=>{
    const user=await User.findById(req.user.id);
    if (!user) {
      
        return next(new AppError(`No user found with that ID`, 404));
      }
    res.status(200).json({
        status:'success',
         data:user
    })
})
exports.deleteUser=catchAsync(async(req,res,next)=>{
    const user=await User.findByIdAndDelete(req.params.id);
    if (!user) {
      
        return next(new AppError(`No user found with that ID`, 404));
      }
    res.status(204).json({
        status:'success',
         data:null
    })
})
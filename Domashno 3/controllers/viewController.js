const express = require("express");
const fs = require("fs");
const Winary = require("./../models/vinariiModel");
const catchAsync = (fun) => {
  return (req, res, next) => {
    fun(req, res, next).catch(next);
  };
};
exports.getOverview = catchAsync(async (req, res, next) => {
  const events = await Winary.find().sort({name:1});
  res.status(200).render("mapa", {
    title: "Mapa Vinarii",
    events,
  });
});
exports.getHome = catchAsync(async (req, res, next) => {
  res.status(200).render("home", {
    title: "Home",
  
  });
});
exports.getUs = catchAsync(async (req, res, next) => {
  res.status(200).render("aboutUs", {
    title: "About Us ",
  
  });
});
exports.getWinery = catchAsync(async (req, res, next) => {
  const event=await Winary.findOne({slug:req.params.slug})

res.status(200).render('vinarija',{
    title:"dsd",
    event
})
});
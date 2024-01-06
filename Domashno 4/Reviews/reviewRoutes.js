const express=require('express');
const reviewRoute=express.Router({mergeParams:true});
const authController=require('./../Users/authController');
const reviewController=require('./reviewController');
reviewRoute.use(authController.protect)
reviewRoute.get('/',authController.restrictTo('user'),reviewController.gertAllReviews);
reviewRoute.route('/').post(authController.restrictTo('user'),reviewController.createReview);
reviewRoute.route('/:id').patch(authController.restrictTo('user'),reviewController.updateReview).delete(authController.restrictTo('user','admin'),reviewController.deleteReview).get(reviewController.getReview);
module.exports=reviewRoute;
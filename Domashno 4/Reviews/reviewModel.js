const mongoose=require('mongoose');
const slugify=require('slugify');
const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        required:[true,"You must write a review"]
    },
    
    createdAt:{
        type:Date,
        default:Date.now()
    },
    winery:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vinarii",
        required:[true,'A review must belong to a winary']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"A review must belong to a user"]
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})
reviewSchema.pre(/^find/,function(next){
    this.populate({
        path:'user',
        select:'name photo'
    })
    next();
})
const Review=mongoose.model('Review',reviewSchema);
module.exports=Review;
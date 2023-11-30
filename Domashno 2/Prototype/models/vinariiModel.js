const mongoose=require('mongoose');
const slugify=require('slugify')
const validator=require('validator');
const vinariiSchema=mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:[true,'Sekoja vinarija mora da ima ime'],
        trim:true
    },
    slug:String,
    ratingsAverage:{
        type:Number,
        default:4.5,
        min:1,
        max:5
    },
    ratingsQuantity:Number,
    phone:{
        type:String},
    description:String,
    images:[String],
    types:[String],
    imageCover:String,
    startLocation:{
        type:{
            type:'String',
            default:'Point',
            enum:['Point']
        },
        description:String,
        adress:String,
        coordinates:[Number]
    },
    craft:String,
    opening_hours:String,
    tasting:String    

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true} 
});
vinariiSchema.pre('save',function(next){
    this.slug=slugify(this.name,{lower:true});
    next();
})
const Vinarii=mongoose.model('Vinarii',vinariiSchema)
module.exports=Vinarii
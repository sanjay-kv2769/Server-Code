var mongoose=require('mongoose')
var registerSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'login'},
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    place:{type:String,required:true},
})
module.exports=mongoose.model('register',registerSchema)
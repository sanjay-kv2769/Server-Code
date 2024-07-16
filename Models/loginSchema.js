var mongoose=require('mongoose')
var loginSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},

})
module.exports=mongoose.model('login',loginSchema)
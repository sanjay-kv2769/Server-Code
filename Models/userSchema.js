var mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    author:{type:String,required:true},
    timestamp:{type:String,required:true},
    image:{type:String,required:true},
})
module.exports=mongoose.model('userblog',userSchema)
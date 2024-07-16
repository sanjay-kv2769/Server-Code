var express=require('express')
var mongoose=require('mongoose')
const userSchema = require('../Models/userSchema')
const loginSchema = require('../Models/loginSchema')

var userRoutes=express.Router()

userRoutes.post('/addblog',async(req,res)=>{
    const add={
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        timestamp:req.body.timestamp,
    }
    const save=await userSchema(add).save()
    if(save){
        return res.status(201).json({
            success:true,
            error:false,
            message:'save successfully'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'save error'
        })
    }
})

userRoutes.get('/viewblog',async(req,res)=>{
    const view=await userSchema.find()
    if(view){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:view,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'view error'
        })
    }
})

userRoutes.get('/viewsingle/:id',async(req,res)=>{
    const singleview=await userSchema.findOne({_id:req.params.id})
    if(singleview){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:singleview,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'view error'
        })
    }
})


userRoutes.put('/updateblog/:id',async(req,res)=>{
    const olddata=await userSchema.findOne({_id:req.params.id})
    const newdata={
        title:req.body.title?req.body.title:olddata.title,
        content:req.body.content?req.body.content:olddata.content,
        author:req.body.author?req.body.author:olddata.author,
        timestamp:req.body.timestamp?req.body.timestamp:olddata.timestamp
    }
    const update=await userSchema.updateOne({_id:req.params.id},{$set:newdata})
    if(update){
        return res.status(200).json({
            success:true,
            error:false,
            message:'update successfully',
            data:update,
            updatestatus:newdata,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'updation failed'
        })
    }
})

userRoutes.delete('/delete/:id',async(req,res)=>{
    const deleted=await userSchema.deleteOne({_id:req.params.id})
    if(deleted){
        return res.status(200).json({
            success:true,
            error:false,
            message:'deleted successfully'
        })
    }
    else{
        returnres.status(400).json({
            success:false,
            error:true,
            message:'not deleted'
        })
    }
})

userRoutes.get('/viewsame/:name',async(req,res)=>{
    const nameview=await userSchema.find({author:req.params.name})
    if(nameview){
        res.status(200).json({
            success:true,
            error:false,
            message:'fetched successfully',
            data:nameview,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'fetched error'
        })
    }
})

module.exports=userRoutes
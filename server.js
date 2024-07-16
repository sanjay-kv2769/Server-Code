var express=require('express')
var mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoutes = require('./Routes/authRoutes')
const userRoutes = require('./Routes/userRoutes')
dotenv.config()
const cors=require('cors')



var app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('successfully connected');
})
.catch(()=>{
    console.log('connection error');
})

app.use('/api/auth',authRoutes)
app.use('/api/blogs',userRoutes)


app.listen(process.env.PORT,()=>{
console.log('running on',process.env.PORT);
})
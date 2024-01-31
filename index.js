const express=require('express')
const app=express()
const cors=require('cors')
const cookieParser=require('cookie-parser')
var bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',async(req,res)=>{
    res.json({message:'ALL GOOD'})
})


app.listen(3000,()=>{
    console.log('ALL GOOD ON THIS SIDE');
})
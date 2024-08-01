const express = require('express')
const mongoose = require('mongoose')
const app= express();
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute)

app.listen(3000,()=>{
    console.log("We have your port connected so khussh?")
})


app.get('/',(req,res)=>{
    res.send("hello world");

})





//update product


//delete a product



mongoose.connect('mongodb+srv://silujoshi2:c9cGrREnhoFVFy3U@cluster0.vxvqjdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to the database')
}  )
.catch(()=>{
    console.log("Sorry you are not connected")
})


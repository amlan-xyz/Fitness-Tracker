require('dotenv').config()
require('./db');
const express=require('express');

const app=express();

app.use(express.json());

//routes
const exerciseRoutes=require('./routes/exercises.routes');
const foodRoutes=require('./routes/foods.routes')
const goalRoutes=require('./routes/goals.routes')

app.get('',(req,res)=>{
    res.send("Fitness Tracker Application")
})

app.use('/api/exercises',exerciseRoutes);
app.use('/api/foods',foodRoutes);
app.use('/api/goals',goalRoutes);

app.listen(3001,()=>{
    console.log("Server running at port 3001");
})
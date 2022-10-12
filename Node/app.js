const express= require('express')
const boydparser = require('body-parser')
const app=express()
const PORT=8989;
const routes=require('./routes/Restaurant')
app.use(boydparser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use("/",routes)
app.listen(PORT,()=>{console.log(`The server is started on the port no: ${PORT}`);})
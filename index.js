const express = require('express');
const app = express();


// app.set ("/:nome", (req,res)=>{
    
    //})
app.set ("/", (req,res) =>{
    res.render ('index')
})

app.listen(8000,()=>{console.log("servidor operando com sucesso!")})
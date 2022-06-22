const express = require("express");
const router = require("./router")
const app = express();
const PORT = 8080;


app.listen(PORT, ()=>{
    console.log('Server Started Successfully!')
});

app.use('/', router)
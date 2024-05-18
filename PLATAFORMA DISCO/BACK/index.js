const express = require("express");
let app = express();
const PORT = 5000;

//Inicio servidor en puerto 5000
app.listen(PORT, function(){
    console.log("********************************");
    console.log("HELLO WORLD");
    console.log("********************************");
});
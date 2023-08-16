const express = require("express"); // importando o Express
const app = express(); // iniciando o express e passando para a contante app

app.get("/",function(req,res){
    
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
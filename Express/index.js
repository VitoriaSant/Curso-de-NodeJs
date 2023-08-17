const express = require("express"); // importando o Express
const app = express(); // iniciando o express e passando para a contante app

app.get("/",function(req,res){
    res.send("Servidor rodando"); // So é possivel enviar uma resposta somente uma vez
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao Blog");
})

app.get("/ola/:nome/:empresa", function(req,res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("Olá "+ nome + " da empresa "+ empresa +"");
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
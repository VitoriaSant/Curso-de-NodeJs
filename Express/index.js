const express = require("express"); // importando o Express
const app = express(); // iniciando o express e passando para a contante app

app.get("/",function(req,res){
    res.send("Servidor rodando"); // So é possivel enviar uma resposta somente uma vez
})

// Parametros não obrigatórios
app.get("/blog/:artigo?", function(req,res){
    var artigo = req.params.artigo;

    if(artigo){
        res.send("Bem vindo ao artigo: " + artigo +"");
    }else{
        res.send("Bem vindo ao Blog");
    }
})

//Parametros obrigatórios
app.get("/ola/:nome/:empresa", function(req,res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("Olá "+ nome + " da empresa "+ empresa +"");
})

//Query Params
app.get("/canal/youtube", function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send("Canal " + canal +"");
    }else{
        res.send("Nenhum canal");
    }
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
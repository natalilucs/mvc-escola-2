const express = require("express"); //1 - chamando o express
const mongoose = require("mongoose"); //6 - adicionando o mongoose a essa aplicação
const app = express(); //2 - definindo o app com o express

const port = 8000; // 3 - informando a porta

mongoose.connect("mongodb+srv://natali_lucas:natali_lucas@cluster0.pk7gr.mongodb.net/escola?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}); //7 - conectando o banco de dados atlas

app.set('view engine', 'ejs');//8 - informando o arquivo de template
app.set('views', __dirname + '/views');//9- template
app.use(express.urlencoded({extended: true}));//10- permite que os dados seham enviados atraves de formularios ao bc
app.use(express.json());

const professores_router = require("./routers/professores-router");
app.use("/professores", professores_router);

app.get("/",(req, res)=>{
    res.send("Comece aqui"); //4 - startando a pagina de inicio, sendo essa a rota principal
});


app.listen(port, ()=>{
    console.log("Servidor ativo na porta ", port);    // 5 - informando a porta que a aplicação será rodada, efetuando a conexao com o servidor
});


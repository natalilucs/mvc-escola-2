const mongoose = require("mongoose"); //18- requisição para podermos trabalhar com a função mongoose.model()

const Professores = mongoose.model("Professores", { //19- criando o modelo do banco de dados.
    nome: String,    
    materia: String,
    turma: String,
    periodo: String,
    email: String, 
});

module.exports = Professores; //20 - exportando para que possa ser chamado em outros arquivos
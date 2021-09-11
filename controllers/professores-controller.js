const { off } = require("../models/professores-models");
const professoresC = require("../models/professores-models"); //16 - Controller fica responsável por executar a consulta ao banco de dados

exports.listar_professores = (req, res) =>{ //17- Exportando a variavel listar_professores e esse codigo faz a consulta e busca no banco de dados da lista dos professores
    professoresC.find({}, (err, elemento)=>{
        if(err){            
            return res.status(500).send("Erro ao consultar Professores")
        }
        res.render("pages/professores", {professor: elemento});
    });
};


//26 inicio adicionando os codigos que irá em seguida da roterização(24 e 25 pagina routers)
exports.cadastrar_professores_get = (req, res)=>{
    res.render("pages/formProfessores");
}

exports.cadastrar_professores_post = (req, res)=>{
    let cad_professor = new professoresC();

    cad_professor.nome = req.body.nome;     
    cad_professor.materia = req.body.materia;
    cad_professor.turma = req.body.turma;
    cad_professor.periodo = req.body.periodo;
    cad_professor.email = req.body.email;
    
    
    cad_professor.save((err) =>{
        if(err)
            return res.status(500).send("Erro ao efetuar o cadastro");
        return res.redirect("/professores");
    });
};
//26 fim

//28 inicio do codigo de deletar professor junto da linha 27
exports.deletar_professores=(req, res)=>{
    id = req.params.id;
    professoresC.deleteOne({_id:id}, (err, retorno)=>{
        if(err)
            return res.status(500).send("Erro ao consultar o produto")
         return res.redirect("/professores");
    });
};
//28 fim

//29 -  edição professores
exports.editar_professores_get = (req,res)=>{
    var id= req.params.id;
    professoresC.findById(id, (err, professor)=>{
        if(err)
            return res.status(500).send("Erro ao editar");
        res.render("./pages/formEditarProfessor", {retorno: professor});
    });
};

exports.editar_professores_post = (req,res)=>{
    var id= req.body.id;
    professoresC.findById(id, (err, retorno)=>{
        if(err)
            return res.status(500).send("Erro ao editar");

            retorno.nome = req.body.nome;
            retorno.materia = req.body.materia;
            retorno.turma = req.body.turma;
            retorno.periodo = req.body.periodo;
            retorno.email = req.body.email;

            retorno.save((err) =>{
            if(err)
                return res.status(500).send("Erro ao registrar");
            return res.redirect("/professores");
        });    
       
    });
};

//29 fim 
const express = require("express"); //11- criando a primeira rota apos definir os campos do app.js primordiais

const router = express.Router(); //12-junto a primeira rota define a middleware a ser utilizada.

const professoresController = require("../controllers/professores-controller"); //13- criar a var que receber e conectara com a pasta e arquivo de controllers

router.get("/", professoresController.listar_professores)//14- pegando a rota que fará a listagem dos professores

router.get("/cadastrarProfessores", professoresController.cadastrar_professores_get); //24 - criando a rota de professores que irá pegar os dados e reenderizar

router.post("/cadastrarProfessores", professoresController.cadastrar_professores_post);//25 - criando a rota de professores que irá postar os dados na reenderização

router.get("/deletarProfessores/:id", professoresController.deletar_professores); //27- Rota de deletar professor

router.get("/editarProfessores/:id", professoresController.editar_professores_get); //29 - Rota para editar professor

router.post("/editarProfessores", professoresController.editar_professores_post); //29 - Rota para editar professor

module.exports = router; //15-efetuará a exportação da const router para podermos utiliza-la em outras paginas


"user strict";
const express = require('express');
let cadastro = express.Router();
const model = require("../models")
var chave = require('../config/appConfig').secret;
var md5 = require('md5');
var jwt = require('jsonwebtoken');

cadastro.post('/cadpessoa', async (req, res) => {
    try {
        const { TB_TIPO_ID, TB_PESSOA_NOME, TB_PESSOA_NOME_PERFIL, TB_PESSOA_EMAIL, TB_PESSOA_SENHA, TB_PESSOA_CEP, TB_PESSOA_UF, TB_PESSOA_CIDADE, TB_PESSOA_BAIRRO, TB_PESSOA_RUA, TB_PESSOA_NUMERO, TB_PESSOA_COMPLEMENTO, TB_PESSOA_DT_NASC, TB_PESSOA_CPF, TB_PESSOA_WHATSAPP, TB_PESSOA_INSTAGRAM, TB_PESSOA_FACEBOOK, TB_PESSOA_TELEFONE1, TB_PESSOA_TELEFONE2, TB_PESSOA_ANIMAL_CASA, TB_PESSOA_ANIMAL_ESPACO, TB_PESSOA_ANIMAL_PASSEAR, TB_PESSOA_ANIMAL_AUSENCIA, TB_PESSOA_ANIMAL_FAMILIA, TB_PESSOA_ANIMAL_RUA, TB_PESSOA_ANIMAL_QUANTIDADE, TB_PESSOA_CRMV, TB_PESSOA_CNPJ, TB_PESSOA_PIX, TB_PESSOA_LINK, TB_PESSOA_IMG, TB_PESSOA_ATIVO, TB_PESSOA_SOCKET_ID } = req.body;
         // Recebe os campos do front-end
        const verExistenciaEmail = await model.TB_PESSOA.findOne({ where: { TB_PESSOA_EMAIL } });
        // Verifica se já existe uma pessoa cadastrada com o email
        if (verExistenciaEmail)
            return res.status(409).json({ message: 'Este email já está sendo utilizado.' });
        await model.TB_PESSOA.create({ // Cadastra
            TB_TIPO_ID,
            TB_PESSOA_NOME,
            TB_PESSOA_NOME_PERFIL,
            TB_PESSOA_EMAIL,
            TB_PESSOA_SENHA: md5(TB_PESSOA_SENHA),
            TB_PESSOA_CEP,
            TB_PESSOA_UF,
            TB_PESSOA_CIDADE,
            TB_PESSOA_BAIRRO,
            TB_PESSOA_RUA,
            TB_PESSOA_NUMERO,
            TB_PESSOA_COMPLEMENTO,
            TB_PESSOA_DT_NASC,
            TB_PESSOA_CPF,
            TB_PESSOA_WHATSAPP,
            TB_PESSOA_INSTAGRAM,
            TB_PESSOA_FACEBOOK,
            TB_PESSOA_TELEFONE1,
            TB_PESSOA_TELEFONE2,
            TB_PESSOA_ANIMAL_CASA,
            TB_PESSOA_ANIMAL_ESPACO,
            TB_PESSOA_ANIMAL_PASSEAR,
            TB_PESSOA_ANIMAL_AUSENCIA,
            TB_PESSOA_ANIMAL_FAMILIA,
            TB_PESSOA_ANIMAL_RUA,
            TB_PESSOA_ANIMAL_QUANTIDADE,
            TB_PESSOA_CRMV,
            TB_PESSOA_CNPJ,
            TB_PESSOA_PIX,
            TB_PESSOA_LINK,
            TB_PESSOA_IMG,
            TB_PESSOA_ATIVO,
            TB_PESSOA_SOCKET_ID,
        }).then(user => {
            // Cria o token

            sign(
                {
                  IDD: user.TB_PESSOA_ID,
                  exp: new Date().getTime() + 3600 * 1000, // expiration date, required, in ms, absolute to 1/1/1970
                  
                }, // body
                chave, // secret
                {
                  alg: "HS256"
                }
              ).then(token => {
                console.log(token);
                return res.status(201).json({ 'token': token, message: "Cadastrado" });
                
              }) // token as the only argument
              .catch(console.error); // possible errors

            // jwt.sign({ 'TB_PESSOA_IDD': user.TB_PESSOA_ID }, chave, { expiresIn: 60 * 60 * 60 * 24 }, (err, token) => {
            //     if (err) console.log(err);
            //     return res.status(201).json({ 'token': token, message: "Cadastrado" }); // Envia o token
            // })
        }).catch(error => { // Caso o cadastrar falhar
            res.status(400).json({ message: "Falha ao cadastrar" });
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao cadastrar" });
    }
});

cadastro.post('/cadseguindo', async (req, res) => {
    try {
        const { TB_PESSOA_SEGUIDORA_ID, TB_PESSOA_SEGUIDA_ID } = req.body;
         // Recebe os campos do front-end
        await model.TB_SEGUINDO.create({ // Cadastra
            TB_PESSOA_SEGUIDORA_ID,
            TB_PESSOA_SEGUIDA_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) { 
        return res.status(500).json({ message: "Erro ao cadastrar" });
    }
});


cadastro.post('/cadavaliacao', async (req, res) => {
    try {
        const { TB_AVALIACAO_NOTA, TB_AVALIACAO_TEXTO, TB_PESSOA_AVALIADA_ID, TB_PESSOA_AVALIADORA_ID } = req.body
        await model.TB_AVALIACAO.create({
            TB_PESSOA_AVALIADA_ID,
            TB_PESSOA_AVALIADORA_ID,
            TB_AVALIACAO_NOTA,
            TB_AVALIACAO_TEXTO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadanimal', async (req, res) => {
    try {
        const { TB_ANIMAL_NOME, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_COR, TB_ANIMAL_SEXO, TB_ANIMAL_ESPECIE, TB_ANIMAL_SAUDE, TB_ANIMAL_DESCRICAO, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_UF, TB_ANIMAL_LOCALIZACAO_BAIRRO, TB_ANIMAL_LOCALIZACAO_RUA, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP, TB_ANIMAL_LOCAL_RESGATE, TB_ANIMAL_IMG1, TB_ANIMAL_IMG2, TB_ANIMAL_IMG3, TB_ANIMAL_IMG4, TB_ANIMAL_IMG5, TB_ANIMAL_DT_CAD, TB_PESSOA_ID } = req.body
        await model.TB_ANIMAL.create({
            TB_PESSOA_ID,
            TB_ANIMAL_NOME,
            TB_ANIMAL_IDADE,
            TB_ANIMAL_IDADE_TIPO,
            TB_ANIMAL_PORTE,
            TB_ANIMAL_PESO,
            TB_ANIMAL_COR,
            TB_ANIMAL_SEXO,
            TB_ANIMAL_ESPECIE,
            TB_ANIMAL_SAUDE,
            TB_ANIMAL_DESCRICAO,
            TB_ANIMAL_ALERTA,
            TB_ANIMAL_LOCALIZACAO_UF,
            TB_ANIMAL_LOCALIZACAO_BAIRRO,
            TB_ANIMAL_LOCALIZACAO_RUA,
            TB_ANIMAL_CUIDADO_ESPECIAL,
            TB_ANIMAL_VERMIFUGADO,
            TB_ANIMAL_CASTRADO,
            TB_ANIMAL_MICROCHIP,
            TB_ANIMAL_DT_CAD,
            TB_ANIMAL_LOCAL_RESGATE,
            TB_ANIMAL_IMG1,
            TB_ANIMAL_IMG2,
            TB_ANIMAL_IMG3,
            TB_ANIMAL_IMG4,
            TB_ANIMAL_IMG5,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadpontoalimentacao', async (req, res) => {
    try {
        const { TB_PONTO_ALIMENTACAO_LATITUDE, TB_PONTO_ALIMENTACAO_LONGITUDE, TB_PESSOA_ID } = req.body
        await model.TB_PONTO_ALIMENTACAO.create({
            TB_PESSOA_ID,
            TB_PONTO_ALIMENTACAO_LATITUDE,
            TB_PONTO_ALIMENTACAO_LONGITUDE,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadformulariodiario', async (req, res) => {
    try {
        const { TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO, TB_FORMULARIO_DIARIO_IMG, TB_PONTO_ALIMENTACAO_ID } = req.body
        await model.TB_FORMULARIO_DIARIO.create({
            TB_PONTO_ALIMENTACAO_ID,
            TB_FORMULARIO_DIARIO_IMG,
            TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadvacina', async (req, res) => {
    try {
        const { TB_VACINA_TIPO, TB_VACINA_DT_APLICACAO, TB_ANIMAL_ID } = req.body
        await model.TB_VACINA.create({
            TB_ANIMAL_ID,
            TB_VACINA_DT_APLICACAO,
            TB_VACINA_TIPO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadtemperamento', async (req, res) => {
    try {
        const { TB_TEMPERAMENTO_TIPO } = req.body
        await model.TB_TEMPERAMENTO.create({
            TB_TEMPERAMENTO_TIPO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadsituacao', async (req, res) => {
    try {
        const { TB_SITUACAO_DESCRICAO } = req.body
        await model.TB_SITUACAO.create({
            TB_SITUACAO_DESCRICAO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadtrauma', async (req, res) => {
    try {
        const { TB_TRAUMA_DESCRICAO } = req.body
        await model.TB_TRAUMA.create({
            TB_TRAUMA_DESCRICAO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadtratamento', async (req, res) => {
    try {
        const { TB_TRATAMENTO_ANONIMO, TB_TRATAMENTO_DESCRICAO, TB_TRATAMENTO_DT_FINAL, TB_TRATAMENTO_DT_INICIO, TB_ANIMAL_ID, TB_PESSOA_ID } = req.body
        await model.TB_TRATAMENTO.create({
            TB_ANIMAL_ID,
            TB_PESSOA_ID,
            TB_TRATAMENTO_DESCRICAO,
            TB_TRATAMENTO_DT_INICIO,
            TB_TRATAMENTO_DT_FINAL,
            TB_TRATAMENTO_ANONIMO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadadocao', async (req, res) => {
    try {
        const { TB_ADOCAO_SITUACAO, TB_ANIMAL_ID, TB_PESSOA_ID } = req.body
        await model.TB_ADOCAO.create({
            TB_ANIMAL_ID,
            TB_PESSOA_ID,
            TB_ADOCAO_SITUACAO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadabrigo', async (req, res) => {
    try {
        const { TB_ABRIGO_DT_ABRIGO, TB_ABRIGO_SITUACAO, TB_ANIMAL_ID, TB_PESSOA_ID } = req.body
        await model.TB_ABRIGO.create({
            TB_ANIMAL_ID,
            TB_PESSOA_ID,
            TB_ABRIGO_DT_ABRIGO,
            TB_ABRIGO_SITUACAO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadpostagem', async (req, res) => {
    try {
        const { TB_POSTAGEM_IMG1, TB_POSTAGEM_VIDEO, TB_POSTAGEM_TEXTO, TB_POSTAGEM_TEXTO_ALTERADO, TB_POSTAGEM_IMG2, TB_POSTAGEM_IMG3, TB_POSTAGEM_IMG4, TB_POSTAGEM_IMG5, TB_POSTAGEM_DT, TB_POSTAGEM_DT_ALTERACAO, TB_PESSOA_ID } = req.body
        await model.TB_POSTAGEM.create({
            TB_PESSOA_ID,
            TB_POSTAGEM_IMG1,
            TB_POSTAGEM_IMG2,
            TB_POSTAGEM_IMG3,
            TB_POSTAGEM_IMG4,
            TB_POSTAGEM_IMG5,
            TB_POSTAGEM_DT,
            TB_POSTAGEM_DT_ALTERACAO,
            TB_POSTAGEM_VIDEO,
            TB_POSTAGEM_TEXTO,
            TB_POSTAGEM_TEXTO_ALTERADO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/caddenuncia', async (req, res) => {
    try {
        const { TB_PESSOA_DENUNCIANTE_ID, TB_MENSAGEM_ID, TB_POSTAGEM_ID, TB_PESSOA_DENUNCIADA_ID, TB_DENUNCIA_TEXTO, TB_DENUNCIA_DT, TB_DENUNCIA_MOTIVO, TB_DENUNCIA_IMG1, TB_DENUNCIA_IMG2, TB_DENUNCIA_IMG3 } = req.body
        await model.TB_DENUNCIA.create({
            TB_PESSOA_DENUNCIANTE_ID,
            TB_MENSAGEM_ID,
            TB_POSTAGEM_ID,
            TB_PESSOA_DENUNCIADA_ID,
            TB_DENUNCIA_TEXTO,
            TB_DENUNCIA_DT,
            TB_DENUNCIA_MOTIVO,
            TB_DENUNCIA_IMG1,
            TB_DENUNCIA_IMG2,
            TB_DENUNCIA_IMG3,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadanimaltemperamento', async (req, res) => {
    try {
        const { TB_TEMPERAMENTO_ID, TB_ANIMAL_ID } = req.body
        await model.TB_ANIMAL_TEMPERAMENTO.create({
            TB_TEMPERAMENTO_ID,
            TB_ANIMAL_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadanimalsituacao', async (req, res) => {
    try {
        const { TB_SITUACAO_ID, TB_ANIMAL_ID } = req.body
        await model.TB_ANIMAL_SITUACAO.create({
            TB_SITUACAO_ID,
            TB_ANIMAL_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadanimaltrauma', async (req, res) => {
    try {
        const { TB_TRAUMA_ID, TB_ANIMAL_ID } = req.body
        await model.TB_ANIMAL_TRAUMA.create({
            TB_TRAUMA_ID,
            TB_ANIMAL_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

cadastro.post('/cadpostagemanimal', async (req, res) => {
    try {
        const { TB_ANIMAL_ID, TB_POSTAGEM_ID } = req.body
        await model.TB_POSTAGEM_ANIMAL.create({
            TB_ANIMAL_ID,
            TB_POSTAGEM_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao casatrar" });
    }
});

module.exports = cadastro;
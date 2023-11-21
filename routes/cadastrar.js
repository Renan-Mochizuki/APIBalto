const express = require('express');
const model = require("../models")
const chave = require('../config/appConfig').secret;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();

let cadastro = express.Router();

cadastro.post('/cadpessoa', upload.single('img'), async (req, res) => {
    try {
        const { TB_TIPO_ID, TB_PESSOA_NOME, TB_PESSOA_NOME_PERFIL, TB_PESSOA_EMAIL, TB_PESSOA_SENHA, TB_PESSOA_CEP, TB_PESSOA_UF, TB_PESSOA_CIDADE, TB_PESSOA_BAIRRO, TB_PESSOA_RUA, TB_PESSOA_NUMERO, TB_PESSOA_COMPLEMENTO, TB_PESSOA_DT_NASC, TB_PESSOA_CPF, TB_PESSOA_WHATSAPP, TB_PESSOA_INSTAGRAM, TB_PESSOA_FACEBOOK, TB_PESSOA_TELEFONE1, TB_PESSOA_TELEFONE2, TB_PESSOA_ANIMAL_CASA, TB_PESSOA_ANIMAL_ESPACO, TB_PESSOA_ANIMAL_PASSEAR, TB_PESSOA_ANIMAL_AUSENCIA, TB_PESSOA_ANIMAL_FAMILIA, TB_PESSOA_ANIMAL_RUA, TB_PESSOA_ANIMAL_QUANTIDADE, TB_PESSOA_CRMV, TB_PESSOA_CNPJ, TB_PESSOA_PIX, TB_PESSOA_LINK, TB_PESSOA_SOCKET_ID } = req.body;
        // Recebe os campos do front-end
        const verExistenciaEmail = await model.TB_PESSOA.findOne({ where: { TB_PESSOA_EMAIL } });
        // Verifica se já existe uma pessoa cadastrada com o email
        if (verExistenciaEmail)
            return res.status(409).json({ message: 'Este email já está sendo utilizado.' });
        let imageBuffer = null;
        // Receber o buffer da imagem
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        const user = await model.TB_PESSOA.create({ // Cadastra
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
            TB_PESSOA_IMG: imageBuffer,
            TB_PESSOA_SOCKET_ID,
        });

        // Cria o token
        const payload = {
            'TB_PESSOA_IDD': user.TB_PESSOA_ID,
            'TB_TIPO_IDD': user.TB_TIPO_ID,
        };

        jwt.sign(payload, chave, { expiresIn: 60 * 60 * 60 * 24 }, (err, token) => {
            if (err) console.log(err);
            return res.status(201).json({ 'token': token, message: "Cadastrado" }); // Envia o token
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadinteracao', async (req, res) => {
    try {
        const { TB_PESSOA_REMETENTE_ID, TB_PESSOA_DESTINATARIO_ID, TB_TIPO_INTERACAO_ID } = req.body;
        // Recebe os campos do front-end
        await model.TB_INTERACAO.create({ // Cadastra
            TB_PESSOA_REMETENTE_ID,
            TB_PESSOA_DESTINATARIO_ID,
            TB_TIPO_INTERACAO_ID
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadanimal', upload.single('img'), async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_ANIMAL_NOME, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_COR, TB_ANIMAL_SEXO, TB_ANIMAL_ESPECIE, TB_ANIMAL_SAUDE, TB_ANIMAL_DESCRICAO, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_UF, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_LOCALIZACAO_BAIRRO, TB_ANIMAL_LOCALIZACAO_RUA, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP, TB_ANIMAL_LOCAL_RESGATE,
            TEMPERAMENTOS, SITUACOES, TRAUMAS, CORES } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        const response = await model.TB_ANIMAL.create({
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
            TB_ANIMAL_LOCALIZACAO_CIDADE,
            TB_ANIMAL_LOCALIZACAO_BAIRRO,
            TB_ANIMAL_LOCALIZACAO_RUA,
            TB_ANIMAL_CUIDADO_ESPECIAL,
            TB_ANIMAL_VERMIFUGADO,
            TB_ANIMAL_CASTRADO,
            TB_ANIMAL_MICROCHIP,
            TB_ANIMAL_LOCAL_RESGATE,
            TB_ANIMAL_IMG1: imageBuffer,
            // TB_ANIMAL_IMG2,
            // TB_ANIMAL_IMG3,
            // TB_ANIMAL_IMG4,
            // TB_ANIMAL_IMG5,
        })
        const TB_ANIMAL_IDD = response.TB_ANIMAL_ID;
        if (TEMPERAMENTOS) {
            for (const temperamento of TEMPERAMENTOS) {
                await model.TB_ANIMAL_TEMPERAMENTO.create({
                    TB_ANIMAL_ID: TB_ANIMAL_IDD,
                    TB_TEMPERAMENTO_ID: temperamento,
                });
            }
        }
        if (SITUACOES) {
            for (const situacao of SITUACOES) {
                await model.TB_ANIMAL_SITUACAO.create({
                    TB_ANIMAL_ID: TB_ANIMAL_IDD,
                    TB_SITUACAO_ID: situacao,
                });
            }
        }
        if (TRAUMAS) {
            for (const trauma of TRAUMAS) {
                await model.TB_ANIMAL_TEMPERAMENTO.create({
                    TB_ANIMAL_ID: TB_ANIMAL_IDD,
                    TB_TRAUMA_ID: trauma,
                });
            }
        }
        if (CORES) {
            for (const cor of CORES) {
                await model.TB_ANIMAL_COR.create({
                    TB_ANIMAL_ID: TB_ANIMAL_IDD,
                    TB_COR_ID: cor,
                });
            }
        }
        return res.status(200).json({ message: "Cadastrado", TB_ANIMAL_IDD });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadchat', async (req, res) => {
    try {
        const { TB_ANIMAL_ID, TB_PESSOA_DESTINATARIO_ID, TB_PESSOA_REMETENTE_ID } = req.body
        const Cadastrar = await model.TB_CHAT.create({
            TB_PESSOA_DESTINATARIO_ID,
            TB_PESSOA_REMETENTE_ID,
        });
        if (TB_ANIMAL_ID) {
            await model.TB_CHAT_ANIMAL.create({
                TB_CHAT_ID: Cadastrar.TB_CHAT_ID,
                TB_ANIMAL_ID,
            });
        }
        return res.status(200).json({ message: "Cadastrado", Cadastrar });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadmensagem', upload.single('img'), async (req, res) => {
    try {
        const { TB_CHAT_ID, TB_PESSOA_ID, TB_MENSAGEM_TEXTO, TB_MENSAGEM_POSSUI_IMG, TB_MENSAGEM_RESPOSTA_ID, TB_MENSAGEM_LATITUDE, TB_MENSAGEM_LONGITUDE } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        const Cadastrar = await model.TB_MENSAGEM.create({
            TB_CHAT_ID,
            TB_PESSOA_ID,
            TB_MENSAGEM_RESPOSTA_ID,
            TB_MENSAGEM_TEXTO,
            TB_MENSAGEM_POSSUI_IMG,
            TB_MENSAGEM_LATITUDE,
            TB_MENSAGEM_LONGITUDE,
            TB_MENSAGEM_IMG: imageBuffer,
        });
        return res.status(200).json({ message: "Cadastrado", Cadastrar });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadpontoalimentacao', upload.single('img'), async (req, res) => {
    try {
        const { TB_PONTO_ALIMENTACAO_LATITUDE, TB_PONTO_ALIMENTACAO_LONGITUDE, TB_PESSOA_ID } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await model.TB_PONTO_ALIMENTACAO.create({
            TB_PESSOA_ID,
            TB_PONTO_ALIMENTACAO_LATITUDE,
            TB_PONTO_ALIMENTACAO_LONGITUDE,
            TB_PONTO_ALIMENTACAO_IMG: imageBuffer
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadformulariodiario', upload.single('img'), async (req, res) => {
    try {
        const { TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO, TB_PONTO_ALIMENTACAO_ID } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await model.TB_FORMULARIO_DIARIO.create({
            TB_PONTO_ALIMENTACAO_ID,
            TB_FORMULARIO_DIARIO_IMG: imageBuffer,
            TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});


cadastro.post('/cadsolicitacao', async (req, res) => {
    try {
        const { TB_SOLICITACAO_SITUACAO, TB_ANIMAL_ID, TB_PESSOA_ID, TB_SOLICITACAO_DT_SOLICITACAO, TB_SOLICITACAO_DT_APROVACAO, TB_TIPO_SOLICITACAO_ID } = req.body
        await model.TB_SOLICITACAO.create({
            TB_ANIMAL_ID,
            TB_PESSOA_ID,
            TB_SOLICITACAO_SITUACAO,
            TB_SOLICITACAO_DT_SOLICITACAO,
            TB_SOLICITACAO_DT_APROVACAO,
            TB_TIPO_SOLICITACAO_ID
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadpostagem', upload.single('img'), async (req, res) => {
    try {
        const { TB_POSTAGEM_TEXTO, TB_PESSOA_ID } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await model.TB_POSTAGEM.create({
            TB_PESSOA_ID,
            TB_POSTAGEM_IMG1: imageBuffer,
            // TB_POSTAGEM_IMG2,
            // TB_POSTAGEM_IMG3,
            // TB_POSTAGEM_IMG4,
            // TB_POSTAGEM_IMG5,
            // TB_POSTAGEM_VIDEO,
            TB_POSTAGEM_TEXTO,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/caddenuncia', upload.single('img'), async (req, res) => {
    try {
        const { TB_PESSOA_DENUNCIANTE_ID, TB_MENSAGEM_ID, TB_POSTAGEM_ID, TB_PESSOA_DENUNCIADA_ID, TB_DENUNCIA_TEXTO, TB_DENUNCIA_DT, TB_DENUNCIA_MOTIVO } = req.body
        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await model.TB_DENUNCIA.create({
            TB_PESSOA_DENUNCIANTE_ID,
            TB_MENSAGEM_ID,
            TB_POSTAGEM_ID,
            TB_PESSOA_DENUNCIADA_ID,
            TB_DENUNCIA_TEXTO,
            TB_DENUNCIA_DT,
            TB_DENUNCIA_MOTIVO,
            TB_DENUNCIA_IMG1: imageBuffer,
            // TB_DENUNCIA_IMG2,
            // TB_DENUNCIA_IMG3,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
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
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

cadastro.post('/cadchatanimal', async (req, res) => {
    try {
        const { TB_ANIMAL_ID, TB_CHAT_ID } = req.body
        await model.TB_CHAT_ANIMAL.create({
            TB_ANIMAL_ID,
            TB_CHAT_ID,
        });
        return res.status(200).json({ message: "Cadastrado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao cadastrar", error: error.message });
    }
});

module.exports = cadastro;
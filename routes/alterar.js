const express = require('express');
const md5 = require('md5');
const model = require('../models');
const multer = require('multer');
const upload = multer();

let alteracao = express.Router();

alteracao.put('/altpessoa/:TB_PESSOA_ID', upload.single('img'), async (req, res) => {
    const TB_PESSOA_ID = req.params.TB_PESSOA_ID; // Pega o ID do front-end pelos paramêtros
    const { TB_PESSOA_NOME, TB_PESSOA_NOME_PERFIL, TB_PESSOA_BIO, TB_PESSOA_EMAIL, TB_PESSOA_SENHA, TB_PESSOA_CEP, TB_PESSOA_UF, TB_PESSOA_CIDADE, TB_PESSOA_BAIRRO, TB_PESSOA_RUA, TB_PESSOA_NUMERO, TB_PESSOA_COMPLEMENTO, TB_PESSOA_DT_NASC, TB_PESSOA_CPF, TB_PESSOA_WHATSAPP, TB_PESSOA_INSTAGRAM, TB_PESSOA_FACEBOOK, TB_PESSOA_TELEFONE1, TB_PESSOA_TELEFONE2, TB_PESSOA_ANIMAL_CASA, TB_PESSOA_ANIMAL_ESPACO, TB_PESSOA_ANIMAL_PASSEAR, TB_PESSOA_ANIMAL_AUSENCIA, TB_PESSOA_ANIMAL_FAMILIA, TB_PESSOA_ANIMAL_RUA, TB_PESSOA_ANIMAL_QUANTIDADE, TB_PESSOA_CRMV, TB_PESSOA_CNPJ, TB_PESSOA_PIX, TB_PESSOA_LINK, TB_PESSOA_ATIVO, TB_PESSOA_SOCKET_ID, TB_PESSOA_LATITUDE, TB_PESSOA_LONGITUDE }
        = req.body; // Recebe os campos do front-end

    try {
        const campo = await model.TB_PESSOA.findByPk(TB_PESSOA_ID); // Encontre o campo pelo ID
        if (!campo) // Se não for encontrado o campo
            return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        let imageBuffer = undefined;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await campo.update({ // Atualizar os campos
            TB_PESSOA_NOME,
            TB_PESSOA_NOME_PERFIL,
            TB_PESSOA_BIO,
            TB_PESSOA_EMAIL,
            ...(TB_PESSOA_SENHA && { TB_PESSOA_SENHA: md5(TB_PESSOA_SENHA) }),
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
            TB_PESSOA_ATIVO,
            TB_PESSOA_SOCKET_ID,
            TB_PESSOA_LATITUDE,
            TB_PESSOA_LONGITUDE,
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altanimal/:TB_ANIMAL_ID', upload.single('img'), async (req, res) => {
    const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
    const { TB_ANIMAL_NOME, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_COR, TB_ANIMAL_SEXO, TB_ANIMAL_ESPECIE, TB_ANIMAL_SAUDE, TB_ANIMAL_DESCRICAO, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_UF, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_LOCALIZACAO_BAIRRO, TB_ANIMAL_LOCALIZACAO_RUA, TB_ANIMAL_CUIDADOS_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP, TB_ANIMAL_LOCAL_RESGATE,
        TEMPERAMENTOS, SITUACOES, TRAUMAS, CORES } = req.body;

    try {
        const campo = await model.TB_ANIMAL.findByPk(TB_ANIMAL_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }

        await campo.update({
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
            TB_ANIMAL_CUIDADOS_ESPECIAL,
            TB_ANIMAL_VERMIFUGADO,
            TB_ANIMAL_CASTRADO,
            TB_ANIMAL_MICROCHIP,
            TB_ANIMAL_LOCAL_RESGATE,
            TB_ANIMAL_IMG1: imageBuffer,
            // TB_ANIMAL_IMG2,
            // TB_ANIMAL_IMG3,
            // TB_ANIMAL_IMG4,
            // TB_ANIMAL_IMG5,
        });

        // const TB_ANIMAL_IDD = campo.TB_ANIMAL_ID;
        // const Selecionar = await model.TB_ANIMAL_TEMPERAMENTO.findAll({
        //     where: {
        //         TB_ANIMAL_ID: TB_ANIMAL_IDD,
        //     },
        // });

        // if (TEMPERAMENTOS) {
        //     const arrayTemperamentos = TEMPERAMENTOS.split(',').map(Number);
        //     arrayTemperamentos.map(async item => {
        //         if (Selecionar.length == 0) {
        //             await model.TB_ANIMAL_TEMPERAMENTO.create({
        //                 TB_ANIMAL_ID: TB_ANIMAL_IDD,
        //                 TB_TEMPERAMENTO_ID: item,
        //             });
        //         }
        //     })
        // }
        // if (SITUACOES) {
        //     const arraySituacoes = SITUACOES.split(',').map(Number);
        //     arraySituacoes.map(async item => {
        //         await model.TB_ANIMAL_SITUACAO.create({
        //             TB_ANIMAL_ID: TB_ANIMAL_IDD,
        //             TB_SITUACAO_ID: item,
        //         });
        //     })
        // }
        // if (TRAUMAS) {
        //     const arrayTraumas = TRAUMAS.split(',').map(Number);
        //     arrayTraumas.map(async item => {
        //         await model.TB_ANIMAL_TRAUMA.create({
        //             TB_ANIMAL_ID: TB_ANIMAL_IDD,
        //             TB_TRAUMA_ID: item,
        //         });
        //     })
        // }
        // if (CORES) {
        //     CORES.map(async item => {
        //         await model.TB_ANIMAL_COR.create({
        //             TB_ANIMAL_ID: TB_ANIMAL_IDD,
        //             TB_COR_ID: item,
        //         });
        //     })
        // }

        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altchat/:TB_CHAT_ID', async (req, res) => {
    const TB_CHAT_ID = req.params.TB_CHAT_ID;
    const { TB_ANIMAL_ID } = req.body

    try {
        const campo = await model.TB_CHAT.findByPk(TB_CHAT_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_ANIMAL_ID,
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altmensagem/:TB_MENSAGEM_ID', upload.single('img'), async (req, res) => {
    const TB_MENSAGEM_ID = req.params.TB_MENSAGEM_ID;
    const { TB_MENSAGEM_TEXTO_ALTERADO, TB_PESSOA_REMENTE_ID, TB_PESSOA_DESTINARIO_ID } = req.body

    try {
        const campo = await model.TB_MENSAGEM.findByPk(TB_MENSAGEM_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await campo.update({
            TB_MENSAGEM_IMG: imageBuffer,
            TB_MENSAGEM_TEXTO_ALTERADO,
            TB_PESSOA_REMENTE_ID,
            TB_PESSOA_DESTINARIO_ID
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altpontoalimentacao/:TB_PONTO_ALIMENTACAO_ID', upload.single('img'), async (req, res) => {
    const TB_PONTO_ALIMENTACAO_ID = req.params.TB_PONTO_ALIMENTACAO_ID;
    const { TB_PONTO_ALIMENTACAO_LATITUDE, TB_PONTO_ALIMENTACAO_LONGITUDE } = req.body

    try {
        const campo = await model.TB_PONTO_ALIMENTACAO.findByPk(TB_PONTO_ALIMENTACAO_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await campo.update({
            TB_PONTO_ALIMENTACAO_LATITUDE,
            TB_PONTO_ALIMENTACAO_LONGITUDE,
            TB_PONTO_ALIMENTACAO_IMG: imageBuffer
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altsolicitacao/:TB_SOLICITACAO_ID', async (req, res) => {
    const TB_SOLICITACAO_ID = req.params.TB_SOLICITACAO_ID;
    const { TB_SOLICITACAO_SITUACAO, TB_SOLICITACAO_DT_APROVACAO } = req.body

    try {
        const campo = await model.TB_SOLICITACAO.findByPk(TB_SOLICITACAO_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_SOLICITACAO_SITUACAO,
            TB_SOLICITACAO_DT_APROVACAO
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

alteracao.put('/altpostagem/:TB_POSTAGEM_ID', upload.single('img'), async (req, res) => {
    const TB_POSTAGEM_ID = req.params.TB_POSTAGEM_ID;
    const { TB_PESSOA_ID, TB_POSTAGEM_TEXTO_ALTERADO, TB_POSTAGEM_POSSUI_IMG } = req.body

    try {
        const campo = await model.TB_POSTAGEM.findByPk(TB_POSTAGEM_ID);
        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        let imageBuffer = null;
        if (req.file) {
            imageBuffer = req.file.buffer;
        }
        await campo.update({
            TB_PESSOA_ID,
            TB_POSTAGEM_IMG1: imageBuffer,
            // TB_POSTAGEM_IMG2,
            // TB_POSTAGEM_IMG3,
            // TB_POSTAGEM_IMG4,
            // TB_POSTAGEM_IMG5,
            // TB_POSTAGEM_VIDEO,
            TB_POSTAGEM_POSSUI_IMG,
            TB_POSTAGEM_TEXTO_ALTERADO
        });
        return res.status(200).json({ message: "Campo atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
});

module.exports = alteracao;
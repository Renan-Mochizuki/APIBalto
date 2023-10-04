const express = require('express');
const model = require('../models');
const { Op } = require('sequelize');

let selecaoID = express.Router();

selecaoID.get('/selpessoa/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_PESSOA.findAll({
            where: {
                TB_PESSOA_STATUS: 'ATIVADO',
                TB_PESSOA_ID
            },
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selseguindo/:TB_PESSOA_SEGUIDORA_ID', async (req, res) => {
    try {
        const TB_PESSOA_SEGUIDORA_ID = req.params.TB_PESSOA_SEGUIDORA_ID;

        const Selecionar = await model.TB_SEGUINDO.findAll({
            where: {
                TB_PESSOA_SEGUIDORA_ID
            }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selavaliacao/:TB_PESSOA_AVALIADA_ID', async (req, res) => {
    try {
        const TB_PESSOA_AVALIADA_ID = req.params.TB_PESSOA_AVALIADA_ID;

        const Selecionar = await model.TB_AVALIACAO.findAll({
            where: {
                TB_PESSOA_AVALIADA_ID
            },
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selanimal/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;

        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: 'ATIVADO',
                TB_ANIMAL_ID
            },
            attributes: { exclude: ['TB_ANIMAL_IMG1', 'TB_ANIMAL_IMG2', 'TB_ANIMAL_IMG3', 'TB_ANIMAL_IMG4', 'TB_ANIMAL_IMG5'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selchat/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_CHAT.findAll({
            where: {
                [Op.or]: [
                    { TB_PESSOA_REMETENTE_ID: TB_PESSOA_ID },
                    { TB_PESSOA_DESTINATARIO_ID: TB_PESSOA_ID }
                ]
            },
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selmensagem/:TB_CHAT_ID', async (req, res) => {
    try {
        const TB_CHAT_ID = req.params.TB_CHAT_ID;

        const Selecionar = await model.TB_MENSAGEM.findAll({
            where: {
                TB_CHAT_ID
            },
            attributes: { exclude: ['TB_MENSAGEM_IMG'] }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoID.get('/selpontoalimentacao/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: {
                TB_PONTO_ALIMENTACAO_STATUS: 'ATIVADO',
                TB_PESSOA_ID
            },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_TIPO_ID'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selformulariodiario/:TB_PONTO_ALIMENTACAO_ID', async (req, res) => {
    try {
        const TB_PONTO_ALIMENTACAO_ID = req.params.TB_PONTO_ALIMENTACAO_ID;

        const Selecionar = await model.TB_FORMULARIO_DIARIO.findAll({
            where: {
                TB_PONTO_ALIMENTACAO_ID
            },
            attributes: { exclude: ['TB_FORMULARIO_DIARIO_IMG'] }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoID.get('/selvacina/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: {
                TB_ANIMAL_ID
            }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoID.get('/seltratamento/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_TRATAMENTO.findAll({
            where: {
                TB_PESSOA_ID
            },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selpostagem/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: {
                TB_POSTAGEM_STATUS: 'ATIVADO',
                TB_PESSOA_ID
            },
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_IMG2', 'TB_POSTAGEM_IMG3', 'TB_POSTAGEM_IMG4', 'TB_POSTAGEM_IMG5', 'TB_POSTAGEM_VIDEO'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selpostagemseguindo/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const SelecionarIDs = await model.TB_SEGUINDO.findAll({
            where: {
                TB_PESSOA_SEGUIDORA_ID: TB_PESSOA_ID
            },
            attributes: ['TB_PESSOA_SEGUIDA_ID']
        });

        const seguindoIDs = SelecionarIDs.map(item => item.TB_PESSOA_SEGUIDA_ID);

        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: {
                TB_PESSOA_ID: {
                    [Op.in]: seguindoIDs,
                },
            },
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_IMG2', 'TB_POSTAGEM_IMG3', 'TB_POSTAGEM_IMG4', 'TB_POSTAGEM_IMG5', 'TB_POSTAGEM_VIDEO'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

module.exports = selecaoID
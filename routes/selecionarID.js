const express = require('express');
const model = require('../models');
const { Op } = require('sequelize');

let selecaoID = express.Router();

selecaoID.get('/selpessoa/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const Selecionar = await model.TB_PESSOA.findAll({
            where: {
                TB_PESSOA_STATUS: true,
                TB_PESSOA_ID
            },
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] }
        });

        if (Selecionar.length == 0) return res.status(404).json({ message: 'Usuário não encontrado', error: 'Usuário não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selinteracao/:TB_PESSOA_REMETENTE_ID', async (req, res) => {
    try {
        const TB_PESSOA_REMETENTE_ID = req.params.TB_PESSOA_REMETENTE_ID;

        const Selecionar = await model.TB_INTERACAO.findAll({
            where: {
                TB_PESSOA_REMETENTE_ID
            },
            include: [
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_REMETENTE',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_DESTINATARIO',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                }
            ],
            raw: true
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
            include: [
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_AVALIADA',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_AVALIADORA',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                }
            ],
            raw: true
        });

        if (Selecionar.length == 0) return res.status(404).json({ message: 'Avaliação não encontrada', error: 'Avaliação não encontrada' });

        const notas = Selecionar.map(avaliacao => avaliacao.TB_AVALIACAO_NOTA);
        const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

        return res.status(200).json({ Selecionar, media });
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
                TB_ANIMAL_STATUS: true,
                TB_ANIMAL_ID
            },
            attributes: { exclude: ['TB_ANIMAL_IMG1', 'TB_ANIMAL_IMG2', 'TB_ANIMAL_IMG3', 'TB_ANIMAL_IMG4', 'TB_ANIMAL_IMG5'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Animal não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selchat/:TB_PESSOA_IDD', async (req, res) => {
    try {
        const TB_PESSOA_IDD = req.params.TB_PESSOA_IDD;

        const Selecionar = await model.TB_CHAT.findAll({
            where: {
                [Op.or]: [
                    { TB_PESSOA_REMETENTE_ID: TB_PESSOA_IDD },
                    { TB_PESSOA_DESTINATARIO_ID: TB_PESSOA_IDD }
                ],
            },
            include: [
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_REMETENTE',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID', 'TB_PESSOA_POSSUI_IMG'],
                },
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_DESTINATARIO',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
            raw: true
        });

        if (Selecionar.length == 0) return res.status(404).json({ message: 'Chat não encontrado' });

        const FiltrarPessoa = await Promise.all(Selecionar.map(async item => {
            const dadoNovo = { ...item };
            const Animais = await model.TB_CHAT_ANIMAL.findAll({
                where: { TB_CHAT_ID: dadoNovo.TB_CHAT_ID }
            });
            if (dadoNovo.TB_PESSOA_DESTINATARIO_ID == TB_PESSOA_IDD) {
                dadoNovo.TB_PESSOA_NOME_PERFIL = item["TB_PESSOA_REMETENTE.TB_PESSOA_NOME_PERFIL"];
                dadoNovo.TB_TIPO_ID = item["TB_PESSOA_REMETENTE.TB_TIPO_ID"];
                dadoNovo.TB_PESSOA_POSSUI_IMG = item["TB_PESSOA_REMETENTE.TB_PESSOA_POSSUI_IMG"];
                dadoNovo.TB_PESSOA_ID = item["TB_PESSOA_REMETENTE_ID"];
                dadoNovo.TB_CHAT_INICIADO = false;
            } else {
                dadoNovo.TB_PESSOA_NOME_PERFIL = item["TB_PESSOA_DESTINATARIO.TB_PESSOA_NOME_PERFIL"];
                dadoNovo.TB_TIPO_ID = item["TB_PESSOA_DESTINATARIO.TB_TIPO_ID"];
                dadoNovo.TB_PESSOA_POSSUI_IMG = item["TB_PESSOA_DESTINATARIO.TB_PESSOA_POSSUI_IMG"];
                dadoNovo.TB_PESSOA_ID = item["TB_PESSOA_DESTINATARIO_ID"];
                dadoNovo.TB_CHAT_INICIADO = true;
            }
            dadoNovo.Animais = Animais;
            delete dadoNovo["TB_PESSOA_REMETENTE.TB_PESSOA_NOME_PERFIL"];
            delete dadoNovo["TB_PESSOA_DESTINATARIO.TB_PESSOA_NOME_PERFIL"];
            delete dadoNovo["TB_PESSOA_REMETENTE.TB_TIPO_ID"];
            delete dadoNovo["TB_PESSOA_DESTINATARIO.TB_TIPO_ID"];
            delete dadoNovo["TB_PESSOA_REMETENTE.TB_PESSOA_POSSUI_IMG"];
            delete dadoNovo["TB_PESSOA_DESTINATARIO.TB_PESSOA_POSSUI_IMG"];
            delete dadoNovo["TB_PESSOA_REMETENTE_ID"];
            delete dadoNovo["TB_PESSOA_DESTINATARIO_ID"];
            return dadoNovo;
        }));
        
        return res.status(200).json(FiltrarPessoa);
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
                TB_MENSAGEM_STATUS: true,
                TB_CHAT_ID
            },
            attributes: { exclude: ['TB_MENSAGEM_IMG'] },
            order: [
                ['TB_MENSAGEM_ID', 'DESC'],
            ]
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Mensagem não encontrada' });

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
                TB_PONTO_ALIMENTACAO_STATUS: true,
                TB_PESSOA_ID
            },
            attributes: { exclude: ['TB_PONTO_ALIMENTACAO_IMG'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID','TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Ponto de alimentação não encontrado' });

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
                    attributes: ['TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME','TB_PESSOA_POSSUI_IMG'],
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
                TB_POSTAGEM_STATUS: true,
                TB_PESSOA_ID
            },
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_IMG2', 'TB_POSTAGEM_IMG3', 'TB_POSTAGEM_IMG4', 'TB_POSTAGEM_IMG5', 'TB_POSTAGEM_VIDEO'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL','TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Postagem não encontrada' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoID.get('/selpostagemseguindo/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;

        const SelecionarIDs = await model.TB_INTERACAO.findAll({
            where: {
                TB_TIPO_INTERACAO_ID: 1,
                TB_PESSOA_REMETENTE_ID: TB_PESSOA_ID
            },
            attributes: ['TB_PESSOA_DESTINATARIO_ID']
        });

        const seguindoIDs = SelecionarIDs.map(item => item.TB_PESSOA_DESTINATARIO_ID);

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
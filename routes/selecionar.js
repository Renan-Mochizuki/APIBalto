const express = require('express');
const model = require('../models');

let selecao = express.Router();

selecao.get('/selpessoa/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({ // Selecione todos campos com status ativado
            where: {
                TB_PESSOA_STATUS: true
            },
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] } // Excluindo TB_PESSOA_SENHA e TB_PESSOA_IMG do select
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selinteracao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_INTERACAO.findAll({
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
            order: [
                ['TB_INTERACAO_ID', 'DESC'],
            ],
            raw: true
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selavaliacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_AVALIACAO.findAll({
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
            order: [
                ['TB_AVALIACAO_ID', 'DESC'],
            ],
            raw: true
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selanimal/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: true
            },
            attributes: { exclude: ['TB_ANIMAL_IMG1', 'TB_ANIMAL_IMG2', 'TB_ANIMAL_IMG3', 'TB_ANIMAL_IMG4', 'TB_ANIMAL_IMG5'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_ANIMAL_ID', 'DESC'],
            ]
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selchat/', async (req, res) => {
    try {
        const Selecionar = await model.TB_CHAT.findAll({
            where: {
                TB_CHAT_STATUS: true
            }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selmensagem/', async (req, res) => {
    try {
        const Selecionar = await model.TB_MENSAGEM.findAll({
            attributes: { exclude: ['TB_MENSAGEM_IMG'] }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selpontoalimentacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: {
                TB_PONTO_ALIMENTACAO_STATUS: true
            },
            attributes: { exclude: ['TB_PONTO_ALIMENTACAO_IMG'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/selformulariodiario/', async (req, res) => {
    try {
        const Selecionar = await model.TB_FORMULARIO_DIARIO.findAll({
            attributes: { exclude: ['TB_FORMULARIO_DIARIO_IMG'] }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/selvacina/', async (req, res) => {
    try {
        const Selecionar = await model.TB_VACINA.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/selcor/', async (req, res) => {
    try {
        const Selecionar = await model.TB_COR.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/seltemperamento/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TEMPERAMENTO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/selsituacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_SITUACAO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/seltrauma/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TRAUMA.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/selsolicitacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_SOLICITACAO.findAll({
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/seltratamento/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TRATAMENTO.findAll({
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecao.get('/selpostagem/', async (req, res) => {
    try {
        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: {
                TB_POSTAGEM_STATUS: true,
            },
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_VIDEO'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_POSTAGEM_ID', 'DESC'],
            ]
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecao.get('/seldenuncia/', async (req, res) => {
    try {
        const Selecionar = await model.TB_DENUNCIA.findAll({
            attributes: { exclude: ['TB_DENUNCIA_IMG1', 'TB_DENUNCIA_IMG2', 'TB_DENUNCIA_IMG3'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_DENUNCIANTE',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME', 'TB_PESSOA_POSSUI_IMG'],
                },
                {
                    model: model.TB_PESSOA,
                    as: 'TB_PESSOA_DENUNCIADA',
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

module.exports = selecao;
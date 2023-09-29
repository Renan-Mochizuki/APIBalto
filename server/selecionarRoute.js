const express = require('express');
let model = require('../models');

let selecao = express();

selecao.get('/seltipo/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TIPO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selpessoa/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({ // Selecione todos campos com status ativado
            where: {
                TB_PESSOA_STATUS: 'ATIVADO'
            },
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] } // Excluindo TB_PESSOA_SENHA e TB_PESSOA_IMG do select
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selseguindo/', async (req, res) => {
    try {
        const Selecionar = await model.TB_SEGUINDO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selavaliacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_AVALIACAO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selanimal/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: 'ATIVADO'
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
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selchat/', async (req, res) => {
    try {
        const Selecionar = await model.TB_CHAT.findAll({
            where: {
                TB_CHAT_STATUS: 'ATIVADO'
            }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selmensagem/', async (req, res) => {
    try {
        const Selecionar = await model.TB_MENSAGEM.findAll({
            where: {
                TB_MENSAGEM_STATUS: 'ATIVADO'
            }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selpontoalimentacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: {
                TB_PONTO_ALIMENTACAO_STATUS: 'ATIVADO'
            }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selformulariodiario/', async (req, res) => {
    try {
        const Selecionar = await model.TB_FORMULARIO_DIARIO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selvacina/', async (req, res) => {
    try {
        const Selecionar = await model.TB_VACINA.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selcor/', async (req, res) => {
    try {
        const Selecionar = await model.TB_COR.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seltemperamento/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TEMPERAMENTO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selsituacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_SITUACAO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seltrauma/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TRAUMA.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seltratamento/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TRATAMENTO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seladocao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ADOCAO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selabrigo/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ABRIGO.findAll();
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selpostagem/', async (req, res) => {
    try {
        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: {
                TB_POSTAGEM_STATUS: 'ATIVADO',
            },
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_VIDEO'] },
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
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/seldenuncia/', async (req, res) => {
    try {
        const Selecionar = await model.TB_DENUNCIA.findAll({
            attributes: { exclude: ['TB_DENUNCIA_IMG1', 'TB_DENUNCIA_IMG2', 'TB_DENUNCIA_IMG3'] }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selcores/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL_COR.findAll({
            include: [
                {
                    model: model.TB_COR,
                    attributes: ['TB_COR_DESCRICAO'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seltemperamentos/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL_TEMPERAMENTO.findAll({
            include: [
                {
                    model: model.TB_TEMPERAMENTO,
                    attributes: ['TB_TEMPERAMENTO_TIPO'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selsituacoes/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL_SITUACAO.findAll({
            include: [
                {
                    model: model.TB_SITUACAO,
                    attributes: ['TB_SITUACAO_DESCRICAO'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/seltraumas/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL_TRAUMA.findAll({
            include: [
                {
                    model: model.TB_TRAUMA,
                    attributes: ['TB_TRAUMA_DESCRICAO'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.get('/selmarcacoes/', async (req, res) => {
    try {
        const Selecionar = await model.TB_POSTAGEM_ANIMAL.findAll({
            include: [
                {
                    model: model.TB_ANIMAL,
                    attributes: ['TB_ANIMAL_NOME'],
                },
            ],
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

module.exports = selecao;
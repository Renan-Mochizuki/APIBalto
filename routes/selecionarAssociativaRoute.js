const express = require('express');
const model = require('../models');

let selecaoAssociativa = express.Router();

selecaoAssociativa.get('/selcores/', async (req, res) => {
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
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/seltemperamentos/', async (req, res) => {
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
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/selsituacoes/', async (req, res) => {
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
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/seltraumas/', async (req, res) => {
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
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/selmarcacoes/', async (req, res) => {
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
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/selcores/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const Selecionar = await model.TB_ANIMAL_COR.findAll({
            where: {
                TB_ANIMAL_ID
            },
            include: [
                {
                    model: model.TB_COR,
                    attributes: ['TB_COR_DESCRICAO'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Cores não encontrados' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/seltemperamentos/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const Selecionar = await model.TB_ANIMAL_TEMPERAMENTO.findAll({
            where: {
                TB_ANIMAL_ID
            },
            include: [
                {
                    model: model.TB_TEMPERAMENTO,
                    attributes: ['TB_TEMPERAMENTO_TIPO'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Temperamentos não encontrados' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/selsituacoes/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const Selecionar = await model.TB_ANIMAL_SITUACAO.findAll({
            where: {
                TB_ANIMAL_ID
            },
            include: [
                {
                    model: model.TB_SITUACAO,
                    attributes: ['TB_SITUACAO_DESCRICAO'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Situações não encontradas' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/seltraumas/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const Selecionar = await model.TB_ANIMAL_TRAUMA.findAll({
            where: {
                TB_ANIMAL_ID
            },
            include: [
                {
                    model: model.TB_TRAUMA,
                    attributes: ['TB_TRAUMA_DESCRICAO'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Traumas não encontrados' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoAssociativa.get('/selmarcacoes/:TB_POSTAGEM_ID', async (req, res) => {
    try {
        const TB_POSTAGEM_ID = req.params.TB_POSTAGEM_ID;
        const Selecionar = await model.TB_POSTAGEM_ANIMAL.findAll({
            where: {
                TB_POSTAGEM_ID
            },
            include: [
                {
                    model: model.TB_ANIMAL,
                    attributes: ['TB_ANIMAL_NOME'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Marcações não encontrados' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

module.exports = selecaoAssociativa;
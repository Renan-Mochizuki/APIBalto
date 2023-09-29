const express = require('express');
let model = require('../models');

let selecaoAssociativa = express();

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
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
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
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
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
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

module.exports = selecaoAssociativa;
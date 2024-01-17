const express = require('express');
const model = require('../models');

let selecaoOtimizado = express.Router();

selecaoOtimizado.get('/selpessoas/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({
            where: {
                TB_PESSOA_STATUS: true
            },
            attributes: ['TB_PESSOA_ID', 'TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL','TB_PESSOA_POSSUI_IMG'],
            order: [
                ['TB_PESSOA_ID', 'DESC'],
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoOtimizado.get('/selanimais/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: true
            },
            attributes: ['TB_ANIMAL_ID', 'TB_PESSOA_ID', 'TB_ANIMAL_NOME', 'TB_ANIMAL_SAUDE', 'TB_ANIMAL_ALERTA', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL','TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_ANIMAL_ID', 'DESC'],
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoOtimizado.get('/selpessoaspesquisa/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({
            where: {
                TB_PESSOA_STATUS: true
            },
            attributes: ['TB_PESSOA_ID', 'TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_CIDADE','TB_PESSOA_POSSUI_IMG']
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoOtimizado.get('/selanimaispesquisa/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: true
            },
            attributes: ['TB_ANIMAL_ID', 'TB_PESSOA_ID', 'TB_ANIMAL_NOME', 'TB_ANIMAL_ESPECIE', 'TB_ANIMAL_IDADE', 'TB_ANIMAL_IDADE_TIPO', 'TB_ANIMAL_PORTE', 'TB_ANIMAL_SAUDE', 'TB_ANIMAL_ALERTA', 'TB_ANIMAL_VERMIFUGADO', 'TB_ANIMAL_CASTRADO', 'TB_ANIMAL_MICROCHIP', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL','TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoOtimizado.post('/selanimaisperfil/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID } = req.body
        let whereClause = {};
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_ANIMAL.findAll({
            attributes: ['TB_ANIMAL_ID', 'TB_PESSOA_ID', 'TB_ANIMAL_NOME', 'TB_ANIMAL_SAUDE', 'TB_ANIMAL_ALERTA', 'TB_ANIMAL_STATUS', 'createdAt', 'updatedAt'],
            where: whereClause,
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL','TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_ANIMAL_ID', 'DESC'],
            ],
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

module.exports = selecaoOtimizado;
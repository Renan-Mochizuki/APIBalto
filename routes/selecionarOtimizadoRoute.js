const express = require('express');
const model = require('../models');

let selecaoOtimizado = express.Router();

selecaoOtimizado.get('/selpessoas/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({
            where: {
                TB_PESSOA_STATUS: true
            },
            attributes: ['TB_PESSOA_ID', 'TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL']
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Usuário não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoOtimizado.post('/selpessoas/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_PESSOA_NOME_PERFIL, TB_TIPO_ID } = req.body

        let whereClause = {};

        whereClause.TB_PESSOA_STATUS = true;

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_PESSOA_NOME_PERFIL) whereClause.TB_PESSOA_NOME_PERFIL = TB_PESSOA_NOME_PERFIL;
        if (TB_TIPO_ID) whereClause.TB_TIPO_ID = TB_TIPO_ID;

        const Selecionar = await model.TB_PESSOA.findAll({
            where: whereClause,
            attributes: ['TB_PESSOA_ID', 'TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL']
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Usuário não encontrado' });

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
                    attributes: ['TB_PESSOA_NOME_PERFIL'],
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

selecaoOtimizado.post('/selanimais/filtrar/', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_ANIMAL_ID, TB_ANIMAL_ESPECIE, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_SEXO, TB_ANIMAL_SAUDE, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP } = req.body

        let whereClause = {};

        whereClause.TB_ANIMAL_STATUS = true;

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_ANIMAL.findAll({
            where: whereClause,
            attributes: ['TB_ANIMAL_ID', 'TB_PESSOA_ID', 'TB_ANIMAL_NOME', 'TB_ANIMAL_SAUDE', 'TB_ANIMAL_ALERTA', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL'],
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

module.exports = selecaoOtimizado;
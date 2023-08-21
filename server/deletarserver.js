const express = require('express');
let model = require('../models');

let exclusao = express();

exclusao.put('/delpessoa/:TB_PESSOA_ID', async (req, res) => {
    const TB_PESSOA_ID = req.params.TB_PESSOA_ID; // Pega o ID do front-end pelos paramêtros

    try {
        const campo = await model.TB_PESSOA.findByPk(TB_PESSOA_ID);// Encontre o campo pelo ID

        if (!campo) // Se não for encontrado o campo
            return res.status(404).json("Campo não encontrado");

        await campo.update({ // Desativar o registro
            TB_PESSOA_STATUS: 'DESATIVADO'
        });
        return res.status(200).json("Campo deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro ao deletar");
    }
});

exclusao.put('/delanimal/:TB_ANIMAL_ID', async (req, res) => {
    const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;

    try {
        const campo = await model.TB_ANIMAL_ID.findByPk(TB_ANIMAL_ID);

        if (!campo)
            return res.status(404).json("Campo não encontrado");

        await campo.update({
            TB_ANIMAL_STATUS: 'DESATIVADO'
        });
        return res.status(200).json("Campo deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro ao deletar");
    }
});

exclusao.put('/delmensagem/:TB_MENSAGEM_ID', async (req, res) => {
    const TB_MENSAGEM_ID = req.params.TB_MENSAGEM_ID;

    try {
        const campo = await model.TB_MENSAGEM_ID.findByPk(TB_MENSAGEM_ID);

        if (!campo)
            return res.status(404).json("Campo não encontrado");

        await campo.update({
            TB_MENSAGEM_STATUS: 'DESATIVADO'
        });
        return res.status(200).json("Campo deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro ao deletar");


    }
});

exclusao.put('/delpontoalimentacao/:TB_PONTO_ALIMENTACAO_ID', async (req, res) => {
    const TB_PONTO_ALIMENTACAO_ID = req.params.TB_PONTO_ALIMENTACAO_ID;

    try {
        const campo = await model.TB_PONTO_ALIMENTACAO_ID.findByPk(TB_PONTO_ALIMENTACAO_ID);

        if (!campo)
            return res.status(404).json("Campo não encontrado");

        await campo.update({
            TB_PONTO_ALIMENTACAO_ID: 'DESATIVADO'
        });
        return res.status(200).json("Campo deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro ao deletar");
    }
});

exclusao.put('/delpostagem/:TB_POSTAGEM', async (req, res) => {
    const TB_POSTAGEM_ID = req.params.TB_POSTAGEM_ID;

    try {
        const campo = await model.TB_POSTAGEM_ID.findByPk(TB_POSTAGEM_ID);

        if (!campo)
            return res.status(404).json("Campo não encontrado");

        await campo.update({
            TB_POSTAGEM_STATUS: 'DESATIVADO'
        });
        return res.status(200).json("Campo deletado com sucesso");
    } catch (error) {
        return res.status(500).json("Erro ao deletar");
    }
});

module.exports = exclusao;
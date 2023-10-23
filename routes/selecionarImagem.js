const express = require('express');
const model = require('../models');

let selecaoImagem = express.Router();

selecaoImagem.get('/selpessoaimg/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;
        const campo = await model.TB_PESSOA.findByPk(TB_PESSOA_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_PESSOA_IMG == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_PESSOA_IMG);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

selecaoImagem.get('/selanimalimg/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const campo = await model.TB_ANIMAL.findByPk(TB_ANIMAL_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_ANIMAL_IMG1 == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_ANIMAL_IMG1);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

selecaoImagem.get('/selmensagemimg/:TB_MENSAGEM_ID', async (req, res) => {
    try {
        const TB_MENSAGEM_ID = req.params.TB_MENSAGEM_ID;
        const campo = await model.TB_MENSAGEM.findByPk(TB_MENSAGEM_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_MENSAGEM_IMG == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_MENSAGEM_IMG);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

selecaoImagem.get('/selformulariodiarioimg/:TB_FORMULARIO_DIARIO_ID', async (req, res) => {
    try {
        const TB_FORMULARIO_DIARIO_ID = req.params.TB_FORMULARIO_DIARIO_ID;
        const campo = await model.TB_FORMULARIO_DIARIO.findByPk(TB_FORMULARIO_DIARIO_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_FORMULARIO_DIARIO_IMG == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_FORMULARIO_DIARIO_IMG);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

selecaoImagem.get('/selpostagemimg/:TB_POSTAGEM_ID', async (req, res) => {
    try {
        const TB_POSTAGEM_ID = req.params.TB_POSTAGEM_ID;
        const campo = await model.TB_POSTAGEM.findByPk(TB_POSTAGEM_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_POSTAGEM_IMG1 == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_POSTAGEM_IMG1);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

selecaoImagem.get('/seldenunciaimg/:TB_DENUNCIA_ID', async (req, res) => {
    try {
        const TB_DENUNCIA_ID = req.params.TB_DENUNCIA_ID;
        const campo = await model.TB_DENUNCIA.findByPk(TB_DENUNCIA_ID);

        if (!campo)
            return res.status(404).json({ message: 'Campo não encontrado' });
        if (campo.TB_DENUNCIA_IMG1 == null)
            return res.status(404).json({ message: 'Imagem não cadastrada' });

        res.setHeader('Content-Type', 'image/jpg');
        return res.send(campo.TB_DENUNCIA_IMG1);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar imagem', error: error.message });
    }
});

module.exports = selecaoImagem;
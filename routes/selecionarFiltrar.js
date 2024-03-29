const express = require('express');
const model = require('../models');
const { Op } = require('sequelize');

let selecaoFiltrar = express.Router();

selecaoFiltrar.post('/selpessoa/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_PESSOA_NOME_PERFIL, TB_TIPO_ID, TB_PESSOA_CIDADE } = req.body // Receba as opções de filtro do frontend

        let whereClause = {};

        whereClause.TB_PESSOA_STATUS = true;

        // Coloque os where que foram pedidos pelo frontend
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_PESSOA_CIDADE) whereClause.TB_PESSOA_CIDADE = TB_PESSOA_CIDADE;
        if (TB_PESSOA_NOME_PERFIL) whereClause.TB_PESSOA_NOME_PERFIL = TB_PESSOA_NOME_PERFIL;
        if (TB_TIPO_ID) whereClause.TB_TIPO_ID = TB_TIPO_ID;

        const Selecionar = await model.TB_PESSOA.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] }
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Usuário não encontrado', error: 'Usuário não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selinteracao/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_REMETENTE_ID, TB_PESSOA_DESTINATARIO_ID } = req.body

        let whereClause = {};

        if (TB_PESSOA_REMETENTE_ID) whereClause.TB_PESSOA_REMETENTE_ID = TB_PESSOA_REMETENTE_ID;
        if (TB_PESSOA_DESTINATARIO_ID) whereClause.TB_PESSOA_DESTINATARIO_ID = TB_PESSOA_DESTINATARIO_ID;

        const Selecionar = await model.TB_INTERACAO.findAll({
            where: whereClause,
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
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Interação não encontrada', error: 'Interação não encontrada' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selavaliacao/filtrar', async (req, res) => {
    try {
        const { TB_AVALIACAO_ID, TB_PESSOA_AVALIADA_ID, TB_PESSOA_AVALIADORA_ID } = req.body

        let whereClause = {};

        if (TB_AVALIACAO_ID) whereClause.TB_AVALIACAO_ID = TB_AVALIACAO_ID;
        if (TB_PESSOA_AVALIADA_ID) whereClause.TB_PESSOA_AVALIADA_ID = TB_PESSOA_AVALIADA_ID;
        if (TB_PESSOA_AVALIADORA_ID) whereClause.TB_PESSOA_AVALIADORA_ID = TB_PESSOA_AVALIADORA_ID;

        const Selecionar = await model.TB_AVALIACAO.findAll({
            where: whereClause,
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
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Avaliação não encontrada', error: 'Avaliação não encontrada' });

        const notas = Selecionar.map(avaliacao => avaliacao.TB_AVALIACAO_NOTA);
        const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

        return res.status(200).json({ Selecionar, media });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selanimal/filtrar/', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_ANIMAL_ID, TB_ANIMAL_ESPECIE, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_SEXO, TB_ANIMAL_SAUDE, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP } = req.body

        let whereClause = {};

        whereClause.TB_ANIMAL_STATUS = true;

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;
        if (TB_ANIMAL_ESPECIE) whereClause.TB_ANIMAL_ESPECIE = TB_ANIMAL_ESPECIE;
        if (TB_ANIMAL_IDADE) whereClause.TB_ANIMAL_IDADE = TB_ANIMAL_IDADE;
        if (TB_ANIMAL_IDADE_TIPO) whereClause.TB_ANIMAL_IDADE_TIPO = TB_ANIMAL_IDADE_TIPO;
        if (TB_ANIMAL_PORTE) whereClause.TB_ANIMAL_PORTE = TB_ANIMAL_PORTE;
        if (TB_ANIMAL_PESO) whereClause.TB_ANIMAL_PESO = TB_ANIMAL_PESO;
        if (TB_ANIMAL_SEXO) whereClause.TB_ANIMAL_SEXO = TB_ANIMAL_SEXO;
        if (TB_ANIMAL_SAUDE) whereClause.TB_ANIMAL_SAUDE = TB_ANIMAL_SAUDE;
        if (TB_ANIMAL_ALERTA) whereClause.TB_ANIMAL_ALERTA = TB_ANIMAL_ALERTA;
        if (TB_ANIMAL_CUIDADO_ESPECIAL) whereClause.TB_ANIMAL_CUIDADO_ESPECIAL = TB_ANIMAL_CUIDADO_ESPECIAL;
        if (TB_ANIMAL_VERMIFUGADO) whereClause.TB_ANIMAL_VERMIFUGADO = TB_ANIMAL_VERMIFUGADO;
        if (TB_ANIMAL_CASTRADO) whereClause.TB_ANIMAL_CASTRADO = TB_ANIMAL_CASTRADO;
        if (TB_ANIMAL_MICROCHIP) whereClause.TB_ANIMAL_MICROCHIP = TB_ANIMAL_MICROCHIP;
        if (TB_ANIMAL_LOCALIZACAO_CIDADE) whereClause.TB_ANIMAL_LOCALIZACAO_CIDADE = TB_ANIMAL_LOCALIZACAO_CIDADE;

        const Selecionar = await model.TB_ANIMAL.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_ANIMAL_IMG1', 'TB_ANIMAL_IMG2', 'TB_ANIMAL_IMG3', 'TB_ANIMAL_IMG4', 'TB_ANIMAL_IMG5'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_ANIMAL_ID', 'DESC'],
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Animal não encontrado', error: 'Animal não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selchat/filtrar', async (req, res) => {
    try {
        const { TB_CHAT_ID, TB_PESSOA_ID, TB_PESSOA_DESTINATARIO_ID, TB_PESSOA_REMETENTE_ID, TB_PESSOA_IDD } = req.body

        let whereClause = {};

        if (TB_CHAT_ID) whereClause.TB_CHAT_ID = TB_CHAT_ID;
        if (TB_PESSOA_DESTINATARIO_ID) whereClause.TB_PESSOA_DESTINATARIO_ID = TB_PESSOA_DESTINATARIO_ID;
        if (TB_PESSOA_REMETENTE_ID) whereClause.TB_PESSOA_REMETENTE_ID = TB_PESSOA_REMETENTE_ID;
        if (TB_PESSOA_ID && TB_PESSOA_IDD) {
            whereClause[Op.or] = [
                {
                    TB_PESSOA_DESTINATARIO_ID: TB_PESSOA_ID,
                    TB_PESSOA_REMETENTE_ID: TB_PESSOA_IDD,
                },
                {
                    TB_PESSOA_DESTINATARIO_ID: TB_PESSOA_IDD,
                    TB_PESSOA_REMETENTE_ID: TB_PESSOA_ID,
                },
            ];
        }

        const Chats = await model.TB_CHAT.findAll({
            where: whereClause,
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
                }
            ],
            order: [
                ['TB_CHAT_ID', 'DESC'],
            ],
            raw: true
        });
        if (Chats.length == 0) return res.status(404).json({ message: 'Chat não encontrado', error: 'Chat não encontrado' });

        const chatIds = Chats.map(chat => chat.TB_CHAT_ID);
        const Animais = await model.TB_CHAT_ANIMAL.findAll({
            where: {
                TB_CHAT_ID: chatIds
            },
            include: [
                {
                    model: model.TB_ANIMAL,
                    attributes: ['TB_ANIMAL_NOME', 'TB_PESSOA_ID'],
                },
            ],
            raw: true
        });

        const Selecionar = Chats.map(item => {
            const dadoNovo = { ...item };
            if (dadoNovo.TB_PESSOA_REMETENTE_ID == TB_PESSOA_ID) {
                dadoNovo.TB_CHAT_INICIADO = false;
            } else {
                dadoNovo.TB_CHAT_INICIADO = true;
            }
            Animais.map(animalItem => {
                if (animalItem["TB_CHAT_ID"] == item["TB_CHAT_ID"]) {
                    dadoNovo.TB_ANIMAL_CADASTRADO = animalItem["TB_ANIMAL.TB_PESSOA_ID"] != TB_PESSOA_ID;
                }
            });
            return dadoNovo;
        });

        return res.status(200).json({ Selecionar, Animais });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoFiltrar.post('/selmensagem/filtrar', async (req, res) => {
    try {
        const { TB_CHAT_ID, TB_MENSAGEM_ID, TB_PESSOA_ID } = req.body

        let whereClause = {};

        if (TB_CHAT_ID) whereClause.TB_CHAT_ID = TB_CHAT_ID;
        if (TB_MENSAGEM_ID) whereClause.TB_MENSAGEM_ID = TB_MENSAGEM_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_MENSAGEM.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_MENSAGEM_IMG'] },
            order: [
                ['TB_MENSAGEM_ID', 'DESC'],
            ]
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Mensagem não encontrada', error: 'Mensagem não encontrada' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoFiltrar.post('/selpontoalimentacao/filtrar', async (req, res) => {
    try {
        const { TB_PONTO_ALIMENTACAO_ID, TB_PESSOA_ID } = req.body

        let whereClause = {};

        whereClause.TB_PONTO_ALIMENTACAO_STATUS = true;

        if (TB_PONTO_ALIMENTACAO_ID) whereClause.TB_PONTO_ALIMENTACAO_ID = TB_PONTO_ALIMENTACAO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_PONTO_ALIMENTACAO_IMG'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID', 'TB_PESSOA_POSSUI_IMG'],
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_TIPO_ID', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Ponto de alimentação não encontrado', error: 'Ponto de alimentação não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selformulariodiario/filtrar', async (req, res) => {
    try {
        const { TB_FORMULARIO_DIARIO_ID, TB_PONTO_ALIMENTACAO_ID } = req.body

        let whereClause = {};

        if (TB_FORMULARIO_DIARIO_ID) whereClause.TB_FORMULARIO_DIARIO_ID = TB_FORMULARIO_DIARIO_ID;
        if (TB_PONTO_ALIMENTACAO_ID) whereClause.TB_PONTO_ALIMENTACAO_ID = TB_PONTO_ALIMENTACAO_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_FORMULARIO_DIARIO_IMG'] }
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Formulário diário não encontrado', error: 'Formulário diário não encontrado' });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoFiltrar.post('/selvacina/filtrar', async (req, res) => {
    try {
        const { TB_VACINA_ID, TB_ANIMAL_ID } = req.body

        let whereClause = {};

        if (TB_VACINA_ID) whereClause.TB_VACINA_ID = TB_VACINA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Vacina não encontrada', error: 'Vacina não encontrada' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message })
    }
});

selecaoFiltrar.post('/selsolicitacao/filtrar', async (req, res) => {
    try {
        const { TB_SOLICITACAO_ID, TB_SOLICITACAO_SITUACAO, TB_ANIMAL_ID, TB_PESSOA_ID, TB_SOLICITACAO_DT_SOLICITACAO, TB_SOLICITACAO_DT_APROVACAO, TB_TIPO_SOLICITACAO_ID } = req.body

        let whereClause = {};

        if (TB_SOLICITACAO_ID) whereClause.TB_SOLICITACAO_ID = TB_SOLICITACAO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;
        if (TB_SOLICITACAO_SITUACAO) whereClause.TB_SOLICITACAO_SITUACAO = TB_SOLICITACAO_SITUACAO;
        if (TB_SOLICITACAO_DT_SOLICITACAO) whereClause.TB_SOLICITACAO_DT_SOLICITACAO = TB_SOLICITACAO_DT_SOLICITACAO;
        if (TB_SOLICITACAO_DT_APROVACAO) whereClause.TB_SOLICITACAO_DT_APROVACAO = TB_SOLICITACAO_DT_APROVACAO;
        if (TB_TIPO_SOLICITACAO_ID) whereClause.TB_TIPO_SOLICITACAO_ID = TB_TIPO_SOLICITACAO_ID;

        const Selecionar = await model.TB_SOLICITACAO.findAll({
            where: whereClause,
            include: [
                {
                    model: model.TB_PESSOA,
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

selecaoFiltrar.post('/seltratamento/filtrar', async (req, res) => {
    try {
        const { TB_TRATAMENTO_ID, TB_PESSOA_ID, TB_ANIMAL_ID, TB_TRATAMENTO_ANONIMO } = req.body

        let whereClause = {};

        whereClause.TB_POSTAGEM_STATUS = true;

        if (TB_TRATAMENTO_ID) whereClause.TB_TRATAMENTO_ID = TB_TRATAMENTO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;
        if (TB_TRATAMENTO_ANONIMO) whereClause.TB_TRATAMENTO_ANONIMO = TB_TRATAMENTO_ANONIMO;

        const Selecionar = await model.TB_TRATAMENTO.findAll({
            where: whereClause,
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_TIPO_ID', 'TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_NOME', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Tratamento não encontrado', error: 'Tratamento não encontrado' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

selecaoFiltrar.post('/selpostagem/filtrar', async (req, res) => {
    try {
        const { TB_POSTAGEM_ID, TB_PESSOA_ID, TB_POSTAGEM_TEXTO } = req.body

        let whereClause = {};

        whereClause.TB_POSTAGEM_STATUS = true;

        if (TB_POSTAGEM_ID) whereClause.TB_POSTAGEM_ID = TB_POSTAGEM_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_POSTAGEM_TEXTO) whereClause.TB_POSTAGEM_TEXTO = TB_POSTAGEM_TEXTO;

        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_IMG2', 'TB_POSTAGEM_IMG3', 'TB_POSTAGEM_IMG4', 'TB_POSTAGEM_IMG5', 'TB_POSTAGEM_VIDEO'] },
            include: [
                {
                    model: model.TB_PESSOA,
                    attributes: ['TB_PESSOA_NOME_PERFIL', 'TB_PESSOA_POSSUI_IMG'],
                },
            ],
            order: [
                ['TB_POSTAGEM_ID', 'DESC'],
            ],
        });
        if (Selecionar.length == 0) return res.status(404).json({ message: 'Postagem não encontrada', error: 'Postagem não encontrada' });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar', error: error.message });
    }
});

module.exports = selecaoFiltrar;

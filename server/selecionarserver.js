const express = require('express');
let model = require('../models');

let selecao = express();

selecao.get('/selpessoa/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PESSOA.findAll({ // Selecione todos campos com status ativado
            where: {
                TB_PESSOA_STATUS: 'ATIVADO'
            }
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selpessoa/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_PESSOA_NOME_PERFIL, TB_TIPO_ID, TB_PESSOA_CIDADE } = req.body // Receba as opções de filtro do frontend

        let whereClause = {};

        whereClause.TB_PESSOA_STATUS = 'ATIVADO'; 

        // Coloque os where que foram pedidos pelo frontend
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_PESSOA_CIDADE) whereClause.TB_PESSOA_CIDADE = TB_PESSOA_CIDADE;
        if (TB_PESSOA_NOME_PERFIL) whereClause.TB_PESSOA_NOME_PERFIL = TB_PESSOA_NOME_PERFIL;
        if (TB_TIPO_ID) whereClause.TB_TIPO_ID = TB_TIPO_ID;

        const Selecionar = await model.TB_PESSOA.findAll({
            where: whereClause
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selanimal/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ANIMAL.findAll({
            where: {
                TB_ANIMAL_STATUS: 'ATIVADO'
            }
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selanimal/filtrar/', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_ANIMAL_ESPECIE, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_SEXO, TB_ANIMAL_SAUDE, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP } = req.body

        let whereClause = {};

        whereClause.TB_ANIMAL_STATUS = 'ATIVADO';

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
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
            where: whereClause
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/seladocao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_ADOCAO.findAll();
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/seladocao/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID } = req.body

        let whereClause = {};

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_ADOCAO.findAll({
            where: whereClause
        });

        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/selabrigo/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_ID } = req.body

        let whereClause = {};

        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_ABRIGO.findAll({
            where: whereClause
        });

        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/selavaliacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_AVALIACAO.findAll();
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/selpontoalimentacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: {
                TB_PONTO_ALIMENTACAO_STATUS: 'ATIVADO'
            }
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selpostagem/', async (req, res) => {
    try {
        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: {
                TB_POSTAGEM_STATUS: 'ATIVADO'
            }
        });
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.get('/selsituacao/', async (req, res) => {
    try {
        const Selecionar = await model.TB_SITUACAO.findAll();
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/seltemperamento/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TEMPERAMENTO.findAll();
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/seltrauma/', async (req, res) => {
    try {
        const Selecionar = await model.TB_TRAUMA.findAll();
        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/selvacina/filtrar', async (req, res) => {
    try {
        const { TB_ANIMAL_ID } = req.body

        let whereClause = {};

        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause
        });

        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

selecao.get('/selformulariodiario/filtrar', async (req, res) => {
    try {
        const { TB_PONTO_ALIMENTACAO_ID } = req.body

        let whereClause = {};

        if (TB_PONTO_ALIMENTACAO_ID) whereClause.TB_PONTO_ALIMENTACAO_ID = TB_PONTO_ALIMENTACAO_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause
        });

        res.status(200).json(Selecionar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar' })
    }
});

module.exports = selecao;

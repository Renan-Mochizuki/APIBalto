const express = require('express');
let model = require('../models');

let selecao = express();

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
            where: whereClause,
            attributes: { exclude: ['TB_PESSOA_SENHA', 'TB_PESSOA_IMG'] }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selseguindo/filtrar', async (req, res) => {
    try {
        const { TB_PESSOA_SEGUIDA_ID, TB_PESSOA_SEGUIDORA_ID } = req.body

        let whereClause = {};

        if (TB_PESSOA_SEGUIDA_ID) whereClause.TB_PESSOA_SEGUIDA_ID = TB_PESSOA_SEGUIDA_ID;
        if (TB_PESSOA_SEGUIDORA_ID) whereClause.TB_PESSOA_SEGUIDORA_ID = TB_PESSOA_SEGUIDORA_ID;

        const Selecionar = await model.TB_SEGUINDO.findAll({
            where: whereClause
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selavaliacao/filtrar', async (req, res) => {
    try {
        const { TB_AVALIACAO_ID, TB_PESSOA_AVALIADA_ID, TB_PESSOA_AVALIADORA_ID } = req.body

        let whereClause = {};

        if (TB_AVALIACAO_ID) whereClause.TB_AVALIACAO_ID = TB_AVALIACAO_ID;
        if (TB_PESSOA_AVALIADA_ID) whereClause.TB_PESSOA_AVALIADA_ID = TB_PESSOA_AVALIADA_ID;
        if (TB_PESSOA_AVALIADORA_ID) whereClause.TB_PESSOA_AVALIADORA_ID = TB_PESSOA_AVALIADORA_ID;

        const Selecionar = await model.TB_AVALIACAO.findAll({
            where: whereClause,
        });
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

selecao.post('/selanimal/filtrar/', async (req, res) => {
    try {
        const { TB_PESSOA_ID, TB_ANIMAL_ID, TB_ANIMAL_ESPECIE, TB_ANIMAL_IDADE, TB_ANIMAL_IDADE_TIPO, TB_ANIMAL_PORTE, TB_ANIMAL_PESO, TB_ANIMAL_SEXO, TB_ANIMAL_SAUDE, TB_ANIMAL_ALERTA, TB_ANIMAL_LOCALIZACAO_CIDADE, TB_ANIMAL_CUIDADO_ESPECIAL, TB_ANIMAL_VERMIFUGADO, TB_ANIMAL_CASTRADO, TB_ANIMAL_MICROCHIP } = req.body

        let whereClause = {};

        whereClause.TB_ANIMAL_STATUS = 'ATIVADO';

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
            attributes: { exclude: ['TB_ANIMAL_IMG1', 'TB_ANIMAL_IMG2', 'TB_ANIMAL_IMG3', 'TB_ANIMAL_IMG4', 'TB_ANIMAL_IMG5'] }
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selchat/filtrar', async (req, res) => {
    try {
        const { TB_CHAT_ID, TB_PESSOA_REMETENTE_ID, TB_PESSOA_DESTINATARIO_ID } = req.body

        let whereClause = {};

        if (TB_CHAT_ID) whereClause.TB_CHAT_ID = TB_CHAT_ID;
        if (TB_PESSOA_REMETENTE_ID) whereClause.TB_PESSOA_REMETENTE_ID = TB_PESSOA_REMETENTE_ID;
        if (TB_PESSOA_DESTINATARIO_ID) whereClause.TB_PESSOA_DESTINATARIO_ID = TB_PESSOA_DESTINATARIO_ID;

        const Selecionar = await model.TB_CHAT.findAll({
            where: whereClause
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.post('/selmensagem/filtrar', async (req, res) => {
    try {
        const { TB_CHAT_ID, TB_MENSAGEM_ID, TB_PESSOA_REMETENTE_ID } = req.body

        let whereClause = {};

        if (TB_CHAT_ID) whereClause.TB_CHAT_ID = TB_CHAT_ID;
        if (TB_MENSAGEM_ID) whereClause.TB_MENSAGEM_ID = TB_MENSAGEM_ID;
        if (TB_PESSOA_REMETENTE_ID) whereClause.TB_PESSOA_REMETENTE_ID = TB_PESSOA_REMETENTE_ID;

        const Selecionar = await model.TB_MENSAGEM.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_MENSAGEM_IMG'] }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
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

selecao.post('/selpontoalimentacao/filtrar', async (req, res) => {
    try {
        const { TB_PONTO_ALIMENTACAO_ID, TB_PESSOA_ID } = req.body

        let whereClause = {};

        whereClause.TB_PONTO_ALIMENTACAO_STATUS = 'ATIVADO';

        if (TB_PONTO_ALIMENTACAO_ID) whereClause.TB_PONTO_ALIMENTACAO_ID = TB_PONTO_ALIMENTACAO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;

        const Selecionar = await model.TB_PONTO_ALIMENTACAO.findAll({
            where: whereClause,
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
    }
});

selecao.post('/selformulariodiario/filtrar', async (req, res) => {
    try {
        const { TB_FORMULARIO_DIARIO_ID, TB_PONTO_ALIMENTACAO_ID } = req.body

        let whereClause = {};

        if (TB_FORMULARIO_DIARIO_ID) whereClause.TB_FORMULARIO_DIARIO_ID = TB_FORMULARIO_DIARIO_ID;
        if (TB_PONTO_ALIMENTACAO_ID) whereClause.TB_PONTO_ALIMENTACAO_ID = TB_PONTO_ALIMENTACAO_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_FORMULARIO_DIARIO_IMG'] }
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.post('/selvacina/filtrar', async (req, res) => {
    try {
        const { TB_VACINA_ID, TB_ANIMAL_ID } = req.body

        let whereClause = {};

        if (TB_VACINA_ID) whereClause.TB_VACINA_ID = TB_VACINA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_VACINA.findAll({
            where: whereClause
        });

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

selecao.post('/seltratamento/filtrar', async (req, res) => {
    try {
        const { TB_TRATAMENTO_ID, TB_PESSOA_ID, TB_ANIMAL_ID } = req.body

        let whereClause = {};

        whereClause.TB_POSTAGEM_STATUS = 'ATIVADO';

        if (TB_TRATAMENTO_ID) whereClause.TB_TRATAMENTO_ID = TB_TRATAMENTO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_TRATAMENTO.findAll({
            where: whereClause,
        });
        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' });
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

selecao.post('/seladocao/filtrar', async (req, res) => {
    try {
        const { TB_ADOCAO_ID, TB_PESSOA_ID, TB_ANIMAL_ID } = req.body

        let whereClause = {};

        if (TB_ADOCAO_ID) whereClause.TB_ADOCAO_ID = TB_ADOCAO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_ADOCAO.findAll({
            where: whereClause
        });

        return res.status(200).json(Selecionar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao selecionar' })
    }
});

selecao.post('/selabrigo/filtrar', async (req, res) => {
    try {
        const { TB_ABRIGO_ID, TB_PESSOA_ID, TB_ANIMAL_ID } = req.body

        let whereClause = {};

        if (TB_ABRIGO_ID) whereClause.TB_ABRIGO_ID = TB_ABRIGO_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_ANIMAL_ID) whereClause.TB_ANIMAL_ID = TB_ANIMAL_ID;

        const Selecionar = await model.TB_ABRIGO.findAll({
            where: whereClause
        });

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

selecao.post('/selpostagem/filtrar', async (req, res) => {
    try {
        const { TB_POSTAGEM_ID, TB_PESSOA_ID, TB_POSTAGEM_TEXTO } = req.body

        let whereClause = {};

        whereClause.TB_POSTAGEM_STATUS = 'ATIVADO';

        if (TB_POSTAGEM_ID) whereClause.TB_POSTAGEM_ID = TB_POSTAGEM_ID;
        if (TB_PESSOA_ID) whereClause.TB_PESSOA_ID = TB_PESSOA_ID;
        if (TB_POSTAGEM_TEXTO) whereClause.TB_POSTAGEM_TEXTO = TB_POSTAGEM_TEXTO;

        const Selecionar = await model.TB_POSTAGEM.findAll({
            where: whereClause,
            attributes: { exclude: ['TB_POSTAGEM_IMG1', 'TB_POSTAGEM_IMG2', 'TB_POSTAGEM_IMG3', 'TB_POSTAGEM_IMG4', 'TB_POSTAGEM_IMG5', 'TB_POSTAGEM_VIDEO'] }
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

selecao.get('/seltemperamentos/:TB_ANIMAL_ID', async (req, res) => {
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

selecao.get('/selsituacoes/:TB_ANIMAL_ID', async (req, res) => {
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

selecao.get('/seltraumas/:TB_ANIMAL_ID', async (req, res) => {
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

module.exports = selecao;
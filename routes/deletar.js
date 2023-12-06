const express = require('express');
const model = require('../models');

let exclusao = express.Router();

exclusao.put('/delpessoa/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID; // Pega o ID do front-end pelos paramêtros
        const campo = await model.TB_PESSOA.findByPk(TB_PESSOA_ID);// Encontre o campo pelo ID

        if (!campo) // Se não for encontrado o campo
            return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({ // Desativar o registro
            TB_PESSOA_STATUS: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delseguindo/:TB_SEGUINDO_ID', async (req, res) => {
    try {
        const TB_SEGUINDO_ID = req.params.TB_SEGUINDO_ID;
        const campo = await model.TB_SEGUINDO.findByPk(TB_SEGUINDO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delavaliacao/:TB_AVALIACAO_ID', async (req, res) => {
    try {
        const TB_AVALIACAO_ID = req.params.TB_AVALIACAO_ID;
        const campo = await model.TB_AVALIACAO.findByPk(TB_AVALIACAO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delanimal/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const campo = await model.TB_ANIMAL.findByPk(TB_ANIMAL_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_ANIMAL_STATUS: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delchat/:TB_CHAT_ID', async (req, res) => {
    try {
        const TB_CHAT_ID = req.params.TB_CHAT_ID;
        const campo = await model.TB_CHAT.findByPk(TB_CHAT_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_CHAT_STATUS: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delmensagem/:TB_MENSAGEM_ID', async (req, res) => {
    try {
        const TB_MENSAGEM_ID = req.params.TB_MENSAGEM_ID;
        const campo = await model.TB_MENSAGEM.findByPk(TB_MENSAGEM_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_MENSAGEM_STATUS: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delpontoalimentacao/:TB_PONTO_ALIMENTACAO_ID', async (req, res) => {
    try {
        const TB_PONTO_ALIMENTACAO_ID = req.params.TB_PONTO_ALIMENTACAO_ID;
        const campo = await model.TB_PONTO_ALIMENTACAO.findByPk(TB_PONTO_ALIMENTACAO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_PONTO_ALIMENTACAO_ID: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delvacina/:TB_VACINA_ID', async (req, res) => {
    try {
        const TB_VACINA_ID = req.params.TB_VACINA_ID;
        const campo = await model.TB_VACINA.findByPk(TB_VACINA_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delcor/:TB_COR_ID', async (req, res) => {
    try {
        const TB_COR_ID = req.params.TB_COR_ID;
        const campo = await model.TB_COR.findByPk(TB_COR_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/deltemperamento/:TB_TEMPERAMENTO_ID', async (req, res) => {
    try {
        const TB_TEMPERAMENTO_ID = req.params.TB_TEMPERAMENTO_ID;
        const campo = await model.TB_TEMPERAMENTO.findByPk(TB_TEMPERAMENTO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delsituacao/:TB_SITUACAO_ID', async (req, res) => {
    try {
        const TB_SITUACAO_ID = req.params.TB_SITUACAO_ID;
        const campo = await model.TB_SITUACAO.findByPk(TB_SITUACAO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/deltrauma/:TB_TRAUMA_ID', async (req, res) => {
    try {
        const TB_TRAUMA_ID = req.params.TB_TRAUMA_ID;
        const campo = await model.TB_TRAUMA.findByPk(TB_TRAUMA_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delpostagem/:TB_POSTAGEM_ID', async (req, res) => {
    try {
        const TB_POSTAGEM_ID = req.params.TB_POSTAGEM_ID;
        const campo = await model.TB_POSTAGEM.findByPk(TB_POSTAGEM_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_POSTAGEM_STATUS: false
        });
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delanimalcor/:TB_ANIMAL_COR_ID', async (req, res) => {
    try {
        const TB_ANIMAL_COR_ID = req.params.TB_ANIMAL_COR_ID;
        const campo = await model.TB_ANIMAL_COR.findByPk(TB_ANIMAL_COR_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delanimaltemperamento/:TB_ANIMAL_TEMPERAMENTO_ID', async (req, res) => {
    try {
        const TB_ANIMAL_TEMPERAMENTO_ID = req.params.TB_ANIMAL_TEMPERAMENTO_ID;
        const campo = await model.TB_ANIMAL_TEMPERAMENTO.findByPk(TB_ANIMAL_TEMPERAMENTO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delanimalsituacao/:TB_ANIMAL_SITUACAO_ID', async (req, res) => {
    try {
        const TB_ANIMAL_SITUACAO_ID = req.params.TB_ANIMAL_SITUACAO_ID;
        const campo = await model.TB_ANIMAL_SITUACAO.findByPk(TB_ANIMAL_SITUACAO_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delanimaltrauma/:TB_ANIMAL_TRAUMA_ID', async (req, res) => {
    try {
        const TB_ANIMAL_TRAUMA_ID = req.params.TB_ANIMAL_TRAUMA_ID;
        const campo = await model.TB_ANIMAL_TRAUMA.findByPk(TB_ANIMAL_TRAUMA_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delpostagemanimal/:TB_POSTAGEM_ANIMAL_ID', async (req, res) => {
    try {
        const TB_POSTAGEM_ANIMAL_ID = req.params.TB_POSTAGEM_ANIMAL_ID;
        const campo = await model.TB_POSTAGEM_ANIMAL.findByPk(TB_POSTAGEM_ANIMAL_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/delchatanimal/:TB_CHAT_ANIMAL_ID', async (req, res) => {
    try {
        const TB_CHAT_ANIMAL_ID = req.params.TB_CHAT_ANIMAL_ID;
        const campo = await model.TB_CHAT_ANIMAL.findByPk(TB_CHAT_ANIMAL_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.destroy();
        return res.status(200).json({ message: "Campo deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao deletar", error: error.message });
    }
});

exclusao.put('/reativarpessoa/:TB_PESSOA_ID', async (req, res) => {
    try {
        const TB_PESSOA_ID = req.params.TB_PESSOA_ID;
        const campo = await model.TB_PESSOA.findByPk(TB_PESSOA_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_PESSOA_STATUS: true
        });
        return res.status(200).json({ message: "Campo reativado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao reativar", error: error.message });
    }
});

exclusao.put('/reativaranimal/:TB_ANIMAL_ID', async (req, res) => {
    try {
        const TB_ANIMAL_ID = req.params.TB_ANIMAL_ID;
        const campo = await model.TB_ANIMAL.findByPk(TB_ANIMAL_ID);

        if (!campo) return res.status(404).json({ message: "Campo não encontrado", error: "Campo não encontrado" });

        await campo.update({
            TB_ANIMAL_STATUS: true
        });
        return res.status(200).json({ message: "Campo reativado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao reativar", error: error.message });
    }
});

module.exports = exclusao;
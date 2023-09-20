"user strict";
const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const autenticacao = require("./autenticacaoserver");
const cadastro = require("./cadastrarserver");
const alteracao = require("./alterarserver");
const selecao = require("./selecionarserver");
const exclusao = require("./deletarserver");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API Balto');
});
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));

app.use(autenticacao);
app.use(cadastro);
app.use(alteracao);
app.use(selecao);
app.use(exclusao);

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Rota para receber a imagem
app.put('/upload', upload.single('image'), async (req, res) => {
  try {
    const campo = await model.TB_PESSOA.findByPk(2); // Encontre o campo pelo ID
    if (!campo) // Se não for encontrado o campo
      return res.status(404).json({ message: "Campo não encontrado" });


    // req.file.buffer contém os dados da imagem em formato de buffer
    const imageBuffer = req.file.buffer;

    // Use o Sequelize para inserir a imagem no banco de dados
    const pessoa = await campo.update({
      TB_PESSOA_IMG: imageBuffer,
    });

    res.status(200).json({ message: 'Imagem cadastrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar imagem:', error);
    res.status(500).json({ error: 'Erro ao cadastrar imagem' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log('Servidor Rodando. URL Local: http://localhost:' + port);
});
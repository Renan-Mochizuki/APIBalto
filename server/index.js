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
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

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

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'noreplybaltopetgate@gmail.com',
    pass: 'ermelindaetec187',
  },
});

const codeStorage = {};

app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = randomstring.generate(6);

  codeStorage[email] = code;

  const mailOptions = {
    from: 'noresponsebaltopetgate@gmail.com',
    to: email,
    subject: 'Código de Verificação',
    text: `Seu código de verificação é: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Código enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    res.status(500).json({ error: 'Erro ao enviar o email.' });
  }
});

app.post('/change-password', (req, res) => {
  const { email, code, newPassword } = req.body;

  if (codeStorage[email] === code) {

    delete codeStorage[email];
    res.status(200).json({ message: 'Senha alterada com sucesso.' });
  } else {
    res.status(400).json({ error: 'Código inválido.' });
  }
});


const port = 3000;
app.listen(port, () => {
    console.log('Servidor Rodando. URL Local: http://localhost:'+port);
});
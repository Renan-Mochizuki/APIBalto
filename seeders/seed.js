'use strict';
let md5 = require('md5');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datapessoa = [
            {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'João',
                TB_PESSOA_NOME_PERFIL: 'João',
                TB_PESSOA_EMAIL: 'joao@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/275',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'Fernando',
                TB_PESSOA_NOME_PERFIL: 'Fernando',
                TB_PESSOA_EMAIL: 'fernando@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/250',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'Guilherme',
                TB_PESSOA_NOME_PERFIL: 'Guilherme',
                TB_PESSOA_EMAIL: 'guilherme@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 2,
                TB_PESSOA_NOME: 'Veterinário Paz',
                TB_PESSOA_NOME_PERFIL: 'Veterinário Paz',
                TB_PESSOA_EMAIL: 'veterinariopaz@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 3,
                TB_PESSOA_NOME: 'instituicao',
                TB_PESSOA_NOME_PERFIL: 'instituicao',
                TB_PESSOA_EMAIL: 'instituicao@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 4,
                TB_PESSOA_NOME: 'protetor',
                TB_PESSOA_NOME_PERFIL: 'protetor',
                TB_PESSOA_EMAIL: 'protetor@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 5,
                TB_PESSOA_NOME: 'abrigo',
                TB_PESSOA_NOME_PERFIL: 'abrigo',
                TB_PESSOA_EMAIL: 'abrigo@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 6,
                TB_PESSOA_NOME: 'estabelecimento',
                TB_PESSOA_NOME_PERFIL: 'estabelecimento',
                TB_PESSOA_EMAIL: 'estabelecimento@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                TB_PESSOA_IMG: 'https://i.pravatar.cc/300',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        const dataanimal = [
            {
                TB_PESSOA_ID: 1,
                TB_ANIMAL_NOME: 'Pateta',
                TB_ANIMAL_IDADE: 10,
                TB_ANIMAL_IDADE_TIPO: 'MESES',
                TB_ANIMAL_PORTE: 'GRANDE',
                TB_ANIMAL_PESO: 2.7,
                TB_ANIMAL_COR: 'PRETO',
                TB_ANIMAL_SEXO: 'MACHO',
                TB_ANIMAL_ESPECIE: 'CACHORRO',
                TB_ANIMAL_SAUDE: true,
                TB_ANIMAL_DESCRICAO: 'Muito carinhoso',
                TB_ANIMAL_ALERTA: false,
                TB_ANIMAL_LOCALIZACAO_UF: 'SP',
                TB_ANIMAL_LOCALIZACAO_CIDADE: 'Santana de Parnaíba',
                TB_ANIMAL_LOCALIZACAO_BAIRRO: 'Centro',
                TB_ANIMAL_LOCALIZACAO_RUA: 'Suzana dias',
                TB_ANIMAL_VERMIFUGADO: 'SIM',
                TB_ANIMAL_CASTRADO: 'NAO',
                TB_ANIMAL_MICROCHIP: 'INDEFINIDO',
                TB_ANIMAL_LOCAL_RESGATE: 'Rua alagoas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_PESSOA', datapessoa)
            .then(() => {
                queryInterface.bulkInsert('TB_ANIMAL', dataanimal)
            });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_TIPO', null, {});
    }
};
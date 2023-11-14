'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_PESSOA_ID: 1,
                TB_ANIMAL_NOME: 'Pateta',
                TB_ANIMAL_IDADE: 10,
                TB_ANIMAL_IDADE_TIPO: 'MES',
                TB_ANIMAL_PORTE: 'GRANDE',
                TB_ANIMAL_PESO: 2.7,
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
            {
                TB_PESSOA_ID: 2,
                TB_ANIMAL_NOME: 'Tobias',
                TB_ANIMAL_IDADE: 2,
                TB_ANIMAL_IDADE_TIPO: 'ANO',
                TB_ANIMAL_PORTE: 'MEDIO',
                TB_ANIMAL_PESO: 1.8,
                TB_ANIMAL_SEXO: 'MACHO',
                TB_ANIMAL_ESPECIE: 'CACHORRO',
                TB_ANIMAL_SAUDE: false,
                TB_ANIMAL_DESCRICAO: 'Alegre',
                TB_ANIMAL_ALERTA: true,
                TB_ANIMAL_LOCALIZACAO_UF: 'SP',
                TB_ANIMAL_LOCALIZACAO_CIDADE: 'Santana de Parnaíba',
                TB_ANIMAL_LOCALIZACAO_BAIRRO: 'Centro',
                TB_ANIMAL_LOCALIZACAO_RUA: 'Andre',
                TB_ANIMAL_VERMIFUGADO: 'SIM',
                TB_ANIMAL_CASTRADO: 'SIM',
                TB_ANIMAL_MICROCHIP: 'NAO',
                TB_ANIMAL_LOCAL_RESGATE: 'Rua capaciba',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_ID: 4,
                TB_ANIMAL_NOME: 'Sofia',
                TB_ANIMAL_IDADE: 4,
                TB_ANIMAL_IDADE_TIPO: 'ANO',
                TB_ANIMAL_PORTE: 'PEQUENO',
                TB_ANIMAL_PESO: 1.0,
                TB_ANIMAL_SEXO: 'FEMEA',
                TB_ANIMAL_ESPECIE: 'GATO',
                TB_ANIMAL_SAUDE: true,
                TB_ANIMAL_DESCRICAO: 'Adora frango',
                TB_ANIMAL_ALERTA: false,
                TB_ANIMAL_LOCALIZACAO_UF: 'SP',
                TB_ANIMAL_LOCALIZACAO_CIDADE: 'Santana de Parnaíba',
                TB_ANIMAL_LOCALIZACAO_BAIRRO: 'São luís',
                TB_ANIMAL_LOCALIZACAO_RUA: 'Rua Espanha',
                TB_ANIMAL_VERMIFUGADO: 'NAO',
                TB_ANIMAL_CASTRADO: 'SIM',
                TB_ANIMAL_MICROCHIP: 'NAO',
                TB_ANIMAL_LOCAL_RESGATE: 'Rua portugal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_ID: 5,
                TB_ANIMAL_NOME: 'Scooby',
                TB_ANIMAL_IDADE: 6,
                TB_ANIMAL_IDADE_TIPO: 'ANO',
                TB_ANIMAL_PORTE: 'GRANDE',
                TB_ANIMAL_PESO: 3.1,
                TB_ANIMAL_SEXO: 'MACHO',
                TB_ANIMAL_ESPECIE: 'CACHORRO',
                TB_ANIMAL_SAUDE: true,
                TB_ANIMAL_DESCRICAO: 'Adora companhia',
                TB_ANIMAL_ALERTA: false,
                TB_ANIMAL_LOCALIZACAO_UF: 'SP',
                TB_ANIMAL_LOCALIZACAO_CIDADE: 'Santana de Parnaíba',
                TB_ANIMAL_LOCALIZACAO_BAIRRO: 'São luís',
                TB_ANIMAL_LOCALIZACAO_RUA: 'Rua Espanha',
                TB_ANIMAL_VERMIFUGADO: 'NAO',
                TB_ANIMAL_CASTRADO: 'SIM',
                TB_ANIMAL_MICROCHIP: 'NAO',
                TB_ANIMAL_LOCAL_RESGATE: 'Rua portugal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_ANIMAL', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL', null, {});
    }
};
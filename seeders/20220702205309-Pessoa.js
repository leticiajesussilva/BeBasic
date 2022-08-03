'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [
  {
    nome: 'Wellington Boorati',
    senha: 'senha123',
    email: 'well_boorati@hotmail.com',
    sexo: 'masculino',
    cpf: '80543633039',
    data_nascimento: "1992-02-12",
    telefone: '34998765432',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'João Silva',
    senha: 'senha123',
    email: 'joao_silva@hotmail.com',
    sexo: 'masculino',
    cpf: '03782005007',
    data_nascimento: "1991-01-11",
    telefone: '34998761213',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Murilo Batista',
    senha: 'senha123',
    email: 'murilo_batista@hotmail.com',
    sexo: 'masculino',
    cpf: '55121798024',
    data_nascimento: "1993-03-13",
    telefone: '349987651548',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Gabriel Teofilo',
    senha: 'senha123',
    email: 'gabriel_teofilo@hotmail.com',
    sexo: 'masculino',
    cpf: '29048297095',
    data_nascimento: "1990-02-10",
    telefone: '34998765859',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Luiz Fernando Sanchez',
    senha: 'senha123',
    email: 'luiz_sanchez@hotmail.com',
    sexo: 'masculino',
    cpf: '05389196040',
    data_nascimento: "1994-04-14",
    telefone: '3499879897',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Letícia Gonçalves',
    senha: 'senha123',
    email: 'leticia_gonçalves@hotmail.com',
    sexo: 'feminino',
    cpf: '89814965014',
    data_nascimento: "1994-07-14",
    telefone: '3499877871',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Maria Betânia',
    senha: 'senha123',
    email: 'maria_betania@hotmail.com',
    sexo: 'feminino',
    cpf: '92879103088',
    data_nascimento: "1997-07-25",
    telefone: '3499879791',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Cassia Eller',
    senha: 'senha123',
    email: 'cassia_eller@hotmail.com',
    sexo: 'feminino',
    cpf: '27009008043',
    data_nascimento: "1995-10-22",
    telefone: '34998763637',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Elis Regina',
    senha: 'senha123',
    email: 'elis_regina@hotmail.com',
    sexo: 'feminino',
    cpf: '69310498013',
    data_nascimento: "1990-10-05",
    telefone: '34998766935',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Rita Lee',
    senha: 'senha123',
    email: 'rita_lee@hotmail.com',
    sexo: 'feminino',
    cpf: '51138952028',
    data_nascimento: "1995-04-21",
    telefone: '34998764574',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ], {});
},

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
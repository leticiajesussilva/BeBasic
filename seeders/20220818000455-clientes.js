"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nome: "O administrador",
          senha: "senha123",
          email: "administrador@gmail.com",
          sexo: "masculino",
          cpf: "80543633039",
          data_nascimento: "1992-02-12",
          telefone: "34998765432",
          admnistrador: true,
          image_url:
            "https://a-static.mlcdn.com.br/800x560/mascara-v-de-vinganca-anonymous-vendetta-luxo-com-capuz-destak/destakfantasias/ab02aa9ac60411eb99924201ac18500e/9e3e041a947ea388d309249540d5ea78.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Charlie Brown Jr",
          senha: "senha123",
          email: "charliebrownjr@gmail.com",
          sexo: "masculino",
          cpf: "80543633039",
          data_nascimento: "1992-02-12",
          telefone: "34998765432",
          admnistrador: false,
          image_url:
            "https://akamai.sscdn.co/uploadfile/letras/fotos/8/a/c/c/8accc351a81471078ac4f66be25bf61e.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Zé Ramalho",
          senha: "senha123",
          email: "zeramalho@gmail.com",
          sexo: "masculino",
          cpf: "03782005007",
          data_nascimento: "1991-01-11",
          telefone: "34998761213",
          admnistrador: false,
          image_url:
            "https://www12.senado.leg.br/radio/1/curta-musical/2019/10/08/70-anos-de-ze-ramalho/ze_ramalho_divulgacao.jpg/@@images/75f6a2ee-9b04-4761-9e13-6c5062da67c1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Raul Seixas",
          senha: "senha123",
          email: "raulseixas@gmail.com",
          sexo: "masculino",
          cpf: "55121798024",
          data_nascimento: "1993-03-13",
          telefone: "349987651548",
          admnistrador: false,
          image_url:
            "https://i.scdn.co/image/ab6761610000e5eb9f0c70d55c26e9773d00b7b1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Tim Maia",
          senha: "senha123",
          email: "gabriel_teofilo@gmail.com",
          sexo: "masculino",
          cpf: "29048297095",
          data_nascimento: "1990-02-10",
          telefone: "34998765859",
          admnistrador: false,
          image_url: "https://www.vagalume.com.br/tim-maia/images/tim-maia.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Mano Brown",
          senha: "senha123",
          email: "manobrown@gmail.com",
          sexo: "masculino",
          cpf: "05389196040",
          data_nascimento: "1994-04-14",
          telefone: "3499879897",
          admnistrador: false,
          image_url:
            "https://revistacult.uol.com.br/home/wp-content/uploads/2014/07/mano-brown-daryan-dornelles.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Zélia Duncan",
          senha: "senha123",
          email: "zeliaduncar@gmail.com",
          sexo: "feminino",
          cpf: "89814965014",
          data_nascimento: "1994-07-14",
          telefone: "3499877871",
          admnistrador: false,
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKve9vEVEmeKs-Sv4Mbon4ma43xDsGKQqdn2YPcCddi3RxwkC34BIgjzAVkQRJISpPZo&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Maria Betânia",
          senha: "senha123",
          email: "maria_betania@gmail.com",
          sexo: "feminino",
          cpf: "92879103088",
          data_nascimento: "1997-07-25",
          telefone: "3499879791",
          admnistrador: false,
          image_url:
            "https://novabrasilfm.com.br/wp-content/uploads/2022/02/maria-bethania-.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Cassia Eller",
          senha: "senha123",
          email: "cassia_eller@gmail.com",
          sexo: "feminino",
          cpf: "27009008043",
          data_nascimento: "1995-10-22",
          telefone: "34998763637",
          admnistrador: false,
          image_url:
            "https://extra.globo.com/tv-e-lazer/24815977-f15-098/w367h550-PROP/ae2ac20b1ad68f72fa53b867d58f7e2e.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Elis Regina",
          senha: "senha123",
          email: "elis_regina@gmail.com",
          sexo: "feminino",
          cpf: "69310498013",
          data_nascimento: "1990-10-05",
          telefone: "34998766935",
          admnistrador: false,
          image_url:
            "https://s2.glbimg.com/-I6AScvO47P6TVkf-JswgnE9Yh4=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/o/V/i7s3u7Q0arkh84g5ABAg/05612238.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Rita Lee",
          senha: "senha123",
          email: "rita_lee@gmail.com",
          sexo: "feminino",
          cpf: "51138952028",
          data_nascimento: "1995-04-21",
          telefone: "34998764574",
          admnistrador: false,
          image_url:
            "https://akamai.sscdn.co/uploadfile/letras/fotos/9/6/a/b/96abe40ef8bcce86b6deb8a785844447.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Produto_estoque",
      [
        {
          fornecedor_id: 1,
          nome: "Camiseta Gola V",
          categoria_id: 2,
          preco: 120,
          cor: "branco",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-199392_2048x2048.webp?v=1660209881",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 1,
          nome: "Camiseta Gola V",
          categoria_id: 2,
          preco: 120,
          cor: "preto",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-326811_2048x2048.webp?v=1660209881",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 1,
          nome: "Camiseta Gola V",
          categoria_id: 2,
          preco: 120,
          cor: "azul",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-426603_2048x2048.webp?v=1660209882",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 1,
          nome: "Camiseta Gola V",
          categoria_id: 2,
          preco: 120,
          cor: "cinza",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-700709_2048x2048.webp?v=1660209882",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 2,
          nome: "Camiseta Gola O",
          categoria_id: 1,
          preco: 120,
          cor: "branco",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-725603_2048x2048.webp?v=1660209882",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 2,
          nome: "Camiseta Gola O",
          categoria_id: 1,
          preco: 120,
          cor: "preto",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-339096_2048x2048.webp?v=1660209881",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 2,
          nome: "Camiseta Gola O",
          categoria_id: 1,
          preco: 120,
          cor: "azul",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-169810_2048x2048.webp?v=1660209882",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fornecedor_id: 2,
          nome: "Camiseta Gola O",
          categoria_id: 1,
          preco: 120,
          cor: "cinza",
          p_quantidade_disponivel: 10,
          m_quantidade_disponivel: 10,
          g_quantidade_disponivel: 10,
          image_url:
            "https://cdn.shopify.com/s/files/1/0544/3731/4735/products/camiseta-minimal-492854_2048x2048.webp?v=1660209881",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Produto_estoque", null, {});
  },
};

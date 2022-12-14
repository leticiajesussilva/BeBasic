const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************

const mainController = require("../controllers/mainController");
const loginController = require("../controllers/loginController");
const registrationController = require("../controllers/registrationController");
const adressRegistrationController = require("../controllers/adressRegistrationController");
const produtosEstoqueController = require("../controllers/produtosEstoqueController");
const fornecedorController = require("../controllers/fornecedorController");
const { validateRegister } = require("../middlaware/registerValidation");
const upload = require("../middlaware/uploadsUser");
const auth = require("../middlaware/auth");
const produtoController = require("../controllers/produtoController");
const paineldousuario = require("../controllers/paineldousuarioController");
const admnistrador = require("../controllers/admnistradorController");

/* Home pages */
router.get("/", mainController.homePage);
router.get("/nossa-historia", mainController.nossaHistoriaPage);

// PAINEL DO USUÁRIO
// router.get('/paineldousuario', auth, paineldousuario.encontreMeuCadastro)
router.get("/paineldousuario", mainController.painelPage);

// PAINEL DO USUÁRIO - meu cadastro
router.get("/meucadastro/:id", paineldousuario.encontreMeuCadastro);
router.put("/meucadastro/:id", paineldousuario.atualizarMeuCadastro);

// PAINEL DO USUÁRIO - pedidos
router.get(
  "/meucadastro/:cliente_id/pedido/:id",
  paineldousuario.encontreMeusPedidos
);

// PAINEL DO USUÁRIO - Redefinir senha
router.put("/redefinirSenha/:id", paineldousuario.redefinirSenha);

// ADMNISTRADOR
router.get("/adminpage", admnistrador.todosOsPedidos);
// ADMINISTRADOR - cadastros / Pedidos / Fornecedores
router.get("/adminpageCadastros", admnistrador.encontreTodosOsCadastros);
router.get("/adminpageCadastros/:id", admnistrador.encontreUmCadastro);
router.delete("/deletarprodutos/:id", admnistrador.deletarUmCadastro);
// router.put('/adminpageCadastros/:id', admnistrador.atualizarUmCadastro)
router.get("/adminpageCadastrosAltera", admnistrador.encontreUmCadastro);
router.put("/adminpageCadastrosAltera", admnistrador.atualizarUmCadastro);
// ADMINISTRADOR - Pedidos
router.get("/adminpagePedidos", admnistrador.todosOsPedidos);
router.get(
  "/adminpageCadastros/:id/adminpagePedidos/:id",
  admnistrador.encontreUmPedido
);

// ADMINISTRADOR - Produtos
router.get("/adminpageProduto", admnistrador.todosOsProdutos);
router.get("/adminpageProduto/:id", admnistrador.encontreUmCadastro);
// router.put('/adminpageProduto/:id', admnistrador.atualizarUmProduto)
// router.delete('/adminpageProduto/:id', admnistrador.deletarUmProduto)

// ADMINISTRADOR - Fornecedores

// Categoria
router.get("/categorias", mainController.categoriesPage);
// router.get('/produtos', mainController.productsPage)

router.get("/produtos", produtoController.listarTodosOsProdutos);
router.get("/productdetails", produtoController.listarProduto);

// router.get('/carrinho', produtoController.carrinhoPage)
// router.get('/carrinho', produtoController.produtoCarrinho)
router.get("/carrinho", auth, produtoController.produtoCarrinho);
router.get("/logado", produtoController.usuarioNaoLogado);

// router.get('/productdetails', produtoController.productDetailsPage)

// router.get('/categorias', produtoController.categorias)

router.get("/resetpassword", mainController.resetPasswordPage);
router.get("/forma-de-pagamento", mainController.pagamentoPage);

//checkout
router.get("/checkout", mainController.checkoutPage);

router.get("/login", loginController.loginPage);
router.post("/login", loginController.login);
router.post("/logout", loginController.doLogout);

router.get("/404", mainController.page404);

router.get("/registration", registrationController.registrationPage);
router.post(
  "/registration",
  upload.single("avatar"),
  registrationController.cadastro
);
// router.post('/registration', upload.single('file'), registrationController.cadastro);
// router.post('/registration', validateRegister, registrationController.cadastro);

// FORNECEDORES
router.get("/fornecedor", admnistrador.encontreTodosOsFornecedores);
router.post("/fornecedor", fornecedorController.cadastro_fornecedor);

router.get(
  "/adressregistration",
  adressRegistrationController.adressRegistrationPage
);
router.post(
  "/adressregistration",
  adressRegistrationController.cadastro_endereco
);

router.get("/produtosestoque", produtosEstoqueController.productInventoryPage);
router.post(
  "/produtosestoque",
  produtosEstoqueController.cadastro_produtos_estoque
);
router.get("/listarProdutos", produtosEstoqueController.listarProdutos);
router.delete(
  "/deletarprodutos/:id",
  produtosEstoqueController.deletarProdutos
);
router.get("/deletarprodutos/:id", produtosEstoqueController.produtoDeletado);
// router.put('/alterarprodutos/:id',produtosEstoqueController.atualizarProdutos)
// router.get('/alterarprodutos/:id',produtosEstoqueController.atualizarProdutos)

// router.get('/cadastro', mainController.cadastroPage) /* GET cadastro page. */
// router.post('/cadastro', mainController.doRegister) /* POST cadastro page. */

/* GET carrinho page. */
// router.get('/carrinho', auth, mainController.carrinhoPage) /* GET carrinho page. */
// router.get('/carrinho/add/:id', mainController.addToCart) /* GET carrinho add. */

/* GET carrinho page. */
// router.get('/carrinho/add/:id', mainController.addToCart) /* GET carrinho add. */

// router.post('/login', mainController.doLogin) /* POST do login. */
// router.get('/logout', mainController.doLogout) /* POST do login. */

module.exports = router;

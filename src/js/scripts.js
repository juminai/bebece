import { handleScroll } from "./modules/header.js";
import newsletter from "./modules/newsletter.js";
import getCep from "./modules/cep.js";
import modalCep from "./modules/modalCep.js";
import fetchProducts from "./modules/createProducts.js";
import fetchPosts from "./modules/createPosts.js";
import menuProdutos from "./modules/menuProdutos.js";
import cart from "./modules/cart.js";
import toggleCart from "./modules/header.js";
import swipers from "./modules/swiper.js";

handleScroll()
newsletter()
getCep()
modalCep()
fetchProducts()
fetchPosts()
menuProdutos()
toggleCart()


setTimeout(function() {
    swipers()
}, 100)

import { handleScroll } from "./modules/header.js";
import newsletter from "./modules/newsletter.js";
import getCep from "./modules/cep.js";
import modalCep from "./modules/modalCep.js";
import fetchProducts from "./modules/createProducts.js";
import fetchPosts from "./modules/createPosts.js";
import menuProdutos from "./modules/menuProdutos.js";
import swipers from "./modules/swiper.js";

handleScroll()
newsletter()
getCep()
modalCep()
fetchProducts()
fetchPosts()
menuProdutos()
setTimeout(function() {
    swipers()
}, 100)

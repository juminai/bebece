import { handleScroll } from './modules/header.js';
import newsletter from './modules/newsletter.js';
import getCep from './modules/cep.js';
import modalCep from './modules/modalCep.js';
import fetchProducts from './modules/createProducts.js';
import fetchPosts from './modules/createPosts.js';
import menuProdutos from './modules/menuProdutos.js';
import { checkY } from './modules/header.js';
import { cart } from './modules/cart.js';
import { updateBagCount } from './modules/header.js';
import toggleCart from './modules/header.js';
import swipers from './modules/swiper.js';
import { setFavorite } from './modules/favorite.js';
import menuMobile from './modules/menuMobile.js';
import { togglePagination } from './modules/createPosts.js';

handleScroll();
checkY();
newsletter();
getCep();
modalCep();
fetchProducts();
fetchPosts();
menuProdutos();
toggleCart();
cart();
updateBagCount();
setFavorite();
menuMobile();
togglePagination();

setTimeout(function () {
    swipers();
}, 100);


window.onload = swipers;
window.onresize = swipers;

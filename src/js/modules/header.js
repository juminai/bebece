import getCart from './cart.js';
import { cart } from './cart.js';

function handleScroll() {
    window.addEventListener('scroll', () => {
        const menuProducts = document.querySelector('.menu-produtos');
        let menuOpen =
            window.getComputedStyle(menuProducts).display === 'flex'
                ? true
                : false;

        window.scrollY > 1 || menuOpen
            ? toggleColor('dark')
            : toggleColor('light');

        const menuLancamentos = document.querySelector('#menu-lancamentos');
        const lancamentos = document.querySelector('.lancamentos');

        const lancamentosPos = lancamentos.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const isVisible =
            lancamentosPos.top < windowHeight * 0.5 &&
            lancamentosPos.bottom > windowHeight * 0.5;

        if (isVisible) {
            menuLancamentos.classList.add('active');
        } else {
            menuLancamentos.classList.remove('active');
        }
    });
}

export function checkY() {
    const pos = document.querySelector('body').getBoundingClientRect().y;

    pos != 0 ? toggleColor('dark') : toggleColor('light');
}

function toggleColor(color) {
    const headerMenu = document.querySelector('.menu');
    const headerImg = document.querySelectorAll('header .options img');
    const headerText = document.querySelectorAll('header .text');

    if (color == 'dark') {
        headerMenu.classList.add('scrolled');
        headerImg.forEach((img) => {
            img.setAttribute(
                'src',
                `../../public/icons/${img.className}-dark.svg`,
            );
        });

        headerText.forEach((text) => {
            text.classList.add('dark');
        });
    } else {
        headerMenu.classList.remove('scrolled');

        headerImg.forEach((img) => {
            img.setAttribute('src', `../../public/icons/${img.className}.svg`);
        });

        headerText.forEach((text) => {
            text.classList.remove('dark');
        });
    }
}

export default function toggleCart() {
    const cartWindow = document.querySelector('.carrinho-background');
    const openCartBtn = document.querySelector('.header-carrinho');

    openCartBtn.addEventListener('click', () => {
        let isOpen = cartWindow.style.display != 'flex' ? false : true;

        if (isOpen) {
            cartWindow.style.display = 'none';
        } else {
            cart();
            cartWindow.style.display = 'flex';
        }
    });
}

export function updateBagCount() {
    const bagCount = document.getElementById('qtd-carrinho');
    bagCount.textContent = getCart().length;
}

export { handleScroll, toggleColor, toggleCart };

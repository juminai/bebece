import { toggleColor } from "./header.js"

export default function menuProdutos() {
    const openMenu = document.querySelector('.open-menu-produtos')
    const menuProducts = document.querySelector('.menu-produtos')
    const imagemProduto = document.querySelector('.imagem-produto')
    const options = document.querySelectorAll('.menu-produtos li')

    openMenu.addEventListener('click', () => {
        let curretDisplay = window.getComputedStyle(menuProducts).display

        if (curretDisplay == 'none') {
            menuProducts.style.display = 'flex'
            toggleColor('dark')
        } else {
            menuProducts.style.display = 'none'
            toggleColor('light')
        }
    })

    options.forEach((option) => {
        option.addEventListener('mouseover', () => {
            let palavra = removerAcentos(option.textContent).toLowerCase()
            imagemProduto.setAttribute('src', `/public/png/categorias/${palavra}.png`)
        })
    })
}

function removerAcentos(palavra) {
    return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
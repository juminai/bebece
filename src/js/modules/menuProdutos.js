import { toggleColor } from "./header.js"

export default function menuProdutos() {
    const openMenu = document.querySelector('#menu-produtos')
    const menuProducts = document.querySelector('.menu-produtos')
    const imagemProduto = document.querySelector('.imagem-produto')
    const options = document.querySelectorAll('.menu-produtos li')

    imagemProduto.setAttribute('src', '/public/png/categorias/sapatos.png')

    openMenu.addEventListener('click', () => {
        let menuOpen = window.getComputedStyle(menuProducts).display === 'flex' ? true : false

        if (!menuOpen) {
            menuProducts.style.display = 'flex'
            openMenu.classList.add('active')
            toggleColor('dark')
        } else {
            if (window.scrollY >= 1) {
                menuProducts.style.display = 'none'
            } else {
                toggleColor('light')
                menuProducts.style.display = 'none'
            }
            openMenu.classList.remove('active')
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
import addToCart from "./addToCart.js"

export default function openVitrine(name, image, price, id) {
    const vitrine = document.querySelector('.modal-vitrine-background')
    const vitrineImg = document.getElementById('vitrine-img')
    const vitrineName = document.getElementById('vitrine-name')
    const vitrineNumber = document.getElementById('vitrine-number')
    const tamanhos = document.querySelector('.tamanhos')
    const closeVitrine = document.querySelector('.vitrine-close')
    const addToCartBtn = document.querySelector('.add-carrinho')

    closeVitrine.addEventListener('click', () => {
        vitrine.style.display = 'none'
    })

    vitrine.style.display = 'flex'

    vitrineImg.setAttribute('src', image)
    vitrineName.textContent = name

    tamanhos.innerHTML = ''

    for (let i = 34; i <= 42; i++) {
        
        const tamanho = document.createElement('button')
        tamanho.classList.add(`tamanho`)
        tamanho.classList.add(`tamanho-${i}`)
        tamanho.textContent = i
        tamanhos.appendChild(tamanho)

        tamanho.addEventListener('click', () => {
            document.querySelectorAll('.tamanho').forEach((size) => {
                size.classList.remove('selected')
            })
            tamanho.classList.add('selected')
            vitrineNumber.innerHTML = `
                <p class="tamanho-texto">Tamanho: <span class="numero-texto" >${tamanho.textContent}</span></p>
            `
        })
    }

    document.querySelector('.tamanho-34').classList.add('selected')
    vitrineNumber.innerHTML = `
        <p class="tamanho-texto">Tamanho: <span class="numero-texto" >34</span></p>
    `

    addToCartBtn.addEventListener('click', () => {

        let selectedSize = document.querySelector('.modal-vitrine .selected').textContent

        const productData = {
            name,
            image,
            price,
            id,
            'size': selectedSize
        }

        addToCart(productData)
    })
}
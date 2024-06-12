export default function addToCart(product) {
    const pedidoResumo = document.querySelector('.pedido-resumo')
    const items = document.querySelector('.carrinho-items')

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    carrinho.push(product)
    localStorage.setItem('carrinho', JSON.stringify(carrinho))

    carrinho.forEach((item) => {
        // items.innerHTML = ``
        items.innerHTML += `
            <div class="item">
                <div class="item-main">
                    <img src="${item.image}" alt="">

                    <div class="details">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-size">${item.size}</p>
                        <p class="item-price">${item.price.amount}</p>
                    </div>
                </div>
                <div class="item-qtd">
                    <div class="increment">
                        <button class="dec">-</button>
                        <p class="qtd"></p>
                        <button class="inc">+</button>
                    </div>
                </div>
                <button class="remove-item">Remover</button>
            </div>
        `
    })

    pedidoResumo.innerHTML = `
    <div class="price">
        <p>Subtotal</p>
        <p class="subtotal"></p>
        <p>Descontos</p>
        <p class="descontos"></p>
        <p>Total</p>
        <p class="total"></p>
    </div>
    `
}
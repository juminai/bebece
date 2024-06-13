export default function cart() {
    const cartWindow = document.querySelector('.carrinho-background');
    const container = document.querySelector('.carrinho-container');
    const items = document.querySelector('.carrinho-items');
    const closeCart = document.querySelector('.close-carrinho');
    const subtotalP = document.getElementById('subtotal');
    const descontosP = document.getElementById('descontos');
    const totalP = document.getElementById('total');
    const carrinhoFooter = document.querySelector('.carrinho-footer')

    closeCart.addEventListener('click', (event) => {
        cartWindow.style.display = 'none';
    });

    cartWindow.addEventListener('click', (event) => {
        if (event.target === this) {
            event.stopPropagation();
        }
    });

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    let subtotal = 0;
    let descontos = 0;

    items.innerHTML = ''

    if (carrinho.length == 0) {
        items.innerHTML = `
        <p>Seu carrinho está vazio =(</p>`;
        carrinhoFooter.style.display = 'none'
        container.classList.add('empty')
    } else {
        carrinho.forEach((item) => {
            items.innerHTML += `    
            <div class="item">
                <div class="item-main">
                    <img src="${item.image}" alt="">

                    <div class="details">
                        <p class="item-name">${item.name}</p>
                        <p class="item-size">Tamanho: ${item.size}</p>
                        <p class="item-price">R$${item.price.amount}</p>
                    </div>
                </div>
                <div class="item-qtd">
                    <div class="increment">
                        <button class="dec">-</button>
                        <p class="qtd">${item.qtd}</p>
                        <button class="inc">+</button>
                    </div>

                    <button class="remove-item">Remover</button>
                </div>
            </div>
        `;

            subtotal += item.price.amount;
            descontos += item.price.isDiscount;
        });

        let totalDescontos = subtotal - descontos;

        subtotalP.textContent = `R$ ${subtotal.toFixed(2)}`;
        descontosP.textContent = `- R$ ${totalDescontos.toFixed(2)}`;
        totalP.textContent = `R$ ${(subtotal - totalDescontos).toFixed(2)}`;
    }
}

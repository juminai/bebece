import { updateBagCount } from './header.js';

export default function getCart() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

export function setCart(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

export function cart() {
    const cartWindow = document.querySelector('.carrinho-background');
    const container = document.querySelector('.carrinho-container');
    const items = document.querySelector('.carrinho-items');
    const closeCart = document.querySelector('.close-carrinho');
    const subtotalP = document.getElementById('subtotal');
    const descontosP = document.getElementById('descontos');
    const totalP = document.getElementById('total');
    const carrinhoFooter = document.querySelector('.carrinho-footer');

    closeCart.addEventListener('click', () => {
        updateBagCount();
        cartWindow.style.display = 'none';
    });

    cartWindow.addEventListener('click', (event) => {
        if (event.target === this) {
            event.stopPropagation();
        }
    });

    let carrinho = getCart();

    renderCart();

    function renderCart() {
        let subtotal = 0;
        let descontos = 0;

        items.innerHTML = '';

        if (carrinho.length == 0) {
            items.innerHTML = `
            <p>Seu carrinho está vazio =(</p>`;
            carrinhoFooter.style.display = 'none';
            container.classList.add('empty');
        } else {
            carrinhoFooter.style.display = 'flex';
            container.classList.remove('empty');
            carrinho.forEach((item) => {
                createItem(
                    item.name,
                    item.image,
                    item.id,
                    item.price,
                    item.qtd,
                    item.size,
                    items,
                );

                const currentItem = document.querySelector(`.item-${item.id}`);
                const removeItemBtn = currentItem.querySelector(
                    `[data-item-size="${item.size}"][data-item-qtd="${item.qtd}"] .remove-item`,
                );

                let itemIndex = carrinho.findIndex(
                    (obj) => obj.id === item.id && obj.size === item.size,
                );

                removeItemBtn.addEventListener('click', () => {
                    carrinho.splice(itemIndex, 1);
                    setCart(carrinho);
                    renderCart();
                });

                const incrementBtn = currentItem.querySelector(
                    `[data-item-size="${item.size}"][data-item-qtd="${item.qtd}"] .inc`,
                );
                const decreaseBtn = currentItem.querySelector(
                    `[data-item-size="${item.size}"][data-item-qtd="${item.qtd}"] .dec`,
                );

                let currentQtd = carrinho[itemIndex].qtd;

                if (currentQtd == 1) {
                    decreaseBtn.classList.add('limite');
                }

                decreaseBtn.addEventListener('click', () => {
                    if (currentQtd > 1) {
                        carrinho[itemIndex].qtd -= 1;
                        setCart(carrinho);
                        renderCart();
                    }
                });

                incrementBtn.addEventListener('click', () => {
                    carrinho[itemIndex].qtd += 1;
                    incrementBtn.classList.remove('limite');
                    setCart(carrinho);
                    renderCart();
                });

                subtotal += item.price.amount * item.qtd;

                if (item.price.isDiscount != null) {
                    descontos +=
                        (item.price.amount - item.price.isDiscount) * item.qtd;
                }
            });

            let total = subtotal - descontos;

            subtotalP.textContent = `R$ ${subtotal.toFixed(2)}`;
            descontosP.textContent = `R$ ${descontos.toFixed(2)}`;
            totalP.textContent = `R$ ${total.toFixed(2)}`;
        }
    }
}

function createItem(name, image, id, price, qtd, size, container) {
    const item = document.createElement('div');
    item.classList.add('item', `item-${id}`);
    item.setAttribute('data-item-size', size);
    item.setAttribute('data-item-qtd', qtd);

    item.innerHTML = `    
        <div class="item-main">
            <img src="${image}" alt="">

            <div class="details">
                <p class="item-name">${name}</p>
                <p class="item-size">Tamanho: ${size}</p>
                <p class="item-price">R$${price.amount}</p>
            </div>
        </div>
        <div class="item-qtd">
            <div class="increment">
                <button class="dec">-</button>
                <p class="qtd">${qtd}</p>
                <button class="inc">+</button>
            </div>

            <button class="remove-item">Remover</button>
        </div>
    `;

    container.appendChild(item);
}

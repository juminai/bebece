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

    closeCart.addEventListener('click', handleCartClose);
    cartWindow.addEventListener('click', handleCartWindowClick);

    let carrinho = getCart();
    renderCart();

    function handleCartClose() {
        updateBagCount();
        cartWindow.style.display = 'none';
    }

    function handleCartWindowClick(event) {
        if (event.target === cartWindow) {
            event.stopPropagation();
        }
    }

    function renderCart() {
        let subtotal = 0;
        let descontos = 0;

        items.innerHTML = '';

        if (carrinho.length === 0) {
            items.innerHTML = `
                <div class="carrinho-vazio">
                    <img class="cart"
                    src="../../public/icons/cart-dark.svg"
                    alt="carrinho"/>
                    <p">Seu carrinho esta vazio =(</p>
                </div>
            `
            carrinhoFooter.style.display = 'none';
        } else {
            carrinhoFooter.style.display = 'flex';
            carrinho.forEach((item, index) => {
                createItem(item, index);
                subtotal += item.price.amount * item.qtd;

                if (item.price.isDiscount != null) {
                    descontos +=
                        (item.price.amount - item.price.isDiscount) * item.qtd;
                }
            });

            let total = subtotal - descontos;
            updatePriceDisplay(subtotal, descontos, total);
        }
    }

    function createItem(item, index) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item', `item-${item.id}`);
        itemElement.setAttribute('data-item-size', item.size);
        itemElement.setAttribute('data-item-qtd', item.qtd);

        itemElement.innerHTML = `
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
        `;

        items.appendChild(itemElement);

        const removeItemBtn = itemElement.querySelector('.remove-item');
        const incrementBtn = itemElement.querySelector('.inc');
        const decreaseBtn = itemElement.querySelector('.dec');

        removeItemBtn.addEventListener('click', () => handleRemoveItem(index));
        incrementBtn.addEventListener('click', () =>
            handleIncrementItem(index)
        );
        decreaseBtn.addEventListener('click', () =>
            handleDecreaseItem(index, decreaseBtn)
        );
    }

    function handleRemoveItem(index) {
        carrinho.splice(index, 1);
        setCart(carrinho);
        renderCart();
    }

    function handleIncrementItem(index) {
        carrinho[index].qtd += 1;
        setCart(carrinho);
        renderCart();
    }

    function handleDecreaseItem(index, decreaseBtn) {
        if (carrinho[index].qtd > 1) {
            carrinho[index].qtd -= 1;
            setCart(carrinho);
            renderCart();
        } else {
            decreaseBtn.classList.add('limite');
        }
    }

    function updatePriceDisplay(subtotal, descontos, total) {
        subtotalP.textContent = `R$ ${subtotal.toFixed(2)}`;
        descontosP.textContent = `R$ ${descontos.toFixed(2)}`;
        totalP.textContent = `R$ ${total.toFixed(2)}`;
    }
}

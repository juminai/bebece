import { updateBagCount } from './header.js';

export default function getCart() {
    return JSON.parse(localStorage.getItem('carrinho')) || [];
}

export function setCart(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

export function cart() {
    const cartWindow = document.querySelector('.carrinho-background');
    const items = document.querySelector('.carrinho-items');
    const closeCart = document.querySelector('.close-carrinho');
    const subtotalP = document.getElementById('subtotal');
    const descontosP = document.getElementById('descontos');
    const totalP = document.getElementById('total');
    const carrinhoFooter = document.querySelector('.carrinho-footer');
    const continuarComprando = document.querySelector('.continuar');

    closeCart.addEventListener('click', fecharCarrinho);
    continuarComprando.addEventListener('click', fecharCarrinho);
    cartWindow.addEventListener('click', antiClick);

    let carrinho = getCart();
    renderCart();

    function fecharCarrinho() {
        updateBagCount();
        cartWindow.style.display = 'none';
    }

    function antiClick(event) {
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
            `;
            
            carrinhoFooter.style.display = 'none';
        } else {
            carrinhoFooter.style.display = 'flex';
            carrinho.forEach((item, i) => {
                createItem(item, i);
                subtotal += item.price.amount * item.qtd;

                if (item.price.isDiscount != null) {
                    descontos +=
                        (item.price.amount - item.price.isDiscount) * item.qtd;
                }
            });

            let total = subtotal - descontos;
            atualizarPreco(subtotal, descontos, total);
        }
    }

    function createItem(item, i) {
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

        removeItemBtn.addEventListener('click', () => removerItem(i));

        incrementBtn.addEventListener('click', () => incrementarItem(i));

        decreaseBtn.addEventListener('click', () =>
            decreaseItem(i, decreaseBtn)
        );
    }

    function removerItem(i) {
        carrinho.splice(i, 1);
        setCart(carrinho);
        renderCart();
    }

    function incrementarItem(i) {
        carrinho[i].qtd += 1;
        setCart(carrinho);
        renderCart();
    }

    function decreaseItem(i, decreaseBtn) {
        if (carrinho[i].qtd > 1) {
            carrinho[i].qtd -= 1;
            setCart(carrinho);
            renderCart();
        } else {
            decreaseBtn.classList.add('limite');
        }
    }

    function atualizarPreco(subtotal, descontos, total) {
        subtotalP.textContent = `R$ ${subtotal.toFixed(1)}`;
        descontosP.textContent = `R$ ${descontos.toFixed(1)}`;
        totalP.textContent = `R$ ${total.toFixed(1)}`;
    }
}

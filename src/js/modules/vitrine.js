import getCart from './cart.js';
import { setCart } from './cart.js';
import { updateBagCount } from './header.js';

export default function openVitrine(name, image, price, id) {
    const vitrine = document.querySelector('.modal-vitrine-background');
    const vitrineImg = document.getElementById('vitrine-img');
    const vitrineName = document.getElementById('vitrine-name');
    const vitrineNumber = document.getElementById('vitrine-number');
    const tamanhos = document.querySelector('.tamanhos');
    const closeVitrine = document.querySelector('.vitrine-close');
    const addToCartBtn = document.querySelector('.add-carrinho');
    
    tamanhos.innerHTML = '';
    vitrine.style.display = 'flex';
    vitrineImg.src = image;
    vitrineName.textContent = name;

    // criar buttons de tamanho
    for (let i = 34; i <= 42; i++) {
        const tamanho = document.createElement('button');
        tamanho.classList.add(`tamanho`);
        tamanho.classList.add(`tamanho-${i}`);
        tamanho.textContent = i;
        tamanhos.appendChild(tamanho);

        tamanho.addEventListener('click', () => {
            document.querySelectorAll('.tamanho').forEach((size) => {
                size.classList.remove('selected');
            });
            tamanho.classList.add('selected');
            vitrineNumber.innerHTML = `
                <p class="tamanho-texto">
                    Tamanho: 
                    <span class="numero-texto">
                        ${tamanho.textContent}
                    </span>
                </p>
            `;
        });
    }

    // tamanho 34 pre-selecionado
    document.querySelector('.tamanho-34').classList.add('selected');
    vitrineNumber.innerHTML = `
        <p class="tamanho-texto">Tamanho: <span class="numero-texto" >34</span></p>
    `;

    // tamanho 42 disabled por default
    document.querySelector('.tamanho-42').disabled = true;

    function addToCart() {
        let selectedSize = document.querySelector('.selected').textContent;

        const carrinho = getCart();

        const productData = {
            id,
            name,
            image,
            price,
            size: selectedSize,
            qtd: 1,
        };

        let jaExiste = carrinho.findIndex(
            (obj) => obj.id === id && obj.size === selectedSize
        );

        if (jaExiste !== -1) {
            carrinho[jaExiste].qtd += 1;
        } else {
            carrinho.push(productData);
        }

        setCart(carrinho);
        updateBagCount();
        vitrine.style.display = 'none';
        addToCartBtn.removeEventListener('click', addToCart);
    }

    addToCartBtn.addEventListener('click', addToCart);
    closeVitrine.addEventListener('click', () => {
        vitrine.style.display = 'none';
        addToCartBtn.removeEventListener('click', addToCart);
    });
}

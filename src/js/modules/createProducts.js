import getProducts from './getProducts.js';
import openVitrine from './vitrine.js';

const lancamentosItems = document.querySelector(
    '.lancamentos-items .swiper-wrapper',
);

export default async function fetchProducts() {
    const products = await getProducts();

    products.forEach((product) => {
        createProduct(product.name, product.image, product.price, product.id);
    });
}

function createProduct(name, image, price, id) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML += `
        <div class="lancamentos-item item-${id}">
            <div class="lancamentos-img">
                <img src="${image}" alt="">
                <button
                    class="add-to-fav"
                    type="button">
                    <img src="../../public/icons/fav.svg" alt="favorite-button">
                </button>

                <button
                    class="add-vitrine"
                    type="button">
                    <img src="../../public/icons/add-vitrine.svg" alt="vitrine-button">
                </button>

                ${price.isDiscount != null ? `<p class="off">15% OFF</p>` : ''}
            </div>

            <div class="item-info">
                <p class="desc">${name}</p>
                <div class="item-preco">
                    <p class=${
                        price.isDiscount != null ? 'preco-anterior' : 'preco'
                    }>R$ ${price.amount}</p>
                    ${
                        price.isDiscount != null
                            ? `<p class="preco">R$ ${price.isDiscount}</p>`
                            : ''
                    }
                </div>
            </div>
        </div>
    `;

    lancamentosItems.appendChild(slide);
    const vitrineBtn = document.querySelector(`.item-${id} .add-vitrine`);

    vitrineBtn.addEventListener('click', () => {
        openVitrine(name, image, price, id);
    });
}

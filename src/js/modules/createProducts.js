import getProducts from './getProducts.js';
import openVitrine from './vitrine.js';
import addFavorite from './favorite.js';

const lancamentosItems = document.querySelector(
    '.lancamentos-items .swiper-wrapper'
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
    let temDesconto = price.isDiscount != null;
    let percDesconto = 0

    if (temDesconto) {
        let desconto = price.amount - price.isDiscount
        percDesconto = ((desconto / price.amount) * 100).toFixed(1);
    }

    slide.innerHTML += `
        <div class="lancamentos-item item-${id}">
            <div class="lancamentos-img">
                <img class="item-img" src="${image}" alt="">
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
                ${temDesconto ? `<p class="off">${percDesconto}% OFF</p>` : ''}
            </div>

            <div class="item-info">
                <p class="desc">${name}</p>
                <div class="item-preco">
                    <p class=${temDesconto ? 'preco-anterior' : 'preco'}>R$ ${price.amount}</p>
                    ${
                        temDesconto
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

    const favBtn = document.querySelector(`.item-${id} .add-to-fav`);

    favBtn.addEventListener('click', () => {
        addFavorite(id, favBtn);
    });
}

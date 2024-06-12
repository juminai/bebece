import getProducts from "./getProducts.js";
import openVitrine from "./openVitrine.js";

const lancamentosItems = document.querySelector('.lancamentos-items .swiper-wrapper')

export default async function fetchProducts() {
    const products = await getProducts();

    products.forEach((product) => {
        createProduct(
            product.name,
            product.image,
            product.price,
            product.id
        )
    })
}

function createProduct(name, image, price, id) {
    lancamentosItems.innerHTML += `
        <div class="swiper-slide">
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
                        ${price.isDiscount != null ? `<p class="preco-anterior">R$ ${price.isDiscount}</p>` : ''}
                        <p class="preco">R$ ${price.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    // por alguma razao, nao estou conseguindo selecionar o botao diretamente :x
    lancamentosItems.addEventListener('click', function(event) {
        if (event.target.closest(`.item-${id} .add-vitrine`)) {
            openVitrine(name, image, price, id)
        }
    });
}
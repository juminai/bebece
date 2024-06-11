import getProducts from "./getProducts.js";

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
                    <button class="add-to-fav"><img src="../../public/icons/fav.svg" alt=""></button>
                    <button class="add-to-cart"><img src="../../public/icons/add-vitrine.svg" alt=""></button>
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
}
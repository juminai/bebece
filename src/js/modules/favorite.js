import getProducts from './getProducts.js';

export default async function addFavorite(id, btn) {
    const btnImg = btn.querySelector('img');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favorited = favorites.indexOf(id)

    if (favorited === -1) {
        favorites.push(id);
        btnImg.src = '../../public/icons/favorited.svg';
    } else {
        favorites.splice(favorited, 1);
        btnImg.src = '../../public/icons/fav.svg';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export async function setFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const products = await getProducts();

    products.forEach((product) => {
        const favBtn = document.querySelector(`.item-${product.id} .add-to-fav`)
        const btnImg = favBtn.querySelector('img');

        if (favorites.includes(product.id)) {
            btnImg.src = '../../public/icons/favorited.svg';
        }
    });
}

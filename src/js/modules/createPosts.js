import getPosts from './getPosts.js';

const blogPosts = document.querySelector('.blog-posts .swiper-wrapper');

export default async function fetchPosts() {
    const posts = await getPosts();

    posts.forEach((post) => {
        createPost(post.title, post.image, post.desc, post.id);
    });
}

export function togglePagination() {
    const paginationMobile = document.querySelector(
        '.blog-posts .swiper-pagination'
    );

    window.innerWidth <= 430
        ? (paginationMobile.style.display = 'block')
        : (paginationMobile.style.display = 'none');
}

function createPost(title, image, desc, id) {
    blogPosts.innerHTML += `
        <div class="swiper-slide">
            <div class="post ${id}">
                <img src="${image}" alt="">

                <div class="info">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <a href="">Saiba mais!</a>
                </div>
            </div>
        </div>
    `;
}

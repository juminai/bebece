const swiperPrincipal = new Swiper('#swiper-principal', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '#pagination-principal',
    },
});

const swiperBlog = new Swiper('#swiper-blog', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
        el: '#pagination-blog',
    },
});

const swiperLancamentos = new Swiper('#swiper-lancamentos', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
        el: '#pagination-lancamentos',
    },
});
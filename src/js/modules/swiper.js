export default function swipers() {
    const swiperPrincipal = new Swiper('#swiper-principal', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '#pagination-principal',
            clickable: true,
        },
    });

    const createCustomPagination = (
        swiperInstance,
        paginationContainer,
        perView,
    ) => {
        paginationContainer.innerHTML = '';
        for (let i = 0; i < swiperInstance.slides.length - (perView - 1); i++) {
            const bullet = document.createElement('div');

            bullet.classList.add('bullet');
            bullet.addEventListener('click', () => swiperInstance.slideTo(i));

            paginationContainer.appendChild(bullet);
        }
    };

    const updateCustomPagination = (swiperInstance, paginationContainer) => {
        const bullets = paginationContainer.querySelectorAll('.bullet');

        bullets.forEach((bullet, index) => {
            if (index === swiperInstance.realIndex) {
                bullet.classList.add('bullet-active');
            } else {
                bullet.classList.remove('bullet-active');
            }
        });
    };

    const swiperLancamentos = new Swiper('#swiper-lancamentos', {
        direction: 'horizontal',
        loop: false,
        on: {
            init: function () {
                createCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-lancamentos'),
                    5,
                );
                updateCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-lancamentos'),
                );
            },
            slideChange: function () {
                updateCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-lancamentos'),
                );
            },
            update: function () {
                createCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-lancamentos'),
                    5,
                );
            },
        },
        navigation: {
            nextEl: '#swiper-lancamentos-next',
            prevEl: '#swiper-lancamentos-prev',
        },
        slidesPerView: 5,
        spaceBetween: 15,
        autoplay: {
            delay: 5000,
        },
    });

    const swiperBlog = new Swiper('#swiper-blog', {
        direction: 'horizontal',
        loop: false,
        on: {
            init: function () {
                createCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-blog'),
                    3,
                );
                updateCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-blog'),
                );
            },
            slideChange: function () {
                updateCustomPagination(
                    this,
                    document.querySelector('.custom-pagination-blog'),
                );
            },
        },
        navigation: {
            nextEl: '#swiper-blog-next',
            prevEl: '#swiper-blog-prev',
        },
        slidesPerView: 3,
        spaceBetween: 15,
        autoplay: {
            delay: 5000,
        },
    });
}

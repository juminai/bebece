export default function swipers() {
    let param = {
        blog: 3,
        lancamentos: 5,
        categorias: 4,
    };

    if (window.innerWidth <= 430) {
        param = {
            blog: 1,
            lancamentos: 1.7,
            categorias: 2.5,
        };
    }

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
        on: {
            init: function () {
                changeImgSrc();
            },
        },
    });

    const swiperCategorias = new Swiper('#swiper-categorias', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: param.categorias,
        spaceBetween: 15,
    });

    function changeImgSrc() {
        const banner1 = document.querySelector('.banner-1');
        const banner2 = document.querySelector('.banner-2');

        if (window.innerWidth <= 430) {
            banner1.src = '../../public/png/principal/banner-mobile-1.png';
            banner2.src = '../../public/png/principal/banner-mobile-2.png';

            setTimeout(function () {
                swiperPrincipal.appendSlide(`
                <div class="swiper-slide">
                    <img
                        class="banner-3"
                        src="../../public/png/principal/banner-mobile-3.png"
                        alt=""
                    />
                </div>
            `);
            }, 100);
        }
    }

    const createCustomPagination = (
        swiperInstance,
        paginationContainer,
        perView
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

    const paginationLancamentos = document.querySelector(
        '.custom-pagination-lancamentos'
    );

    const swiperLancamentos = new Swiper('#swiper-lancamentos', {
        direction: 'horizontal',
        loop: false,
        on: {
            init: function () {
                createCustomPagination(
                    this,
                    paginationLancamentos,
                    param.lancamentos
                );
                updateCustomPagination(this, paginationLancamentos);
            },
            slideChange: function () {
                updateCustomPagination(this, paginationLancamentos);
            },
            update: function () {
                createCustomPagination(
                    this,
                    paginationLancamentos,
                    param.lancamentos
                );
            },
        },
        navigation: {
            nextEl: '#swiper-lancamentos-next',
            prevEl: '#swiper-lancamentos-prev',
        },
        slidesPerView: param.lancamentos,
        spaceBetween: 15,
    });

    const paginationBlog = document.querySelector('.custom-pagination-blog');

    const swiperBlog = new Swiper('#swiper-blog', {
        direction: 'horizontal',
        loop: false,
        on: {
            init: function () {
                createCustomPagination(this, paginationBlog, param.blog);
                updateCustomPagination(this, paginationBlog);
            },
            slideChange: function () {
                updateCustomPagination(this, paginationBlog);
            },
            update: function () {
                createCustomPagination(this, paginationBlog, param.blog);
            },
        },
        navigation: {
            nextEl: '#swiper-blog-next',
            prevEl: '#swiper-blog-prev',
        },
        pagination: {
            el: '#swiper-blog .swiper-pagination',
        },
        slidesPerView: param.blog,
        spaceBetween: 15,
    });
}

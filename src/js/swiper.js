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

const headerMenu = document.querySelector('.menu')
const headerImg = document.querySelectorAll('header img')
const headerText = document.querySelectorAll('header .text')

window.addEventListener('scroll', () => {

    if (window.scrollY > 1) {
        headerMenu.classList.add('scrolled')
        headerImg.forEach((img) => {
            img.setAttribute('src', `../../public/icons/${img.className}-dark.svg`)
        })

        headerText.forEach(text => {
            text.classList.add('dark')
        })
    } else {
        headerMenu.classList.remove('scrolled')

        headerImg.forEach((img) => {
            img.setAttribute('src', `../../public/icons/${img.className}.svg`)
        })

        headerText.forEach(text => {
            text.classList.remove('dark')
        })
    }
})
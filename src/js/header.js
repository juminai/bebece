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
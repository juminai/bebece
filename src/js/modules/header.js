function handleScroll() {
    window.addEventListener('scroll', () => {
        window.scrollY > 1 ? toggleColor('dark') : toggleColor('light')
    })
}

function toggleColor(color) {
    const headerMenu = document.querySelector('.menu')
    const headerImg = document.querySelectorAll('header img')
    const headerText = document.querySelectorAll('header .text')

    if (color == 'dark') {
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
}

export { handleScroll, toggleColor }
function handleScroll() {
    window.addEventListener('scroll', () => {
        const menuProducts = document.querySelector('.menu-produtos')
        let menuOpen = window.getComputedStyle(menuProducts).display === 'flex' ? true : false

        window.scrollY > 1 || menuOpen ? toggleColor('dark') : toggleColor('light')

        const menuLancamentos = document.querySelector('#menu-lancamentos')
        const lancamentos = document.querySelector('.lancamentos')

        const lancamentosPos = lancamentos.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const isVisible = lancamentosPos.top < windowHeight * 0.5 && lancamentosPos.bottom > windowHeight * 0.5;

        if (isVisible) {
            menuLancamentos.classList.add('active')
        } else {
            menuLancamentos.classList.remove('active')
        }
    })
}

function toggleColor(color) {
    const headerMenu = document.querySelector('.menu')
    const headerImg = document.querySelectorAll('header .options img')
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
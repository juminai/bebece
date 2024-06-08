const btn = document.querySelector('.newsletter button')
const newsletter = document.querySelector('.newsletter')

btn.addEventListener('click', () => {
    newsletter.classList.add('clicado')
    newsletter.innerHTML = `
        <p>Utilize o cupom abaixo e garanta seu desconto!</p>
        <p>BEMVINDA</p>
        <button class="button-clicado" type="button">Copiar</button>
    `

    const btnClicado = document.querySelector('.button-clicado')
    btnClicado.addEventListener('click', () => {
        btnClicado.textContent = 'Copiado'
    })
})
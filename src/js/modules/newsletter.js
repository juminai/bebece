export default function newsletter() {
    const btn = document.querySelector('.newsletter button');
    const newsletter = document.querySelector('.newsletter');
    const mensagemErro = document.querySelector('.mensagem-erro');
    const emailInput = document.querySelector('.newsletter input');

    btn.addEventListener('click', () => {
        if (emailInput.checkValidity()) {
            newsletter.classList.add('clicado');
            newsletter.innerHTML = `
                <p>Utilize o cupom abaixo e garanta seu desconto!</p>
                <p>BEMVINDA</p>
                <button class="button-clicado" type="button" value="BEMVINDA">Copiar</button>
            `;

            const btnClicado = document.querySelector('.button-clicado');
            btnClicado.addEventListener('click', () => {
                btnClicado.textContent = 'Copiado';

                btnClicado.select();
                btnClicado.setSelectionRange(0, 99999);

                navigator.clipboard.writeText(btnClicado.value);
            });
        } else {
            mensagemErro.textContent = 'Insira um e-mail valido';
        }
    });
}

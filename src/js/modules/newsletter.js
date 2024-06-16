export default function newsletter() {
    const btn = document.querySelector('.newsletter button');
    const newsletter = document.querySelector('.newsletter');
    const mensagemErro = document.querySelector('.newsletter .mensagem-erro');
    const emailInput = document.querySelector('.newsletter input');

    const cupom = 'BEMVINDA'

    btn.addEventListener('click', () => {
        if (emailInput.checkValidity()) {
            newsletter.classList.add('clicado');
            newsletter.innerHTML = `
                <p>Utilize o cupom abaixo e garanta seu desconto!</p>
                <div class="cupom">
                    <p>${cupom}</p>
                    <button class="button-clicado" type="button" value="BEMVINDA">Copiar</button>
                </div>
            `;

            const btnClicado = document.querySelector('.button-clicado');
            btnClicado.addEventListener('click', () => {
                btnClicado.textContent = 'Copiado';

                writeClipboardText(cupom)
            });
        } else {
            mensagemErro.textContent = 'Insira um e-mail valido';
        }
    });

    async function writeClipboardText(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error(error.message);
        }
    }
}

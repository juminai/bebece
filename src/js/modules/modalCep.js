export default function modalCep() {
    const alterarLocalidadeHeader = document.querySelector(
        '.alterar-localidade',
    );
    const modalBtns = document.querySelectorAll('.modal-cep button');
    const modalBackground = document.querySelector('.modal-cep-background');

    alterarLocalidadeHeader.addEventListener('click', () => {
        modalBackground.style.display = 'flex';
    });

    modalBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalBackground.style.display = 'none';
        });
    });

    modalBackground.addEventListener('click', function (event) {
        if (event.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });
}

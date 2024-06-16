export default function modalCep() {
    const alterarLocalidadeHeader = document.querySelector(
        '.alterar-localidade'
    );
    const saveBtn = document.querySelector('.modal-cep .save-cep');
    const closeBtn = document.querySelector('.modal-cep .close-button-cep');
    const modalBackground = document.querySelector('.modal-cep-background');

    alterarLocalidadeHeader.addEventListener('click', () => {
        modalBackground.style.display = 'flex';
    });

    saveBtn.addEventListener('click', () => {
        modalBackground.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        modalBackground.style.display = 'none';
    });

    modalBackground.addEventListener('click', function (event) {
        if (event.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });
    
    const estadoForm = document.querySelector('.estado input');
    const dropdown = document.querySelector('.estados-dropdown')
    const listaEstados = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
    ];

    listaEstados.forEach(estado => {
        const itemDropdown = document.createElement('li')
        itemDropdown.textContent = estado
        itemDropdown.addEventListener('click', () => {
            estadoForm.value = itemDropdown.textContent
        })
        dropdown.appendChild(itemDropdown)
    })

}

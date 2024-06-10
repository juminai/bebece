const cepForm = document.querySelector('.cep-input');
const cidadeForm = document.querySelector('.cidade input');
const estadoForm = document.querySelector('.estado input');
const localidadeHeader = document.querySelector('.localidade')
const alterarLocalidadeHeader = document.querySelector('.alterar-localidade')
const modalBtns = document.querySelectorAll('.modal-cep button')
const modal = document.querySelector('.modal-cep')
const modalBackground = document.querySelector('.modal-cep-background');

cepForm.addEventListener('focusout', getCep);
cepForm.addEventListener('keydown', () => {
    if (event.key == 'Enter') {
        getCep();
    }
});

alterarLocalidadeHeader.addEventListener('click', () => {
    modalBackground.style.display = 'flex'
})

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalBackground.style.display = 'none'
    })
})

async function getCep() {
    const cepInformado = cepForm.value;

    if (cepInformado.includes('-')) {
        cepInformado.replace('-', '')
    }

    const response = await fetch(
       `https://viacep.com.br/ws/${cepInformado}/json/`
    );
    const responseJson = await response.json();

    const cidade = responseJson.localidade;
    const estado = responseJson.uf;

    cidadeForm.value = cidade;
    estadoForm.value = estado;

    const dadosCep = {
        cep: cepInformado,
        cidade,
        estado,
    };

    localidadeHeader.textContent = cidade

    localStorage.setItem('dadosCep', JSON.stringify(dadosCep));
}

const dadosSalvos = JSON.parse(localStorage.getItem('dadosCep'))

if (!dadosSalvos) {
    modalBackground.style.display = 'flex'
} else {
    localidadeHeader.textContent = dadosSalvos.cidade
}

modalBackground.addEventListener('click', function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = 'none'
    }
});
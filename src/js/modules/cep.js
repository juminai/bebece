export default function getCep() {
    const cepForm = document.querySelector('.cep-input');
    const cidadeForm = document.querySelector('.cidade input');
    const estadoForm = document.querySelector('.estado input');
    const localidadeHeader = document.querySelector('.localidade')
    const modalBackground = document.querySelector('.modal-cep-background');

    cepForm.addEventListener('focusout', getCep);
    cepForm.addEventListener('keydown', () => {
        if (event.key == 'Enter') {
            getCep();
        }
    });

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
}
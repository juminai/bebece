// dupliquei os items para ativar o pagination

export default function getPosts() {
    return new Promise((res) => {
        res([
            {
                title: 'É amanhã',
                image: '/public/png/blog/image-1.png',
                desc: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
                id: 1,
            },
            {
                title: 'Novo logo, mesma essência',
                image: '/public/png/blog/image-2.png',
                desc: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
                id: 2,
            },
            {
                title: 'Descubra o glamour em cada passo.',
                image: '/public/png/blog/image-3.png',
                desc: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
                id: 3,
            },
            {
                title: 'É amanhã',
                image: '/public/png/blog/image-1.png',
                desc: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
                id: 4,
            },
            {
                title: 'Novo logo, mesma essência',
                image: '/public/png/blog/image-2.png',
                desc: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
                id: 5,
            },
            {
                title: 'Descubra o glamour em cada passo.',
                image: '/public/png/blog/image-3.png',
                desc: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
                id: 6,
            },
        ]);
    });
}

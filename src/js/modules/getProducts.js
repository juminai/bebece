export default function getProducts() {
    return new Promise((res) => {
        res([
            {
                name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                image: '/public/png/produto/scarpin-slig.png',
                price: { amount: 179.9, isDiscount: null },
                id: 1,
            },
            {
                name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                image: '/public/png/produto/coturno.png',
                price: { amount: 349.9, isDiscount: 315 },
                id: 2,
            },
            {
                name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                image: '/public/png/produto/scarpin-bebece.png',
                price: { amount: 159.90, isDiscount: null },
                id: 3,
            },
            {
                name: 'Sandália Braco Blanc Tratorada...',
                image: '/public/png/produto/sandalia-braco.png',
                price: { amount: 459.90, isDiscount: 319.89 },
                id: 4,
            },
            {
                name: 'Slingback Branco Tiras Bico Fino Couro',
                image: '/public/png/produto/slingback.png',
                price: { amount: 159.90, isDiscount: null },
                id: 5,
            },
        ]);
    });
}
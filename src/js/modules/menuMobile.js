export default function menuMobile() {
    const menuOptions = document.querySelector('.menu-expand');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu-mobile');
    const closeMenu = document.querySelector('.menu-mobile-close');

    closeMenu.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    menuIcon.addEventListener('click', () => {
        let isOpen = menu.style.display == 'block' ? true : false;

        isOpen ? (menu.style.display = 'none') : (menu.style.display = 'block');
    });

    menuOptions.addEventListener('click', () => {
        const optionIcon = menuOptions.querySelector('.option .expand-icon');
        const menuList = menuOptions.querySelector(
            `.${menuOptions.children[1].className}`
        );

        let isOpen = menuList.style.display == 'flex' ? true : false;

        if (isOpen) {
            menuList.style.display = 'none';
            optionIcon.src = '/public/icons/direita.svg';
        } else {
            menuList.style.display = 'flex';
            optionIcon.src = '/public/icons/baixo-dark.svg';
        }
    });
}

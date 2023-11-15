(() => {
    const menu = document.querySelector('.menu');

    if (!menu) {
        throw new Error('Menu element wasn\'t found!');
    }

    const menuItems = menu.querySelectorAll('.menu__item');
    const menuOpenButton = menu.querySelector('.menu__open-button');

    if (!menuItems || !menuOpenButton) {
        throw new Error('Menu structure isn\'t correct!');
    }

    menuOpenButton.addEventListener('click', () => {
        menu.classList.toggle('menu_opened');
    })

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (event) => {
            const currentTarget = event.currentTarget;

            menu.classList.toggle('menu_opened');
            menu.querySelector('.menu__item_active')?.classList.remove('menu__item_active');
            currentTarget.classList.add('menu__item_active');
        })
    })
})()

const buttonMenu = document.getElementById("nav__icon");
const navMenu = document.getElementById("nav__menu");
const navMenuItems = document.getElementsByClassName("menu__item");
const actionNavMenu = (element) => {
    element.addEventListener('click', () => {
        navMenu.classList.toggle("nav_menu--open");
    });
}

actionNavMenu(buttonMenu);

for (const navMenuItem of navMenuItems) {
    actionNavMenu(navMenuItem);
}


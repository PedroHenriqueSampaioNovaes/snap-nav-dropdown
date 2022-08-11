import outsideClick from './outsideclick.js';

export default function MenuMobile() {
  const nav = document.querySelector('.nav');
  const button = document.querySelector('[data-menu="hamburguer"]');
  const floatMenu = document.querySelector('[data-float-menu]');

  const events = ['click', 'touchstart'];
  const activeClass = 'active';

  const openMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault();

    nav.classList.add(activeClass);
    outsideClick(floatMenu, events, () => {
      nav.classList.remove(activeClass);
    });
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, openMenu);
  });
}

import outsideClick from './outsideclick.js';

export default function menuMobile() {
  const nav = document.querySelector('.nav');
  const button = document.querySelector('[data-menu="hamburguer"]');
  const floatMenu = document.querySelector('[data-float-menu]');

  const events = ['click', 'touchstart'];
  const activeClass = 'active';

  const setAccessibility = () => {
    const active = nav.classList.contains(activeClass);

    button.setAttribute('aria-expanded', active);
    if (active) {
      button.setAttribute('aria-label', 'Close Menu');
    } else {
      button.setAttribute('aria-label', 'Open Menu');
    }
  };

  const openMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault();

    nav.classList.add(activeClass);
    outsideClick(floatMenu, events, () => {
      nav.classList.remove(activeClass);
      setAccessibility();
    });

    setAccessibility();
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, openMenu);
  });
}

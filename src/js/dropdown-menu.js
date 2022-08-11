import debounce from './debounce.js';

export default function dropdownMenu() {
  const dropdownElements = document.querySelectorAll('[data-dropdown]');
  const events = ['click', 'touchstart'];
  const classActive = 'active';

  const toggleDropdown = (event) => {
    if (event.type === 'touchstart') event.preventDefault();
    const linkDropdown = event.currentTarget.querySelector(
      '[ data-link-dropdown]',
    );

    if (!event.currentTarget.classList.contains(classActive)) {
      event.currentTarget.classList.add(classActive);
    } else {
      if (event.target === linkDropdown) {
        event.currentTarget.classList.remove(classActive);
      }
    }
  };

  const addEventDropdown = () => {
    events.forEach((eventUser) => {
      dropdownElements.forEach((dropdown) => {
        dropdown.addEventListener(eventUser, toggleDropdown);
      });
    });
  };

  const removeEventDropdown = () => {
    events.forEach((eventUser) => {
      dropdownElements.forEach((dropdown) => {
        dropdown.removeEventListener(eventUser, toggleDropdown);
        dropdown.classList.remove(classActive);
      });
    });
  };

  let handleEventDropdown = () => {
    const small = window.matchMedia('(max-width: 899px)');

    if (small.matches) {
      addEventDropdown();
    } else {
      removeEventDropdown();
    }
  };
  handleEventDropdown = debounce(handleEventDropdown, 200);

  window.addEventListener('resize', handleEventDropdown);
  handleEventDropdown();
}

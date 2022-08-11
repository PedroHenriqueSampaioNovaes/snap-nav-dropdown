const outsideClick = (element, events, callback) => {
  const html = document.documentElement;
  const outside = 'data-outside';

  const handleOutsideClick = (event) => {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((eventUser) => {
        html.removeEventListener(eventUser, handleOutsideClick);
      });
      callback();
    }
  };

  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      events.forEach((eventUser) =>
        html.addEventListener(eventUser, handleOutsideClick),
      );
    });
    element.setAttribute(outside, '');
  }
};

export default outsideClick;

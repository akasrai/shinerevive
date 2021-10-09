function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const homeNav = select('#home-nav');
const serviceNav = select('#service-nav');
const contactNav = select('#contact-nav');

document.addEventListener(
  'scroll',
  function () {
    const home = select('#home');
    const service = select('#service');
    const contactUs = select('#contact-us');

    if (isInViewport(home)) {
      homeNav.addClass('active');
      serviceNav.removeClass('active');
      contactNav.removeClass('active');

      return;
    }

    if (isInViewport(service)) {
      serviceNav.addClass('active');
      homeNav.removeClass('active');
      contactNav.removeClass('active');

      return;
    }

    if (isInViewport(contactUs)) {
      contactNav.addClass('active');
      homeNav.removeClass('active');
      serviceNav.removeClass('active');

      return;
    }
  },
  {
    passive: true,
  }
);

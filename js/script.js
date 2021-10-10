function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  console.log(rect.top, el.id);

  return (
    rect.top >= -500 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const body = select('#body');
const home = select('#home');
const service = select('#service');
const gallery = select('#gallery');
const contactUs = select('#contact-us');

const homeNav = select('#home-nav');
const serviceNav = select('#service-nav');
const contactNav = select('#contact-nav');

document.addEventListener(
  'scroll',
  function () {
    if (isInViewport(home)) {
      body.addClass('dark-bg');
      body.removeClass('light-bg');

      homeNav.addClass('active');
      serviceNav.removeClass('active');
      contactNav.removeClass('active');

      return;
    }

    if (isInViewport(service)) {
      body.addClass('light-bg');
      body.removeClass('dark-bg');

      serviceNav.addClass('active');
      homeNav.removeClass('active');
      contactNav.removeClass('active');

      return;
    }

    if (isInViewport(gallery)) {
      body.addClass('dark-bg');
      body.removeClass('light-bg');

      return;
    }

    if (isInViewport(contactUs)) {
      body.addClass('light-bg');
      body.removeClass('dark-bg');

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

const body = select('#body');
const home = select('#home');
const service = select('#service');
const gallery = select('#gallery');
const contactUs = select('#contact-us');

const homeNav = select('#home-nav');
const serviceNav = select('#service-nav');
const contactNav = select('#contact-nav');

const THEME = { DARK: 'dark', LIGHT: 'light' };
const MENU = { HOME: 'home', SERVICE: 'service', CONTACT: 'contact' };

function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= -500 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function switchTheme(theme) {
  if (THEME.DARK === theme) {
    body.addClass('dark-bg');
    body.removeClass('light-bg');

    return;
  }

  body.addClass('light-bg');
  body.removeClass('dark-bg');
}

function switchMenu(menu) {
  homeNav.removeClass('active');
  serviceNav.removeClass('active');
  contactNav.removeClass('active');

  if (MENU.HOME === menu) {
    return homeNav.addClass('active');
  }

  if (MENU.SERVICE === menu) {
    return serviceNav.addClass('active');
  }

  if (MENU.CONTACT === menu) {
    return contactNav.addClass('active');
  }
}

document.addEventListener(
  'scroll',
  function () {
    if (isInViewport(home)) {
      switchMenu(MENU.HOME);
      switchTheme(THEME.DARK);

      return;
    }

    if (isInViewport(service)) {
      switchMenu(MENU.SERVICE);
      switchTheme(THEME.LIGHT);

      return;
    }

    if (isInViewport(gallery)) {
      switchTheme(THEME.DARK);

      return;
    }

    if (isInViewport(contactUs)) {
      switchMenu(MENU.CONTACT);
      switchTheme(THEME.LIGHT);

      return;
    }
  },
  {
    passive: true,
  }
);

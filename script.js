'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sec1 = document.querySelector('#section--1');
const buttonscrol = document.querySelector('.btn--scroll-to');

const nav_link = document.querySelectorAll('.nav__link');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
buttonscrol.addEventListener('click', function (e) {
  sec1.scrollIntoView({ behavior: 'smooth' });
});
nav_link.forEach(a => {
  a.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    const create = document.querySelector(id);
    create.scrollIntoView({ behavior: 'smooth' });
  });
});

const tabs = document.querySelectorAll('.operations__tab');
const tab_container = document.querySelector('.operations__tab-container');
const tab_content = document.querySelectorAll('.operations__content');
tab_container.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');
  if (!click) return;
  console.log(click);
  tabs.forEach(a => a.classList.remove('operations__tab--active'));
  click.classList.add('operations__tab--active');
  tab_content.forEach(a => a.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add('operations__content--active');
});

const navv = document.querySelector('.nav');
navv.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const linkk = e.target;
    const sibling = linkk.closest('.nav').querySelectorAll('.nav__link');
    const logo = linkk.closest('.nav').querySelector('img');
    sibling.forEach(a => {
      if (a !== linkk) {
        a.style.opacity = 0.5;
      }
      logo.style.opacity = 0.5;
    });
  }
});
navv.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const linkk = e.target;
    const sibling = linkk.closest('.nav').querySelectorAll('.nav__link');
    const logo = linkk.closest('.nav').querySelector('img');
    sibling.forEach(a => {
      if (a !== linkk) {
        a.style.opacity = 1;
      }
      logo.style.opacity = 1;
    });
  }
});
const header = document.querySelector('header');
const a = function (s) {
  const [b] = s;
  if (!b.isIntersecting) {
    navv.classList.add('sticky');
  } else {
    navv.classList.remove('sticky');
  }
};

const observe = new IntersectionObserver(a, {
  root: null,
  threshold: 0,
  rootMargin: '20px',
});
observe.observe(header);

const b = function (s) {
  const [b] = s;
  if (!b.isIntersecting) return;
  else {
    b.target.classList.remove('section--hidden');
    observe.unobserve(b.target);
  }
};

const newoberserver = new IntersectionObserver(b, {
  root: null,
  threshold: 0.15,
});

const section = document.querySelectorAll('.section');
section.forEach(function (e) {
  e.classList.add('section--hidden');
  newoberserver.observe(e);
});

const allimage = document.querySelectorAll('img[data-src]');

const c = function (s) {
  const [b] = s;
  if (!b.isIntersecting) return;

  b.target.src = b.target.dataset.src;
  b.target.addEventListener('load', () => {
    b.target.classList.remove('lazy-img');
  });
  observe.unobserve(b.target);
};
const picobserve = new IntersectionObserver(c, {
  root: null,
  threshold: 0.3,
});
allimage.forEach(function (e) {
  picobserve.observe(e);
});

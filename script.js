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

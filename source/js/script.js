const nav = document.querySelector('.nav');
const listNav = nav.querySelector('.nav__list');
const buttonNav = nav.querySelector('.nav__toggle');

const toggleNav = () => {
  buttonNav.classList.toggle('nav__toggle--close');
  listNav.classList.toggle('nav__list--show');
};

toggleNav();

buttonNav.addEventListener('click', () => {
  toggleNav();
});

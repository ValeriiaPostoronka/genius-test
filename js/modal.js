const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.getElementsByClassName('modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen[0].addEventListener('click', toggleModal);
modalBtnOpen[1].addEventListener('click', toggleModal);
modalBtnOpen[2].addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

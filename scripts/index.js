const openBtn = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__button');
const popupBtn = document.querySelector('.form__button');
const openLink = document.querySelector('.nav__item_type_modal');

function openPopup() {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function closePopup() {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
}

function closeByOverlay(evt) {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target);
    }
  }
  
  

openBtn.addEventListener('click', openPopup);
openLink.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
popupBtn.addEventListener('submit', handleFormSubmit);
document.addEventListener('mousedown', closeByOverlay);
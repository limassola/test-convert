const openBtn = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__button');
const popupBtn = document.querySelector('.form__button');
const openLink = document.querySelector('.nav__item_type_modal');
const tabLinks = document.querySelectorAll('.details__heading');
const tabContent = document.querySelectorAll('.details__list');


// Popup
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


// Slider
new Swiper('.swiper',{
    pagination: {
        el: '.swiper-pagination',
    }
});

// Tabs
tabLinks.forEach((item) => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault()
        const id = evt.target.getAttribute('href').replace('#', '')

        tabLinks.forEach((item) => {
            item.classList.remove('details__heading_active')
        });
        tabContent.forEach((item) => {
            item.classList.remove('details__list_active')
        });

        item.classList.add('details__heading_active');
        document.getElementById(id).classList.add('details__list_active')
    })
})
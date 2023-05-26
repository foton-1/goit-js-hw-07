import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/* Крок 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї*/
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGaleryMarkup(galleryItems);
// console.log(createGaleryMarkup(galleryItems));

galleryEl.insertAdjacentHTML(`beforeend`, galleryMarkup);
function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join(``);
}

/* Крок 2. Реалізація делегування на ul.gallery і отримання url великого зображення.*/
galleryEl.addEventListener(`click`, onGalleryElClick);

function onGalleryElClick(event) {
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }
  console.log(event.target);

  modalWindowClick(`<img src="${event.target.dataset.source}">`);
}

/* Крок 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr.
     Додав у html посилання на мініфіковані (.min) файли бібліотеки.*/
/* Крок 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами. */
function modalWindowClick(img) {
  const instance = basicLightbox.create(img);

  instance.show();
}

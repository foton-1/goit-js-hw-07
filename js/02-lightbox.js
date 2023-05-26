import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGaleryMarkup(galleryItems);

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
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join(``);
}

galleryEl.addEventListener(`click`, onGalleryElClick);

function onGalleryElClick(event) {
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }
  console.log(event.target);

  //   modalWindowClick();
}

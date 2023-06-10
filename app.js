import { gallery } from "./gallery.js";

const cardContainer = document.querySelector(".grid");

gallery.forEach((image) => {
  const card = document.createElement("article");
  const cardValue = `
          <img
            src=${image.url}
          />
          <div class="konten">
            <h2>${image.nama}</h2>
            <p>
              ${image.desc}
            </p>
          </div>`;
  card.innerHTML = cardValue;

  cardContainer.appendChild(card);
});

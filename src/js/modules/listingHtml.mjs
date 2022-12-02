import { timeDiff } from "./calcDiff.mjs";
/**
 * Creates listing cards based on content array passed as argument
 * @param {Array} data Array with content from api
 * @param {String} container Target content container's class name
 */
export function listingHtml(data, container, all) {
  let end;

  if (all) {
    end = data.length;
  } else {
    end = 10;
  }
  const contentContainer = document.querySelector(`.${container}`);
  contentContainer.innerHTML = "";

  for (let i = 0; i < end; i++) {
    // console.log(data[i].media.length);
    const date = new Date(data[i].created);
    const posted = `${date.getDate()}/${date.getMonth()}-${date.getFullYear()}`;

    const remaining = timeDiff(data[i].endsAt);

    const text = data[i].description;
    const cutText = text.slice(0, 90) + "...";

    contentContainer.innerHTML += `
    <div class="listing bg-light my-3 d-flex flex-column justify-content-between">
    <div id="carousel${i}" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner${i}">

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="info m-3 ">
      <h3 class="l-title text-center m-3">${data[i].title}</h3>
      <p class="date">Posted: ${posted}</p>
      <p class="l-description">
        ${cutText}
      </p>
    </div>
    <div class="bids d-flex justify-content-between m-3">
      <div>
        <p class="m-0">Highest bid:</p>
        <p>${data[i].bids[data[i].bids.length - 1].amount} C</p>
      </div>
      <div class="vr"></div>
      <div>
        <p class="m-0">${remaining}</p>
        <p>Left</p>
      </div>
    </div>
    </div>
    `;
    if (data[i].media.length > 0) {
      const galleryContainer = document.querySelector(".carousel-inner" + i);

      data[i].media.forEach((e, index) => {
        if (index === 0) {
          galleryContainer.innerHTML += `
          <div class="carousel-item active">
            <img src=${e} class="d-block w-100 p-img" alt = "the product on auction" />
          </div>
          `;
        } else {
          galleryContainer.innerHTML += `
          <div class="carousel-item">
            <img src=${e} class="p-img d-block w-100" alt = "the product on auction" />
          </div>
          `;
        }
        if (data[i].media.length < 2) {
          // console.log(data[i]);
          const container = document.querySelector("#carousel" + i);
          console.log(container);
          const buttons = container.querySelectorAll("button");
          buttons.forEach((b) => {
            b.style.display = "none";
          });
        }
      });
    } else {
      const galleryContainer = document.querySelector("#carousel" + i);
      galleryContainer.style.display = "none";
    }
  }
}

{
  /* <div class="carousel-item active">
<img src="/media/pexels-ekaterina-bolovtsova-6077326.jpg" class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
<img src="media/pexels-luis-del-río-15286.jpg" class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
<img src="media/pexels-ekaterina-bolovtsova-6077326.jpg" class="d-block w-100" alt="..." />
</div> */
}

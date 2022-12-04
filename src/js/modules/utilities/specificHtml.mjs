import { timeDiff } from "./calcDiff.mjs";
export function specificHtml(data) {
  const container = document.querySelector(".content-container");

  const date = new Date(data.created);
  const posted = `${date.getDate()}/${date.getMonth() + 1}-${date.getFullYear()}`;

  const remaining = timeDiff(data.endsAt);

  container.innerHTML = `
  <div class = "carousel-container">
    <div class = "tags">
    </div>
    <div id="carousel" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class = "title">
    <h1 class = "text-center">${data.title}</h1>
    <p class="date mx-2">Posted: ${posted}</p>
  </div>
  <div class="bids d-flex justify-content-between m-3">
    <div>
      <p class="m-0">Highest bid:</p>
      <p>${data.bids[data.bids.length - 1]?.amount || 0} Credits</p>
    </div>
    <div class="vr"></div>
    <div>
      <p class="m-0">${remaining}</p>
      <p>Left</p>
    </div>
  </div>
  <div class = "make-bid mx-auto"> 
    <form>
      <input class = "form-control my-1 w-100" id = "bid" type = "number" name = "new-bid" placeholder = "000">
      <button class = "btn btn-primary w-100">Make a bid!</button>
    </form>
  </div>
  <div class="text-success">
    <hr>
  </div>
  <div class = "description mx-3 mb-5">
    <p>${data.description}</p>
  </div>
  
  `;

  if (data.media.length > 0) {
    const galleryContainer = document.querySelector(".carousel-inner");

    data.media.forEach((e, index) => {
      if (index === 0) {
        galleryContainer.innerHTML += `
        <div class="carousel-item active">
          <img src=${e} class="d-block w-100 p-img" alt = "the product on auction" onerror = "this.src = '/media/pexels-ekaterina-bolovtsova-6077326.jpg'"/>
        </div>
        `;
      } else {
        galleryContainer.innerHTML += `
        <div class="carousel-item">
          <img src=${e} class="p-img d-block w-100" alt = "the product on auction" />
        </div>
        `;
      }
      if (data.media.length < 2) {
        const container = document.querySelector("#carousel");
        const buttons = container.querySelectorAll("button");
        buttons.forEach((b) => {
          b.style.display = "none";
        });
      }
    });
  } else {
    const galleryContainer = document.querySelector("#carousel");
    galleryContainer.style.display = "none";
  }

  const tagsContainer = document.querySelector(".tags");

  if (data.tags) {
    data.tags.forEach((e) => {
      tagsContainer.innerHTML += `<span class = "tag m-1 p-2 bg-primary rounded-3">${e}</span>`;
    });
  }
}

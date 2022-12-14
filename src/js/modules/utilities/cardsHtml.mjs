/**
 * Function to create the html for the listings cards on the "All listings" page
 * @param {Array} data Array with listing details to build cards with
 * @param {number} counter Counter for the loop, not applicable unless an offset is needed 
 * @param {number} index Index for the for loop, not applicable unless offset is needed 
 */
export function createCards(data, counter, index){
  const container = document.querySelector(".content-container");
  let count;

  if(!counter){
    count = data.length < 20 ? data.length : 20;
  }else{
    count = counter;
  }

  let i = index !== undefined ? index : 0;

  for(i; i < count; i++){
    const date = new Date(data[i].created);
    const posted = `${date.getDate()}/${date.getMonth() + 1}-${date.getFullYear()}`;

    container.innerHTML += `
    <div class = "card m-3 rounded w-100">
      <img src = "${data[i].media[0] || ''}" class = "image-height-fix" alt = "product image" onerror = "this.src = '../media/pexels-luis-del-río-15286.jpg'">
      <a href = "specific.html?id=${data[i].id}" class = "unset">
        <div class = "card-img-overlay overlay text-light" data-id = "${data[i].id}">
          <h2 class = "card-title">${data[i].title}</h2>
          <p class = "card-text">Posted:</p>
          <p class = "card-text">${posted}</p>
          <p class = "card-text">Current highest bid:</p>
          <p class = "card-text">${data[i].bids.length > 0 ? data[i].bids[data[i].bids.length -1]?.amount + " Credits" : "0 bids yet"}</p>
        </div>
      </a>
    </div>
    `
  }
  if(count < data.length){
    count += 20;

    container.innerHTML += `
    <button id = "load" class = "btn btn-primary w-50 mx-auto my-3 d-block">Load more</button>
    `
    const loadButton = document.querySelector("#load");

    loadButton.addEventListener("click", (e)=>{
      loadButton.remove();
      createCards(data, count, i);
    })
  }
}
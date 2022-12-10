export function createCards(data){
  const container = document.querySelector(".content-container");
  let count = data.length < 20 ? data.length : 20;
  console.log(count)
  console.log(data)

  for(let i = 0; i < count; i++){
    console.log(i)
    const date = new Date(data[i].created);
    const posted = `${date.getDate()}/${date.getMonth() + 1}-${date.getFullYear()}`;

    container.innerHTML += `
      <div class = "card m-3">
        <img src = "${data[i].media[0] || ''}" class = "card-img" alt = "product image" onerror = "this.src = '../media/pexels-luis-del-río-15286.jpg'">
        <div class = "card-img-overlay test text-light" data-id = "${data[i].id}">
          <h2 class = "card-title">${data[i].title}</h2>
          <p class = "card-text">Posted:</p>
          <p class = "card-text">${posted}</p>
          <p class = "card-text">Current highest bid:</p>
          <p class = "card-text">${data[i].bids[data[i].bids.length -1]?.amount + "Credits" || "0 bids yet"}</p>
        </div>
      </div>
    `
  }

  const cards = document.querySelectorAll(".test")
  cards.forEach((card)=>{
    card.addEventListener("click",(e)=>{
      let id;
      e.path.forEach((e, i)=>{
        if(e.dataset?.id !== undefined){
          console.log(i)
          id = e.dataset.id;
        } 
      })
      
      if(id){
        window.location.href = `/pages/specific.html?id=${id}`
      }
    })

    if(count < data.length){
      container.innerHTML += `
      <button class = "btn btn-primary w-100">Load more</button>
      `
    }
  })
}
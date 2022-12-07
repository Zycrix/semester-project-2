export function createCards(data){
  const container = document.querySelector(".content-container");

  console.log(data)
  for(let i = 0; i < data.length; i++){
    console.log(i)
    const date = new Date(data[i].created);
    const posted = `${date.getDate()}/${date.getMonth() + 1}-${date.getFullYear()}`;

    container.innerHTML += `
      <div class = "card m-3 test" data-id = "${data[i].id}">
        <img src = "${data[i].media[0] || ''}" class = "card-img" alt = "product image" onerror = "this.media = '../media/pexels-luis-del-río-15286.jpg'">
        <div class = "card-img-overlay test text-light">
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

      const id = e.path.forEach((a)=>{
        // console.log(a.dataset?.id)
        if(a.dataset?.id !== undefined){
          return a.dataset.id;
        }
      }) 
      console.log(id)
    })
  })
}
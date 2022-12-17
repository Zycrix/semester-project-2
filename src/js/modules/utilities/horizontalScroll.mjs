export function hScroll(){
  const containers = document.querySelectorAll("section > div");
  let scrollPosition = 0;

  containers.forEach((e)=>{
    e.addEventListener("wheel", (event)=>{
      if(event.deltaY > 0){
        e.scrollLeft += 100;
        if(e.scrollLeft !== scrollPosition){
          event.preventDefault();
        };
        scrollPosition = e.scrollLeft;
      }else{
        e.scrollLeft -= 100;
        if(e.scrollLeft !== scrollPosition){
          event.preventDefault();
        };
        scrollPosition = e.scrollLeft;
      };
    });
  });
};
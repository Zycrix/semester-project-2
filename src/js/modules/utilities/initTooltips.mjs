export function tooltip(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const buttonContainer = document.querySelector(".new-listing-button");
  const tooltipContainer = bootstrap.Tooltip.getInstance(buttonContainer);

  if(window.innerWidth < "1000"){
    //Set manual tooltip trigger for tooltip on mobile devices
    tooltipList.forEach((e)=>{
      e.trigger = "manual"
    })

    //Show the tooltip on page load 
    tooltipContainer.show()

    //Automatically hide tooltip after some seconds 
    setTimeout((e)=>{
      tooltipContainer.hide();
    }, 5000)
  }
}
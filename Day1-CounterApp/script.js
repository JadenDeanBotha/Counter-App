const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

//Event delegation
//This allows you to set an event listener for the parent element of the buttons so that you only
//need to use one event listener rather than setting three seperate ones for each button
buttons.addEventListener('click', (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
        console.log("Add")
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor()
        console.log("subtract")
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor()
        console.log("reset")
    }
})

//This function will set the color of the number depending on whetehr it is a positive, negative or zero
function setColor() {
    if(count.innerHTML > 0){
        count.style.color = "yellow"
    }else if(count.innerHTML < 0){
        count.style.color = "orangered"
    }else{
        count.style.color = "white"
    }   
}

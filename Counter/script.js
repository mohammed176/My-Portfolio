let counter = 0;


const value = document.getElementById("value");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");


increment.addEventListener("click", () => {
    counter+=2;
    value.innerText = counter;
});

decrement.addEventListener("click", () =>{
    counter-=2;
    value.innerText = counter;
})

reset.addEventListener("click", () =>{
    counter=0;
    value.innerText = counter;
    document.getElementById("colorflipper").style.backgroundColor = "white" ;
})


function changecolor(){
    let red = Math.floor(Math.random() *265);
    let green = Math.floor(Math.random() *265);
    let blue = Math.floor(Math.random() *265);
    let color = `rgb(${red},${green},${blue})`;
    document.getElementById("colorflipper").style.background= color;
}
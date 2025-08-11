function changecolor(){
    let red = Math.floor(Math.random() *265);
    let green = Math.floor(Math.random() *265);
    let blue = Math.floor(Math.random() *265);
    let color = `rgb(${red},${green},${blue})`;
    document.getElementById("colorflipper").style.background= color;
}
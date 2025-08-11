function clock(){
    let date = new Date();
    
    let hr = date.getHours()
    let min = date.getMinutes();
    let sc = date.getSeconds();
    let period = "PM" ;
    
    if (hr >= 12) {
    hr = hr > 12 ? hr - 12 : hr;
    }
    if (hr === 0) {
        hr = 12;
    }
    
    hr = hr < 12 ? "0" + hr : hr ;
    min = min < 12 ? "0" + min : min ;
    sc = sc < 12 ? "0" + sc : sc ;

    
    document.getElementById("hr-t").innerText = hr;
    document.getElementById("mn-t").innerText = min;
    document.getElementById("sc-t").innerText = sc;
}

setInterval(clock , 1000)
clock();

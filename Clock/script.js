/**
 * <div class="hand hour-hand"></div>
 * <div class="hand hour-min"></div>
 * <div class="hand hour-sec"></div>
 */

const hrH = document.querySelector(".hour-hand");
const minH = document.querySelector(".hour-min");
const secH = document.querySelector(".hour-sec");

function setdate() {
    const now = new Date();

    // Seconds
    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90; 
    secH.style.transform = `rotate(${secDeg}deg)`;

    // Minutes
    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    minH.style.transform = `rotate(${minDeg}deg)`;

    // Hours
    const hr = now.getHours();
    const hrDeg = ((hr / 12) / 12) * 360 + 90;
    hrH.style.transform = `rotate(${hrDeg}deg)`;
}

// Call setdate every second
setInterval(setdate, 1000);
setdate(); 
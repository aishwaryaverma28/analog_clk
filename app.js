//Html elements
const hourHand= document.querySelector(".hour_hand");
const minuteHand=document.querySelector(".minute_hand");
const secondHand=document.querySelector(".second_hand");

// functions
function setDate(){
    const time = new Date;
    const sec = time.getSeconds();
    const secDeg = ((sec/60)*360)+90;
    secondHand.style.transform=`rotate(${secDeg}deg)`;
    //console.log(sec,secDeg);

    const min = time.getMinutes();
    const minDeg = ((min/60)*360) + ((sec/60)*6) +90;
    minuteHand.style.transform=`rotate(${minDeg}deg)`;
    //console.log(min, minDeg);

    const hr = time.getHours();
    const hrDeg = ((hr/12)*360) + ((mins/60)*30) +90;
    hourHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();
const params = new URL(document.location.toString()).searchParams;
if (!params.get("endTime")) location.replace("./generator");

const fillers = {
    caption: params.get("captionFull") || "Countdown",
    hideCaption: params.get("hidecaption") || false,
    endTime: params.get("endDate"),
    endMessage: params.get("endMessage") || "The countdown has ended.",
    icon: params.get("pageIcon") || "timer",
    title: params.get("pageTitle") || "Countdown"
}

$("#heading, #heading-mobile").text(fillers.caption);

const countdownElement = document.getElementById('element');

if (showcaption == 'false') {
    document.getElementById('caption').style.display = 'none';
}

document.title = title;

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = icon;

var countDownDate = new Date(parseInt(endtime)).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
        days = `0${days}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Display the result in the element with id="demo"
    countdownElement.innerHTML = `<span class="amount">${days}</span><span class="unit">d</span> <span class="amount">${hours}</span><span class="unit">h</span> <span class="amount">${minutes}</span><span class="unit">m</span> <span class="amount">${seconds}</span><span class="unit">s</span>`

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = endmessage;
    }
}, 1000);

document.getElementById('settings').addEventListener('click', () => {
    window.location.href = `https://projects.mesure.x10.mx/countdown/generator/?caption=${caption}&showcaption=${showcaption}&endtime=${endtime}&endmessage=${endmessage}&icon=${icon}&title=${title}`;
})
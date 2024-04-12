let params = new URL(document.location.toString()).searchParams;

let caption = params.get('caption');
let showcaption = params.get('showcaption');
let endtime = params.get('endtime');
let endmessage = params.get('endmessage');
let icon = params.get('icon');
let title = params.get('title');

let changed = false;

if (!showcaption) {
    showcaption = 'true';
    changed = true;
}

if (!caption) {
    caption = 'undefined';
    showcaption = 'false';
    changed = true;
}

if (!endmessage) {
    endmessage = 'Time reached!'
    changed = true;
}

if (!icon) {
    icon = 'https://projects.mesure.x10.mx/countdown/favicon.png';
    changed = true;
}

if (!title) {
    title = `Countdown until ${countdown}`;
    changed = true;
}

if (!endtime) {
    caption = 'the New Year';
    showcaption = 'true';
    endtime = '1735689600000';
    endmessage = 'It is now the Jan 1 in GMT!';
    icon = 'https://em-content.zobj.net/source/skype/289/party-popper_1f389.png';
    title = 'New Year Countdown';
    changed = true;
}

if (changed) {
    window.location.href = `https://projects.mesure.x10.mx/countdown/?caption=${caption}&showcaption=${showcaption}&endtime=${endtime}&endmessage=${endmessage}&icon=${icon}&title=${title}`;
}

document.getElementById('caption').innerText = `Countdown until ${caption}`;

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
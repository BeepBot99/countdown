let params = new URL(document.location.toString()).searchParams;

let caption = params.get('caption');
let showcaption = params.get('showcaption');
let endtime = params.get('endtime');
let endmessage = params.get('endmessage');
let icon = params.get('icon');
let title = params.get('title');

document.getElementById('caption').value = caption;
document.getElementById('showcaption').checked = true;
document.getElementById('endtime').value = endtime;
document.getElementById('endmessage').value = endmessage
document.getElementById('icon').value = icon;
document.getElementById('title').value = title;

if (showcaption == 'false') {
    document.getElementById('showcaption').checked = false;
}

function updateURL() {
    let caption = document.getElementById('caption').value;
    let showcaption = document.getElementById('showcaption').checked;
    let endtime = document.getElementById('endtime').value;
    let endmessage = document.getElementById('endmessage').value;
    let icon = document.getElementById('icon').value;
    let title = document.getElementById('title').value;

    document.getElementById('url').value = `https://projects.mesure.x10.mx/countdown/?caption=${caption}&showcaption=${showcaption}&endtime=${endtime}&endmessage=${endmessage}&icon=${icon}&title=${title}`;
}

updateURL();

document.addEventListener('keyup', () => updateURL());
document.addEventListener('click', () => updateURL());

function copy() {
    let urlElement = document.getElementById("url");

    urlElement.select();
    urlElement.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(urlElement.value);

    document.getElementById('copy').innerText = 'Copied!';
    setTimeout('document.getElementById("copy").innerText = "Copy";', 5000);
}

function current() {
    let urlElement = document.getElementById("url");

    window.location.href = urlElement.value;
}

function newtab() {
    let urlElement = document.getElementById("url");
    window.open(urlElement.value, '_blank').focus();
}
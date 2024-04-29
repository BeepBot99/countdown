// Dealing with query parameters
const params = new URL(document.location.toString()).searchParams;
const storedParams = JSON.parse(localStorage.getItem("fillers"));
if (!params.get("endDate") && !storedParams.endDate) location.replace("./generator");

const fillers =
{
    caption: params.get("captionFull") || storedParams.caption || "Countdown",
    hideCaption: params.get("hideCaption") || storedParams.hideCaption || false,
    endDate: params.get("endDate") || storedParams.endDate,
    endMessage: params.get("endMessage") || storedParams.endMessage || "The countdown has ended.",
    icon: params.get("pageIcon") || storedParams.icon || "timer",
    title: params.get("pageTitle") || storedParams.title || "Countdown"
};
localStorage.setItem("fillers", JSON.stringify(fillers));

// Using query parameters
$("#heading, #heading-mobile").text(fillers.caption);
if (fillers.hideCaption) $("#heading, #heading-mobile").hide();
document.title = fillers.title;
$("link[rel='shortcut icon']").prop("href", fillers.icon);

const countDownDate = new Date(fillers.endDate);
function updateTimer() {
    // Get the current date and time
    const now = new Date();
    // Find the distance between now and the count down date
    const distanceBetween = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distanceBetween / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceBetween % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceBetween % (1000 * 60)) / 1000);

    // Rewriting minutes and seconds only if one digit
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Display the result to the user
    $("#countdown-text, #countdown-text-mobile").text(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    // If the countdown is finished, stop the timer and display it to the user.
    if (distanceBetween < 0) {
        if (typeof timerInterval !== "undefined") clearInterval(timerInterval);
        $("#countdown-text, #countdown-text-mobile").text(fillers.endMessage);
    }
}
updateTimer();
// Update the countdown every 1 second
const timerInterval = setInterval(updateTimer, 1000);

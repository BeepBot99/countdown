// Utility Function
function copyTextToClipboard(text) {
    function fallbackCopyTextToClipboard(text) {
        const textArea = $("<textarea>")
            .val(text)
            .css("top", "0")
            .css("left", "0")
            .css("position", "fixed")
            .appendTo("body")
            .focus()
            .select();
        document.execCommand("copy");
        textArea.remove();
    }
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text);
}

// Event Listeners
$("#hide-caption").on("click", function () {
    $("#caption, #preposition").prop("disabled", this.checked ? "disabled" : "");
});

$("form").submit(() => {
    $("#preposition, #caption").removeAttr("name");
});

$("#copy-button").on("click", function () {
    $("#preposition, #caption").removeAttr("name");
    copyTextToClipboard(`${$("form").prop("action")}?${$("form").serialize()}`);
    $("#preposition").attr("name", "preposition");
    $("#caption").attr("name", "caption");
    $(this).html(
        '<span class="icon-text"><span>Copied!</span><i class="material-symbols-outlined">done</i></span>'
    );
    setTimeout(() => {
        $(this).html(
            '<span class="icon-text"><span>Copy link to clipboard</span><i class="material-symbols-outlined">content_copy</i></span>'
        );
    }, 3000);
});

$(".icon-select-button").on("click", function () {
    $(".icon-select-button")
        .removeClass("is-info")
        .removeClass("is-selected");
    $(this)
        .addClass("is-info")
        .addClass("is-selected");
    $("#page-icon-input").val(
        $(this)
            .find("i.material-symbols-outlined")
            .text()
    );
});

const calendarOptions = {
    type: "datetime",
    displayMode: "dialog",
    showHeader: false,
    minuteSteps: 1,
    closeOnSelect: true,
    cancelLabel: "Cancel",
    validateLabel: "Select",
    color: "link",
    showClearButton: false
};

bulmaCalendar.attach("#end-date", calendarOptions);

function handleFormInput() {

}
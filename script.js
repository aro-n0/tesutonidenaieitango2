console.log("ここ読み込まれてる");

function showMeaning(button) {
    const word = button.previousElementSibling;
    word.classList.remove("hidden");
}

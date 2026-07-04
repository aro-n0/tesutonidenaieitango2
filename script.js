console.log("ここ読み込まれてる");

function showMeaning() {
    const word = document.getElementById("word");

    word.textContent = "人やものを窓から投げ捨てること";
    word.classList.toggle("hidden");
}

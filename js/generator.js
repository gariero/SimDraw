// Get the canvas element
var generateBtn = document.getElementById("generate-btn");
var selectedValue = document.getElementById("typesDroplist").value;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


generateBtn.addEventListener("click", function () {

    if (selectedValue === "Вал") {
        roundBar();
    }
    else if (selectedValue === "Брусок") {
        squareBar();
    }
    else if (selectedValue === "Диск") {
        disc();
    }
    else if (selectedValue === "Диск с отверстием") {
        punchedDisc();
    }
    else if (selectedValue === "Труба") {
        tube();
    }
    else {

    }
    ctx.restore();

})
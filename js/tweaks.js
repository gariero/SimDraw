document.getElementById("shapeSelect").addEventListener("change", function () {
    var selectedOption = this.value;
    var diameterWidthField = document.getElementById("typesDroplist");
    if (selectedOption === "Round bar" || selectedOption === "Disc") {
        diameterWidthField.disabled = true;
    } else {
        diameterWidthField.disabled = false;
    }
});
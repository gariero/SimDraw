function ChangeDropdowns(value) {
    if (value == "los") {
        document.getElementById('shapeSelect').style.display = 'none';
    } else if (value === "Round bar" || value === "Disc") {
        document.getElementById('shapeSelect').style.display = 'block';
    }
}

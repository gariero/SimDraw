function ChangeDropdowns(value) {
    if (value === "Round bar" || value === "Disc") {
        document.getElementById('shapeSelect').style.display = 'none';
    } else {
        document.getElementById('shapeSelect').style.display = 'block';
    }
}

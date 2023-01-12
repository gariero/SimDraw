function ChangeDropdowns(value) {
    if (value == "Round bar" || value == "Disc") {
        document.getElementById('shapeSelect').style.display = 'none';
    } else {
        document.getElementById('shapeSelect').style.display = 'block';
    }
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

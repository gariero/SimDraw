// Get the canvas element
var generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // set canvas dimensions to A4 format in pixels
    canvas.width = 595;
    canvas.height = 842;

    // Frame
    ctx.beginPath();
    //main frame
    ctx.moveTo(57, 15);
    ctx.lineTo(582, 15);
    ctx.lineTo(582, 835);
    ctx.lineTo(57, 835);
    ctx.lineTo(57, 15);
    //left block
    ctx.moveTo(57, 15);
    ctx.lineTo(23, 15);
    ctx.lineTo(23, 356);
    ctx.lineTo(57, 356);
    ctx.moveTo(38, 15);
    ctx.lineTo(38, 356);
    ctx.moveTo(23, 185);
    ctx.lineTo(57, 185);
    //left 2 block
    ctx.moveTo(57, 835);
    ctx.lineTo(23, 835);
    ctx.lineTo(23, 418);
    ctx.lineTo(57, 418);
    ctx.moveTo(23, 517);
    ctx.lineTo(57, 517);
    ctx.moveTo(23, 588);
    ctx.lineTo(57, 588);
    ctx.moveTo(23, 659);
    ctx.lineTo(57, 659);
    ctx.moveTo(23, 760);
    ctx.lineTo(57, 760);
    ctx.moveTo(38, 418);
    ctx.lineTo(38, 835);
    //Legend topline
    ctx.moveTo(57, 670);
    ctx.lineTo(582, 670);
    ctx.moveTo(243, 716);
    ctx.lineTo(582, 716);
    ctx.moveTo(243, 670);
    ctx.lineTo(243, 835);
    ctx.moveTo(243, 787);
    ctx.lineTo(582, 787);
    ctx.moveTo(440, 716);
    ctx.lineTo(440, 835);
    ctx.moveTo(440, 728);
    ctx.lineTo(582, 728);
    ctx.moveTo(440, 770);
    ctx.lineTo(582, 770);
    ctx.moveTo(496, 770);
    ctx.lineTo(496, 787);
    ctx.moveTo(482, 716);
    ctx.lineTo(482, 770);
    ctx.moveTo(530, 716);
    ctx.lineTo(530, 770);
    ctx.moveTo(454, 728);
    ctx.lineTo(454, 770);
    ctx.moveTo(468, 728);
    ctx.lineTo(468, 770);
    //top drw No
    ctx.moveTo(255, 15);
    ctx.lineTo(255, 54);
    ctx.lineTo(57, 54);
    //legend context
    ctx.moveTo(105, 670);
    ctx.lineTo(105, 835);
    ctx.moveTo(170, 670);
    ctx.lineTo(170, 835);
    ctx.moveTo(212, 670);
    ctx.lineTo(212, 835);
    ctx.moveTo(57, 685);
    ctx.lineTo(243, 685);
    ctx.moveTo(57, 700);
    ctx.lineTo(243, 700);
    ctx.moveTo(57, 715);
    ctx.lineTo(243, 715);
    ctx.moveTo(57, 730);
    ctx.lineTo(243, 730);
    ctx.moveTo(57, 745);
    ctx.lineTo(243, 745);
    ctx.moveTo(57, 760);
    ctx.lineTo(243, 760);
    ctx.moveTo(57, 775);
    ctx.lineTo(243, 775);
    ctx.moveTo(57, 790);
    ctx.lineTo(243, 790);
    ctx.moveTo(57, 805);
    ctx.lineTo(243, 805);
    ctx.moveTo(57, 820);
    ctx.lineTo(243, 820);

    ctx.strokeStyle = "black";
    ctx.stroke();

    //frame text insert
    ctx.font = "10px Arial";
    ctx.fillText("Изм.", 58, 740);
    ctx.fillText("Лист", 80, 740);
    ctx.fillText("№ докум.", 118, 740);
    ctx.fillText("Подп.", 130, 740);
    ctx.fillText("Дата", 214, 740);

    // get values from form fields
    var typesDroplist = document.getElementById("typesDroplist").value;
    var diameter_height = document.getElementById("diameter_height").value;
    var diameter_width = document.getElementById("diameter_width").value;
    var length_height = document.getElementById("length_height").value;
    var yPos = canvas.height / 3;

    // type drawing


})

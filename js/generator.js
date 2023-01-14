// Get the canvas element
var generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");



    // set canvas dimensions to A4 format in pixels
    canvas.width = 1190;
    canvas.height = 1684;

    // Frame A4
    ctx.lineWidth = 2;
    ctx.beginPath();
    //GOST add 2
    ctx.rect(44, 29, 28, 340);
    ctx.rect(72, 29, 40, 340);
    ctx.rect(44, 369, 28, 340);
    ctx.rect(72, 369, 40, 340);
    // GOST add 1
    ctx.rect(44, 834, 68, 822);
    ctx.rect(44, 1032, 68, 284);
    ctx.rect(44, 1174, 68, 340);
    ctx.moveTo(72, 834);
    ctx.lineTo(72, 1656);
    // GOST add 3
    ctx.moveTo(508, 29);
    ctx.lineTo(508, 108);
    ctx.lineTo(112, 108);
    // GOST form No1
    ctx.moveTo(112, 1344);
    ctx.lineTo(1160, 1344);
    ctx.moveTo(112, 1457);
    ctx.lineTo(480, 1457);
    ctx.moveTo(112, 1485);
    ctx.lineTo(480, 1485);
    ctx.moveTo(480, 1429);
    ctx.lineTo(1160, 1429);

    ctx.moveTo(877, 1457);
    ctx.lineTo(1160, 1457);
    ctx.moveTo(877, 1542);
    ctx.lineTo(1160, 1542);
    ctx.moveTo(480, 1571);
    ctx.lineTo(1160, 1571);
    ctx.moveTo(962, 1429);
    ctx.lineTo(962, 1542);
    ctx.moveTo(1058, 1429);
    ctx.lineTo(1058, 1542);
    ctx.moveTo(990, 1542);
    ctx.lineTo(990, 1571);
    ctx.moveTo(877, 1429);
    ctx.lineTo(877, 1656);
    ctx.moveTo(480, 1344);
    ctx.lineTo(480, 1656);
    ctx.moveTo(112, 1656);
    ctx.lineTo(1160, 1656);
    ctx.lineTo(1160, 29);
    ctx.lineTo(112, 29);
    ctx.moveTo(112, 708);
    ctx.lineTo(112, 833);
    ctx.moveTo(151, 1344);
    ctx.lineTo(151, 1457);
    ctx.moveTo(208, 1344);
    ctx.lineTo(208, 1656);
    ctx.moveTo(338, 1344);
    ctx.lineTo(338, 1656);
    ctx.moveTo(423, 1344);
    ctx.lineTo(423, 1656);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(112, 1372);
    ctx.lineTo(480, 1372);
    ctx.moveTo(112, 1400);
    ctx.lineTo(480, 1400);
    ctx.moveTo(112, 1429);
    ctx.lineTo(480, 1429);
    ctx.moveTo(112, 1514);
    ctx.lineTo(480, 1514);
    ctx.moveTo(112, 1542);
    ctx.lineTo(480, 1542);
    ctx.moveTo(112, 1571);
    ctx.lineTo(480, 1571);
    ctx.moveTo(112, 1599);
    ctx.lineTo(480, 1599);
    ctx.moveTo(112, 1627);
    ctx.lineTo(480, 1627);
    ctx.moveTo(906, 1457);
    ctx.lineTo(906, 1542);
    ctx.moveTo(934, 1457);
    ctx.lineTo(934, 1542);

    ctx.strokeStyle = "black";
    ctx.stroke();

    //frame text insert
    ctx.font = "18px Arial";
    ctx.fillText("Изм. ", 114, 1450);
    ctx.fillText("Лист", 162, 1450);
    ctx.fillText("№ докум.", 236, 1450);
    ctx.fillText("Подп.", 358, 1450);
    ctx.fillText("Дата", 429, 1450);
    ctx.fillText("Лист", 888, 1564);
    ctx.fillText("Лит.", 902, 1452);
    ctx.fillText("Масса", 982, 1452);
    ctx.fillText("Масштаб", 1070, 1452);
    ctx.fillText("Листов    1", 1000, 1566);
    ctx.fillText("Копировал", 642, 1682);
    ctx.fillText("Формат А4", 910, 1682);

    // get values from form fields
    var typesDroplist = document.getElementById("typesDroplist").value;
    var diameter_height = document.getElementById("diameter_height").value;
    var diameter_width = document.getElementById("diameter_width").value;
    var length_height = document.getElementById("length_height").value;
    var yPos = canvas.height / 10;
    var xPos = canvas.width / 10;
    var selectedValue = document.getElementById("typesDroplist").value;
    var selectedValue2 = document.getElementById("SteelDroplist").value;

    //logo
    var img = document.getElementById("logo");
    ctx.drawImage(img, 886, 1576);


    // draw the figures
    if (selectedValue === "Round bar") {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(xPos * 2, yPos * 2, xPos * 4, yPos);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(xPos * 8, yPos * 2.5, yPos / 2, 0, 2 * Math.PI);
        ctx.stroke();

        // dim lines for rectangle
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(xPos * 2, yPos * 2);
        ctx.lineTo(xPos * 2, yPos * 3.5);
        ctx.moveTo(xPos * 6, yPos * 2);
        ctx.lineTo(xPos * 6, yPos * 3.5);
        ctx.moveTo(xPos * 2 - 5, yPos * 3.5 - 5);
        ctx.lineTo(xPos * 6 + 5, yPos * 3.5 - 5);

        // dim lines for circle
        ctx.moveTo(xPos * 8 - yPos / 2, yPos * 2.5);
        ctx.lineTo(xPos * 8 - yPos / 2, yPos * 3.5);
        ctx.moveTo(xPos * 8 + yPos / 2, yPos * 2.5);
        ctx.lineTo(xPos * 8 + yPos / 2, yPos * 3.5);
        ctx.moveTo(xPos * 8 - yPos / 2 - 5, yPos * 3.5 - 5);
        ctx.lineTo(xPos * 8 + yPos / 2 + 5, yPos * 3.5 - 5);
        ctx.stroke();

        //Axes lines
        ctx.setLineDash([10, 5]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(xPos * 2 - 5, yPos * 2.5);
        ctx.lineTo(xPos * 8 + yPos / 2 + 5, yPos * 2.5);
        ctx.moveTo(xPos * 8, yPos * 2.5 - yPos / 2 - 5);
        ctx.lineTo(xPos * 8, yPos * 2.5 + yPos / 2 + 5);
        ctx.stroke();

        //text dims
        ctx.font = "20px Arial";
        //Lenght
        ctx.fillText(length_height, xPos * 3.9, yPos * 3.4);
        //Diameter
        ctx.fillText("Ø" + diameter_height, xPos * 7.8, yPos * 3.4);

        // Set the font size to a large value
        ctx.font = "32px Arial";

        // Measure the width of the text
        var steelTextWidth = ctx.measureText(selectedValue2).width;

        // Check if the text is too wide for the rectangle
        if (steelTextWidth > 100) {
            // Reduce the font size until the text fits within the rectangle
            while (steelTextWidth > 100) {
                ctx.font = ctx.font.replace(/\d+px/, function (match) {
                    return (parseInt(match) - 1) + "px";
                });
                steelTextWidth = ctx.measureText(selectedValue2).width;
            }
        }

        // Draw the text
        ctx.fillText(selectedValue2, 485, 1650);




    } else if (selectedValue === "square") {
        ctx.fillStyle = "green";
        ctx.fillRect(25, 25, 50, 50);
    }
    ctx.restore();
  
})

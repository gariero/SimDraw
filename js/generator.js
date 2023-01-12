// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set the canvas size to A4 dimensions in pixels
canvas.width = 595;
canvas.height = 842;

// Get the canvas context
var ctx = canvas.getContext("2d");

// Draw a red box
ctx.fillStyle = "green";
ctx.fillRect(50, 50, 500, 750);

// Draw circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
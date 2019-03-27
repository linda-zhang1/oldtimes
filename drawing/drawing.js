console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]
//console.log(colArray[0]);
//-----------------------------------------------------------


// complete drawing of a rectangle
ctx.strokeStyle = colArray[3];
ctx.fillStyle = colArray[5];
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100,150,300,50);
ctx.stroke();
ctx.fill();b

// complete drawing of another rectangle
ctx.strokeStyle = colArray[2];
ctx.fillStyle = colArray[1];
ctx.lineWidth = 10;
ctx.beginPath();
ctx.rect(200,300,50,100);
ctx.stroke();
ctx.fill();

// complete drawing of a circle
ctx.fillStyle='rgb(255,204,51)'
ctx.strokeStyle='rgb(51,51,255)'
ctx.lineWidth=10;
ctx.beginPath()
ctx.arc(200,60, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle="rgb(0,0,255)";
var myFont= "bold 20px arial";
ctx.font = myFont;
ctx.fillText("This is a test!", 300,50);

/* var BoxImg = new Image();   // Create new img element
BoxImg.src = 'image_test.png'; // Set source path
ctx.drawImage(BoxImg, 600,10,100,100); */

// draw a line
ctx.strokeStyle = "rgb(255,255,0)";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(750, 200);
ctx.stroke();

// draw a polyline with closure
ctx.strokeStyle = "rgb(255,102,102)";
ctx.fillStyle = "rgb(232, 147, 11)";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(500,250);
ctx.lineTo(700,300);
ctx.lineTo(400,500);
ctx.closePath();
ctx.stroke();
ctx.fill();

// draw a shape with a gradient
var my_gradient = ctx.createLinearGradient(10,350,10,550);
my_gradient.addColorStop(0,"rgb(255,0,0");
my_gradient.addColorStop(0.5,"rgb(255,255,255)");
my_gradient.addColorStop(1,"rgb(0,0,255)");
ctx.fillStyle = my_gradient;
ctx.beginPath()
ctx.rect(10,350, 200,200);
ctx.fill();
ctx.stroke();

// draw a quadratic curve (bezier)
ctx.strokeStyle="rgb(109, 247, 175)";
ctx.beginPath();
ctx.moveTo(300,500);
ctx.lineWidth = 25;
ctx.quadraticCurveTo(500, 600, 750, 500);
ctx.stroke();
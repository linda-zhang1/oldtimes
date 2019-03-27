console.log("function in loops js called");

// defult set up for canvas
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// colour palette var colArray
var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(83,51,74)","rgb(110,99,91)","rgb(204,204,153)",
    "rgb(255,247,208)","rgb(247,209,160)", "rgb(208,136,112)"
    ]

// drawRectangle x(int), y(int), w(int), h(int), fcol(string), scol(string), lw(int), fill(boolean), stroke(boolean)
function drawRectangle(x,y,w,h,fcol,scol,lw,fill,stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);

    if (fill == true){
        ctx.fillStyle = fcol;
        ctx.fill();
    }

    if (stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = scol;
        ctx.stroke();
    }
}

// drawCircle x(int), y(int), R(int), fillC(string), strokeC(string), lineW(int), fill(boolean), stroke(boolean)
function drawCircle(x,y,R,fillC,strokeC,lineW,fill,stroke){
    ctx.beginPath();
    ctx.arc(x,y,R,0,2*Math.PI);

    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }

    if (stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

// drawLine x1(int) , y1(int) , x2(int), y2(int), lw(int), strokeC(string)
function drawLine(x1,y1,x2,y2,lw,strokeC){
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

// writeText col(string), text(string),x(int),y(int)
function writeText(col,text,x,y){
    ctx.fillStyle =col;
    var myFont= "bold 20px arial";
    ctx.font = myFont;
    ctx.fillText(text,x,y);
}

// drawGradientRect x(int),y(int),w(int),h(int),col1(string),col2(string)
function drawGradientRect(x,y,w,h,col1,col2,col3,strokeC,lw){
    var my_gradient = ctx.createLinearGradient(x,y,x+w,y);
    my_gradient.addColorStop(0,col1);
    my_gradient.addColorStop(0.5,col2);
    my_gradient.addColorStop(1,col3);
    ctx.fillStyle = my_gradient;
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lw;
    ctx.beginPath()
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
}
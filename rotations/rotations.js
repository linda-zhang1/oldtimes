console.log("rotations js file has called");

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

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawCircle(0,0,20,"",colArray[1][4],2,false,true);
drawRectangle(0,0,100,200,colArray[0][4],colArray[2][8],5,true,true);
ctx.restore();

ctx.save();
ctx.translate(500,200);
for (var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0,0,60,60,colArray[2][4],colArray[2][8],4,false,true);
}
ctx.restore();
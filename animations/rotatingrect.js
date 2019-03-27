console.log("rotating rect js in animations has called");

class RotatingRect{
    constructor(xC,yC,w,h,fillC){
        this.xC = xC;
        this.yC = yC;
        this.w = w;
        this.h = h;
        this.fillC = fillC;
        this.degrees = 45;
    }

    update(){
        this.degrees += 5;
        this.draw();

    }

    draw(){
        ctx.save();
        ctx.translate(this.xC,this.yC);
        ctx.rotate(this.degrees*Math.PI/180);

        ctx.beginPath();
        ctx.rect(-this.w/2,-this.h/2,this.w,this.h);
        ctx.fillStyle = this.fillC;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0,0, 30, 0, 2*Math.PI);
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();

    }
}
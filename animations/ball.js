console.log("ball in animation has called");

// this is just a circle
class Ball{
    constructor(x,y,r,col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = col;
    }

    update(){
        this.x += 2;
        this.x = this.x%400;
        this.y += 2;
        this.y = this.y%300;
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }



}
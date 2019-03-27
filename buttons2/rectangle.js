console.log("rectangle in buttons2 has called");

class Rectangle{
    constructor(x,y,w,h,c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
    }

    setColour(c){
        this.fill = c;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    
}
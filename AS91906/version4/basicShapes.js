console.log("basicShapes in version4 has called");

// BasicRect x(location),y(location),w(width),h(height),c1(fill colour)
class BasicRect{
    constructor(x,y,w,h,c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
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

// BasicEllipse x(location),y(location),rx(x radius),ry(y radius),c1(fill colour)
class BasicEllipse{
    constructor(x,y,rx,ry,c1){
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.fill = c1;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.x,this.y,this.rx,this.ry,0,0,2*Math.PI,false);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
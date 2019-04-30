console.log("basicShapes in version5 has called");

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

class BasicStar{
    constructor(x,y,outR,inR,rot,p,c1){
        this.x = x;
        this.y = y;
        this.outR = outR;
        this.inR = inR;
        this.rot = rot;
        this.p = p;
        this.fill = c1;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.save();
		ctx.beginPath();
		ctx.fillStyle = this.fill;
		ctx.translate(this.x,this.y);
		ctx.rotate(this.rot*Math.PI/180);
        ctx.moveTo(0,-this.outR);
        
        for (var i=1; i<(this.p+1); i++){
		    ctx.rotate(Math.PI / this.p);
		    ctx.lineTo(0, -this.inR);
		    ctx.rotate(Math.PI / this.p);
		    ctx.lineTo(0, -this.outR);
        }

		ctx.closePath();
		ctx.fill();
		ctx.restore();
    }

}

class BasicLine{
    constructor(x1,y1,x2,y2,c1){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = c1;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x1,this.y1);
        ctx.lineTo(this.x2,this.y2);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5;
        ctx.stroke();
    }

}
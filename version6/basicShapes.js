console.log("basicShapes in version6 has called");

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

// BasicStar x(location),y(location),outR(outer radius),inR(inner radius),rot(rotation),p(number of points),c1(fill colour)
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

// BasicLine x1(start location),y1(start location),x2(end location),y2(end location),c1(fill colour)
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

// Growing Circle x(location),y(location),r(radius),dr(change in radius),c1(fill colour)
class GrowingCircle{
    constructor(x,y,r,dr,c1){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dr = dr;
        this.c1 = c1;
        this.currentRadius = 0;
        this.Rmax = r;
        this.count = 0;

    }

    update(){
        this.count += 2;
        // the pulsing of the circle mimics a sine curve
        this.r = (this.Rmax/2)*(Math.sin(this.count*Math.PI/180) +1);
        this.currentRadius = this.r;
        
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, 2*Math.PI);
        ctx.fillStyle = this.c1;
        ctx.fill();
    }

}

// FiveDotRotate x(location),y(location),s(square(width and height)),c1(fill colour)
class FivedotRotate{
    constructor(x,y,s,ang,c1){
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = s/8;
        this.c1 = c1;
        this.ang = ang;
    }

    update(){

        this.ang += 5;
        
        this.draw()
    }

    draw(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.ang*Math.PI/180);


        ctx.beginPath();
        ctx.rect(-this.s/2, -this.s/2,this.s,this.s);
        ctx.fillStyle = this.c1;
        ctx.fill();

        // centre C
        this.drawCircle(0,0,this.r);
        //top left
        this.drawCircle(-this.s/2,-this.s/2,this.r);
        //top right
        this.drawCircle(this.s/2,-this.s/2,this.r);
        //bottom left
        this.drawCircle(-this.s/2,+this.s/2,this.r);
        //bottom right
        this.drawCircle(this.s/2,+this.s/2,this.r);

        ctx.restore();
    }

    drawCircle(x,y,r){
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle = colArray[0][0];
        ctx.fill();
    }

}
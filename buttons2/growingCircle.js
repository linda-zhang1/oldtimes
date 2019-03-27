console.log("growing circle in buttons2 is called");

class GrowingCircle{
    constructor(x,y,r, dr, c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dr = dr;
        this.c = c;
        this.currentRadius = 0;
        this.Rmax = r;
        this.count = 0;

    }

    update(){
        //this.currentRadius = (this.currentRadius + this.dr)%this.r;
        this.count += 2;
        this.r = (this.Rmax/2)*(Math.sin(this.count*Math.PI/180) +1);
        this.currentRadius = this.r;
        
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, 2*Math.PI);
        ctx.fillStyle = this.c;
        ctx.fill();
    }


}
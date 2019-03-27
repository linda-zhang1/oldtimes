console.log("points js in dragpoints has called");

class Points{
    // parameters x (int, to locate), y(int, to locate), r(int), 
    // stroke(rgba string, colour), fill (rgba string, colour), over(if the mouse is over the point)
    // canvas(defining canvas from html)
    constructor(x,y,r,stroke,fill,over,canvas){
        this.x = x;
        this.y = y;
        this.r = r;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;

        // location of mouse
        this.xMouse = 0;
        this.yMouse = 0;

        // declare booleans
        this.dragging = false;
        this.inBounds = false;

        // listeners to be interactive
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mDown(e){
        console.log("mouse is down");
        // if is within the boundries to move the point, it is draggable
        if(this.inBounds == true){
            this.dragging = true;
        }

    }

    mMove(e){
        // set mouse location
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.testBounds(this.xMouse,this.yMouse,this.x,this.y,this.r); 
        // need parameters

    }

    mUp(e){
        console.log("mouse is up");
        // when the mouse is up it cannot be dragged
        this.dragging = false;

    }

    update(){
        // if dragging is true, set mouse to the location
        if(this.dragging == true){
            this.x = this.xMouse;
            this.y = this.yMouse;
        }

        this.draw();

    }

    draw(){
        // this.over is the colour used when mouse is in bounds and drags
        if(this.inBounds == true || this.dragging == true){
            ctx.fillStyle = this.over;
        }
        else{
            ctx.fillStyle = this.fill;
        }
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();

    }

    testBounds(xC,yC,xM,yM,r){
        var d = Math.sqrt( Math.pow(xM - xC,2) + Math.pow(yM - yC,2) );
        
        // test condition if d<r then xM and yM is inside boundary
        if(d < r){
            return true;
        }
        else{
            return false;
        }

    }
    // allow other parts of the program to get the x and y values of the point
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    
}
Points.taken = " ";
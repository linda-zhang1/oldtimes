console.log("controlRect in version4 has called");

// this is the class for dragging different shapes
class ControlShapes{
    // the current boundaries for the dragging is the js canvas
    constructor(canvas,x,y,wid,heg,fill){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;

        // rectangle drawing canvas
        this.x = x;
        this.y = y;
        this.wid = wid;
        this.heg = heg;
        this.fill = fill;
        
        // change the colour of the dragged shapes - default colour
        this.dragFill = colArray[2][0];

        // change the shape of the dragged object - default shape
        this.shape = "Rectangle";
        
        // this array is to enable multiple shapes to be drawn
        this.objectSet = [];

        // in bounds, dragging
        this.inBounds = false;
        this.startInBounds = false;
        this.endInBounds = false;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;

        // listeners for interaction
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;

        // setting drawing boundaries
        if (this.inBounds == true){
            this.mouseDown = true;
        }else{
            this.mouseDown = false;
        }
        

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        // test the bounds of the new rectangle "canvas"
        this.inBounds = this.testBounds(this.xMouse,this.yMouse,this.wid,this.heg,this.x,this.y); 
        
    }

    mUp(e){
        this.mouseDown = false;
        
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        // test if the start and end of the shapes drawn are in bounds
        this.startInBounds = this.testBounds(this.xMouseStart,this.yMouseStart,this.wid,this.heg,this.x,this.y); 
        this.endInBounds = this.testBounds(this.xMouse,this.yMouse,this.wid,this.heg,this.x,this.y); 

        // enable more shapes to be drawn on the canvas
    
        if(this.startInBounds == true && this.endInBounds == true){

            // only draw one shape
            if(this.shape == "Rectangle"){
                var myShape = new BasicRect(this.xMouseStart,this.yMouseStart,this.w,this.h,this.dragFill);
            }
            else if(this.shape == "Ellipse"){
                var myShape = new BasicEllipse(this.xMouseStart+this.w/2,this.yMouseStart+this.h/2,
                    Math.abs(this.w/2),Math.abs(this.h/2),this.dragFill);
            }
            else{
                console.log("something is wrong");
            }

            this.objectSet.push(myShape);
            console.log(this.objectSet);
        }

    }

    // to change the colour of the dragged shapes
    // refer to colButton.js
    setColour(c){
        this.dragFill = c;
    }

    // to change the shape of the dragged objects
    // refer to shapesButton.js
    setShape(t){
        this.shape = t;
        console.log(this.shape);
    }

    update(){
        // draw the rectangle canvas
        this.drawBase();
        // width and height of the shapes is the difference between the begin point and end point
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        // add the shapes to an array so they can be drawn and stay on the canvas
        for(var i = 0; i< this.objectSet.length ; i++){
            this.objectSet[i].update();
        }

        // if the mouse is down and in bounds, draw the shape
        if (this.mouseDown && this.inBounds){
            //console.log("mouse is down");
            this.draw();

        }
    }

    draw(){

        if(this.shape == "Rectangle"){
            // draw the rectangle if the rectangle shape button is clicked
            this.drawRect(this.xMouseStart,this.yMouseStart,this.w,this.h);
        }
        else if(this.shape == "Ellipse"){
            // draw the ellipse if the ellipse button is clicked
            // draw an ellipse with the starting point dragging from the top left corner
            // take the absolute value of this.w and this.h to enable dragging left and up
            this.drawEllipse(this.xMouseStart+this.w/2,this.yMouseStart+this.h/2,Math.abs(this.w/2),Math.abs(this.h/2));
        }
        else{
            console.log("something is wrong");
        }
        
    }

    // drawing rectangle canvas
    drawBase(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.wid,this.heg);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    // drawRect x(location),y(location),w(width),h(height)
    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = colArray[2][0];
        ctx.fillStyle = this.dragFill;
        ctx.stroke();
        ctx.fill();
    }
    // drawEllipse x(location),y(location),rx(radius x),ry(radius y)
    drawEllipse(x,y,rx,ry){
        ctx.beginPath();
        // ellipse x(location), y(location),radiusX(horizontal radius),radiusY(vertical radius),
        // rotation(set to 0),startAngle(set to 0),endAngle(set to 2PI), anticlockwise?(boolean, set to false)
        ctx.ellipse(x,y,rx,ry,0,0,2*Math.PI,false);
        ctx.lineWidth = 1;
        ctx.strokeStyle = colArray[2][0];
        ctx.fillStyle = this.dragFill;
        ctx.stroke();
        ctx.fill();
    }

    // xM(x mouse),y(y mouse),wid(width of drawing canvas),heg(height of drawing canvas),
    // x(location of drawing canvas),y(location of drawing canvas)
    testBounds(xM,yM,wid,heg,x,y){
        // test conditions for when xM and yM is inside boundary
        if(xM > x && xM < x+wid && yM > y && yM < y+heg){
            //console.log("Mouse is in bounds");
            return true;
        }
        else{
            //console.log("mouse is out of bounds");
            return false;
        }
    }

}
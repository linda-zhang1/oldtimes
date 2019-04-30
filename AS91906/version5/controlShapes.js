console.log("controlRect in version5 has called");

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
        //this.dragStroke = colArray[2][0];

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

            // only draw one shape (more comments in draw function)
            if(this.shape == "Rectangle"){
                var myShape = new BasicRect(this.xMouseStart,this.yMouseStart,this.w,this.h,this.dragFill);
            }
            else if(this.shape == "Ellipse"){
                var myShape = new BasicEllipse(this.xMouseStart+this.w/2,this.yMouseStart+this.h/2,
                    Math.abs(this.w/2),Math.abs(this.h/2),this.dragFill);
            }
            else if(this.shape == "Star"){
                var R = ( Math.sqrt( Math.pow(this.xMouse - this.xMouseStart,2) + Math.pow(this.yMouse - this.yMouseStart,2) ) )/2;
                var xC = this.xMouseStart + ((this.xMouse - this.xMouseStart)/2);
                var yC = this.yMouseStart + ((this.yMouse - this.yMouseStart)/2);
                var myShape = new BasicStar(xC,yC,R,R/2.5,0,5,this.dragFill);
            }
            else if(this.shape == "Line"){
                var myShape = new BasicLine(this.xMouseStart,this.yMouseStart,this.xMouse,this.yMouse,this.dragFill);//dragStroke);
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
        //this.dragStroke = c;
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
        else if(this.shape == "Star"){
            // draw the star if the star button is clicked
            // regular polygon so need d and r
            // R is the new defined radius
            // xC and yC stand for the new defined centre values for the star
            var R = ( Math.sqrt( Math.pow(this.xMouse - this.xMouseStart,2) + Math.pow(this.yMouse - this.yMouseStart,2) ) )/2;
            var xC = this.xMouseStart + ((this.xMouse - this.xMouseStart)/2);
            var yC = this.yMouseStart + ((this.yMouse - this.yMouseStart)/2);
            this.drawStar(xC,yC,R,R/2.5,0,5);
        }
        else if(this.shape == "Line"){
            // draw a straight line when the line button is clicked
            this.drawLine(this.xMouseStart,this.yMouseStart,this.xMouse,this.yMouse);
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

    // drawStar x(location),y(location),outR(outer radius),inR(inner radius),rot(rotation),p(number of points)
	drawStar(x,y,outR,inR,rot,p){
	    ctx.save();
		ctx.beginPath();
        ctx.fillStyle = this.dragFill;
        ctx.strokeStyle = colArray[2][0];
		ctx.translate(x,y);
		ctx.rotate(rot*Math.PI/180);
        ctx.moveTo(0,-outR);
        
        for (var i=1; i<(p+1); i++){
		    ctx.rotate(Math.PI / p);
		    ctx.lineTo(0, -inR);
		    ctx.rotate(Math.PI / p);
		    ctx.lineTo(0, -outR);
        }

		ctx.closePath();
		ctx.fill();
		ctx.restore();
    }

    // drawLine x1(start location),y(start location), x2(end location), y(end location)
    drawLine(x1,y1,x2,y2){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.strokeStyle = this.dragFill;//dragStroke;
        ctx.lineWidth = 5;
        ctx.stroke();
    }

    // xM(x mouse),y(y mouse),wid(width of drawing canvas),heg(height of drawing canvas),
    // x(location of drawing canvas),y(location of drawing canvas)
    testBounds(xM,yM,wid,heg,x,y){
        // test conditions for when xM and yM is inside boundary
        if(xM > x && xM < x+wid && yM > y && yM < y+heg){
            return true;
        }
        else{
            return false;
        }
    }

}
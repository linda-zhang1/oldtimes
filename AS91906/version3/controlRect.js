console.log("controlRect in version3 has called");

// this is the class for a draggable rectangle
class ControlRect{
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
        // change the colour of the dragged rectangle - defult colour
        this.dragFill = colArray[2][0];
        
        // this array is to enable multiple rectangles to be drawn
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

        // test if the start and end of the rectangle drawn is in bounds
        this.startInBounds = this.testBounds(this.xMouseStart,this.yMouseStart,this.wid,this.heg,this.x,this.y); 
        this.endInBounds = this.testBounds(this.xMouse,this.yMouse,this.wid,this.heg,this.x,this.y); 

        // enable more rectangles to be drawn on the canvas
    
        if(this.startInBounds == true && this.endInBounds == true){
            var myObject = new basicRect(this.xMouseStart,this.yMouseStart,this.w,this.h,this.dragFill);

            this.objectSet.push(myObject);
            console.log(this.objectSet);
        }

    }

    // to change the colour of the dragged rectangle
    // refer to colButton.js
    setColour(c){
        this.dragFill = c;
    }

    update(){
        // draw the rectangle canvas
        this.drawBase();
        // width and height of the rectangle is the difference between the begin point and end point
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        // add the rectangles to an array so they can be drawn and stay on the canvas
        for(var i = 0; i< this.objectSet.length ; i++){
            this.objectSet[i].update();
        }

        // if the mouse is down and in bounds, draw the rectangle
        if (this.mouseDown && this.inBounds){
            //console.log("mouse is down");
            this.draw();

        }
    }

    draw(){
        this.drawRect(this.xMouseStart,this.yMouseStart,this.w,this.h);

    }

    // drawing rectangle canvas
    drawBase(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.wid,this.heg);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = colArray[2][0];
        ctx.fillStyle = this.dragFill;
        ctx.stroke();
        ctx.fill();
    }

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
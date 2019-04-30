console.log("controlRect in version1 has called");

// this is the class for a draggable rectangle
class ControlRect{
    // the current boundaries for the dragging is the js canvas
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        // this array is to enable multiple rectangles to be drawn
        this.objectSet = [];

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
        this.mouseDown = true;

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

    }

    mUp(e){
        this.mouseDown = false;
        // enable more rectangles to be drawn on the canvas
        // colours of the rectangle could be changed in later versions using buttons
        var myObject = new basicRect(this.xMouseStart,this.yMouseStart,this.w,this.h,"rgba(255,255,255,0.67)");
        this.objectSet.push(myObject);
        console.log(this.objectSet);
    }

    update(){
        // width and height of the rectangle is the difference between the begin point and end point
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        // add the rectangles to an array so they can be drawn and stay on the canvas
        for(var i = 0; i< this.objectSet.length ; i++){
            this.objectSet[i].update();
        }

        if (this.mouseDown){
            console.log("mouse is down");
            this.draw();

        }
    }

    draw(){
        this.drawRect(this.xMouseStart,this.yMouseStart,this.w,this.h);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(255,255,255,0.67)";
        ctx.stroke();
    }
}
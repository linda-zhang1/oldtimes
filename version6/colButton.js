console.log("colButton in version6 has called");

// this is the class for the colour buttons
class ColButton{
    constructor(x,y,w,h,stroke,fill,over,canvas,target){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;
        this.target = target;


        // location of mouse
        this.xMouse = 0;
        this.yMouse = 0;
        this.inBounds = false;
        this.selected = false;

        // listeners to be interactive
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        //console.log("mouse is down");

        if (this.inBounds){
            this.selected = true;
            ColButton.selected = this;
            // set the colour of the rectangle
            this.target.setColour(this.fill);
        }else{
            this.selected = false;
        }
    }


    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        // refer to testBounds function
        this.inBounds = this.testBounds(this.xMouse,this.yMouse,this.w,this.h,this.x,this.y); 

    }

    mUp(e){
        //console.log("mouse is up");

    }

    update(){
        this.draw();
    }

    draw(){
        // hover and selected colour is this.over
        if(this.inBounds == true){
            ctx.fillStyle = this.over;
        }
        else if(ColButton.selected == this){
            ctx.fillStyle = this.over;
        }
        else{
            ctx.fillStyle = this.fill;
        }

        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fill();
    }

    // xM(x mouse),y(y mouse),wid(width of drawing canvas),heg(height of drawing canvas),
    // x(location of drawing canvas),y(location of drawing canvas)
    testBounds(xM,yM,w,h,x,y){
        
        // test conditions for when xM and yM is inside boundary
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            //console.log("Mouse is in bounds");
            return true;
        }
        else{
            //console.log("mouse is out of bounds");
            return false;
        }

    }
    
}
ColButton.selected = "";
console.log("colButton in version9 has called");

// this is the class for the colour buttons
class ColButton{
    constructor(x,y,r,stroke,fill,over,canvas,target){
        this.x = x;
        this.y = y;
        this.r = r;
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
        this.inBounds = this.testBounds(this.xMouse,this.yMouse,this.x,this.y,this.r); 

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

        // change the colour button to be shaped like a circle
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    // xM(x mouse),y(y mouse),r(radius of button)
    // xC(x location of centre of button),yC(y location of centre of button)
    testBounds(xC,yC,xM,yM,r){
        // var d(distance from the centre of the button to the outside boundaries)
        var d = Math.sqrt( Math.pow(xM - xC,2) + Math.pow(yM - yC,2) );
        
        // test condition if d<r then xM and yM is inside boundary
        if(d < r){
            return true;
        }
        else{
            return false;
        }

    }
    
}
ColButton.selected = "";
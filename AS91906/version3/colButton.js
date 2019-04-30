console.log("colButton in version3 has called");

class ColButton{
    constructor(x,y,w,h,stroke,fill,over,textcol,text,canvas,target){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;
        this.text = text;
        this.textcol = textcol;
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
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = this.textcol;
        ctx.font = "bold 15px arial";
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
    }

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
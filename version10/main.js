// instantiations

// draggable shapes and base rectangle
var controlShapes1 = new ControlShapes(canvas,100,25,572,550,colArray[2][2]);

// empty colour button array (list)
var colButtonSet = [];
// colour buttons
colButtonLoop();

// empty shapes button array (list)
var shapesButtonSet = [];
// an array so that I can call the shape string using an array index
shapeStringArray = ["Rectangle","Ellipse","Star","Line","Animated Circle","Animated Five-dot","Undo","Clear"];
// shapes buttons
shapeButtonLoop();


// empty line width button array (list)
var lineWidthButtonSet = [];
// line width buttons
lineWidthButtonLoop();


function animate(){
    ctx.clearRect(0,0,width,height);

    controlShapes1.update();

    for(var i=0 ; i<colButtonSet.length ; i++){
        colButtonSet[i].update();
    }

    for(var j=0 ; j<shapesButtonSet.length ; j++){
        shapesButtonSet[j].update();
    }

    for(var k=0 ; k<lineWidthButtonSet.length ; k++){
        lineWidthButtonSet[k].update();
    }



    window.requestAnimationFrame(animate);

}

animate();

// colour buttons in a function which uses a for loop
// parameters are for variables that change for some color buttons
// x(location), y(location), t(transparency), h(hover colour), c(colour)
function colButtonLoop(x,y,t,c){
    // to start of, the values for x, y, t and c are these
    x = 25;
    y = 50;
    t = 0;
    h = 2;
    c = 3;

    
    for(var i=0 ; i<18; i++){

        // the second coloumn of buttons are placed in a different location and have different transparencies
        if(i == 6){
            x = 50;
            y = 50;
            t = 1;
            c = 3;
        }

        // the third coloumn of buttons are placed in a different location and have different transparencies
        if(i == 12){
            x = 75;
            y = 50;
            t = 2;
            h = 0;
            c = 3;
        }

        colButtonSet[i] = new ColButton(x,y,10,colArray[0][0],colArray[t][c],colArray[h][c],canvas,controlShapes1);
        // y always increases by 25
        y += 25;
        // c always increases by 1
        c += 1;
    } 
}

// shape buttons in a function which uses a for loop
// parameters are for variables that change for some shpae buttons
// x(location), y(location),w(width)
function shapeButtonLoop(x,y,w){
    // to start off, the values for x, y and w are these
    x = 685;
    y = 50;
    w = 100;

    for(var j=0; j<8; j++){

        // the animated buttons are placed underneath the line width buttons
        if(j == 4){
            y = 370;
        }

        // the undo and clear buttons are placed in different location and have a different width
        if(j == 6){
            x = 12;
            y = 300;
            w = 75;
        }

        shapesButtonSet[j] = new ShapesButton(x,y,w,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],shapeStringArray[j],canvas,controlShapes1);
        // y always increases by 60
        y += 60;
    }
}

// line width buttons in a function which uses a for loop
// parameters are for variables that change for some line width buttons
// x(location), y(location), r(radius)
function lineWidthButtonLoop(x,y,r){
    // to start off, the values for x, y and r are these
    x = 690;
    y = 300;
    r = 5;

    for(var k=0; k<8; k++){

        // the second row of buttons have different start values
        if(k == 5){
            x = 692;
            y = 340;
            r = 12;
        }

        lineWidthButtonSet[k] = new LineWidthButton(x,y,r,colArray[0][0],colArray[0][0],colArray[1][0],canvas,controlShapes1);
        
        // first row of buttons increase at these rates
        if(k < 5){
            // as the radius increases, I want the gap between the buttons to stay the same
            x = x + 2*r + 9;
            r += 1;
        }
        
        // second row of buttons increase at different rates
        else{
            // as the radius increases, I want the gap between the buttons to stay the same
            x = x + 2*r + 11;
            r += 4;
        }
        
    }
}
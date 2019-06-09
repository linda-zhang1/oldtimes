console.log("main in version7 has called");

// instantiations

// draggable shapes and base rectangle
var controlShapes1 = new ControlShapes(canvas,100,25,572,550,colArray[2][2]);

// empty colour button array (list)
var colButtonSet = [];

// colour buttons

//opaque buttons
var colb1 = new ColButton(25,50,10,colArray[0][0],colArray[0][3],colArray[2][3],canvas,controlShapes1);
var colb2 = new ColButton(25,75,10,colArray[0][0],colArray[0][4],colArray[2][4],canvas,controlShapes1);
var colb3 = new ColButton(25,100,10,colArray[0][0],colArray[0][5],colArray[2][5],canvas,controlShapes1);
var colb4 = new ColButton(25,125,10,colArray[0][0],colArray[0][6],colArray[2][6],canvas,controlShapes1);
var colb5 = new ColButton(25,150,10,colArray[0][0],colArray[0][7],colArray[2][7],canvas,controlShapes1);
var colb6 = new ColButton(25,175,10,colArray[0][0],colArray[0][8],colArray[2][8],canvas,controlShapes1);

// 0.67 transparency
var colb7 = new ColButton(50,50,10,colArray[0][0],colArray[1][3],colArray[2][3],canvas,controlShapes1);
var colb8 = new ColButton(50,75,10,colArray[0][0],colArray[1][4],colArray[2][4],canvas,controlShapes1);
var colb9 = new ColButton(50,100,10,colArray[0][0],colArray[1][5],colArray[2][5],canvas,controlShapes1);
var colb10 = new ColButton(50,125,10,colArray[0][0],colArray[1][6],colArray[2][6],canvas,controlShapes1);
var colb11 = new ColButton(50,150,10,colArray[0][0],colArray[1][7],colArray[2][7],canvas,controlShapes1);
var colb12 = new ColButton(50,175,10,colArray[0][0],colArray[1][8],colArray[2][8],canvas,controlShapes1);

// 0.33 transparency
var colb13 = new ColButton(75,50,10,colArray[0][0],colArray[2][3],colArray[0][3],canvas,controlShapes1);
var colb14 = new ColButton(75,75,10,colArray[0][0],colArray[2][4],colArray[0][4],canvas,controlShapes1);
var colb15 = new ColButton(75,100,10,colArray[0][0],colArray[2][5],colArray[0][5],canvas,controlShapes1);
var colb16 = new ColButton(75,125,10,colArray[0][0],colArray[2][6],colArray[0][6],canvas,controlShapes1);
var colb17 = new ColButton(75,150,10,colArray[0][0],colArray[2][7],colArray[0][7],canvas,controlShapes1);
var colb18 = new ColButton(75,175,10,colArray[0][0],colArray[2][8],colArray[0][8],canvas,controlShapes1);
colButtonSet.push(colb1,colb2,colb3,colb4,colb5,colb6,colb7,colb8,colb9,colb10,colb11,colb12,colb13,colb14,colb15,colb16,colb17,colb18);

// empty shapes button array (list)
var shapesButtonSet = [];

// shapes buttons
var shapesb1 = new ShapesButton(685,50,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Rectangle",canvas,controlShapes1);
var shapesb2 = new ShapesButton(685,110,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Ellipse",canvas,controlShapes1);
var shapesb3 = new ShapesButton(685,170,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Star",canvas,controlShapes1);
var shapesb4 = new ShapesButton(685,230,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Line",canvas,controlShapes1);
var shapesb5 = new ShapesButton(685,290,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Animated Circle",canvas,controlShapes1);
var shapesb6 = new ShapesButton(685,350,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][2],"Animated Five-dot",canvas,controlShapes1);
shapesButtonSet.push(shapesb1,shapesb2,shapesb3,shapesb4,shapesb5,shapesb6);



function animate(){
    ctx.clearRect(0,0,width,height);

    controlShapes1.update();

    for(var i=0 ; i<colButtonSet.length ; i++){
        colButtonSet[i].update();
    }

    for(var j=0 ; j<shapesButtonSet.length ; j++){
        shapesButtonSet[j].update();
    }



    window.requestAnimationFrame(animate);

}

animate();
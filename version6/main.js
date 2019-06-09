console.log("main in version6 has called");

// instantiations

// draggable shapes and base rectangle
var controlShapes1 = new ControlShapes(canvas,100,25,572,550,colArray[2][2]);

// empty colour button array (list)
var colButtonSet = [];

// colour buttons
var colb1 = new ColButton(10,50,80,50,colArray[0][0],colArray[0][6],colArray[1][6],canvas,controlShapes1);
var colb2 = new ColButton(10,110,80,50,colArray[0][0],colArray[0][7],colArray[1][7],canvas,controlShapes1);
var colb3 = new ColButton(10,170,80,50,colArray[0][0],colArray[0][8],colArray[1][8],canvas,controlShapes1);
var colb4 = new ColButton(10,230,80,50,colArray[0][0],colArray[0][3],colArray[1][3],canvas,controlShapes1);
var colb5 = new ColButton(10,290,80,50,colArray[0][0],colArray[0][4],colArray[1][4],canvas,controlShapes1);
var colb6 = new ColButton(10,350,80,50,colArray[0][0],colArray[0][5],colArray[1][5],canvas,controlShapes1);
colButtonSet.push(colb1,colb2,colb3,colb4,colb5,colb6);

// empty shapes button array (list)
var shapesButtonSet = [];

// shapes buttons
var shapesb1 = new ShapesButton(685,50,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Rectangle",canvas,controlShapes1);
var shapesb2 = new ShapesButton(685,110,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Ellipse",canvas,controlShapes1);
var shapesb3 = new ShapesButton(685,170,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Star",canvas,controlShapes1);
var shapesb4 = new ShapesButton(685,230,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Line",canvas,controlShapes1);
var shapesb5 = new ShapesButton(685,290,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Animated Circle",canvas,controlShapes1);
var shapesb6 = new ShapesButton(685,350,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Animated Five-dot",canvas,controlShapes1);
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
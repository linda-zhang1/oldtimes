console.log("main in version5 has called");

// instantiations

// draggable shapes and base rectangle
var controlShapes1 = new ControlShapes(canvas,100,25,572,550,colArray[2][2]);

// empty colour button array (list)
var colButtonSet = [];

// colour buttons
var colb1 = new ColButton(10,50,80,50,colArray[0][0],colArray[0][6],colArray[1][6],colArray[0][4],"Lemon",canvas,controlShapes1);
var colb2 = new ColButton(10,110,80,50,colArray[0][0],colArray[0][7],colArray[1][7],colArray[0][4],"Peach",canvas,controlShapes1);
var colb3 = new ColButton(10,170,80,50,colArray[0][0],colArray[0][8],colArray[1][8],colArray[0][4],"Blush",canvas,controlShapes1);
var colb4 = new ColButton(10,230,80,50,colArray[0][0],colArray[0][3],colArray[1][3],colArray[0][8],"Wine",canvas,controlShapes1);
var colb5 = new ColButton(10,290,80,50,colArray[0][0],colArray[0][4],colArray[1][4],colArray[0][8],"Ash",canvas,controlShapes1);
var colb6 = new ColButton(10,350,80,50,colArray[0][0],colArray[0][5],colArray[1][5],colArray[0][8],"Lime",canvas,controlShapes1);
colButtonSet.push(colb1,colb2,colb3,colb4,colb5,colb6);

// empty shapes button array (list)
var shapesButtonSet = [];

// shapes buttons
var shapesb1 = new ShapesButton(685,50,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Rectangle",canvas,controlShapes1);
var shapesb2 = new ShapesButton(685,110,100,50,colArray[0][0],colArray[0][0],colArray[1][0],colArray[0][3],"Ellipse",canvas,controlShapes1);
shapesButtonSet.push(shapesb1,shapesb2);



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
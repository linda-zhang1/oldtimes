console.log("main in buttons has called");

var buttonSet = [];

var b1 = new Button(100,100,150,50,colArray[0][3],colArray[0][4],colArray[0][5],colArray[0][6],"first button",canvas);
var b2 = new Button(100,200,150,50,colArray[0][3],colArray[0][4],colArray[0][5],colArray[0][6],"second button",canvas);
var b3 = new Button(100,300,150,50,colArray[0][3],colArray[0][4],colArray[0][5],colArray[0][6],"third button",canvas);
buttonSet.push(b1,b2,b3);

function animate(){
    ctx.clearRect(0,0,width,height);

    for(var i=0 ; i<buttonSet.length ; i++){
        buttonSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();
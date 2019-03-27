console.log("main js in dragpoints has called");

// object set array/list
var objectSet = [];

// class Points
    // parameters x (int, to locate), y(int, to locate), r(int), 
    // stroke(rgba string, colour), fill (rgba string, colour), over(if the mouse is over the point)
    // canvas(defining canvas from html)

var pointOne = new Points(200,200,10,colArray[0][6],colArray[0][4],colArray[0][5],canvas);
var pointTwo = new Points(300,200,20,colArray[0][4],colArray[0][5],colArray[0][8],canvas);
var pointThree = new Points(400,200,30,colArray[0][3],colArray[0][6],colArray[0][7],canvas);
objectSet.push(pointOne,pointTwo,pointThree);

// this is the base code for the animation loop
//it is running but at present not having any impact
// the listeners in the object are independent of the animation loop

function animate(){
    ctx.clearRect(0,0,width,height);

    for(var i=0 ; i<objectSet.length ; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}
animate();
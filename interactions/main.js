console.log("main is interactions is called");


//var testO = new TestObject(canvas);
var controlO = new ControlObject(canvas);

// this is the base code for the animation loop
//it is running but at present not having any impact
// the listeners in the object are independent of the animation loop

function animate(){
    ctx.clearRect(0,0,width,height);
    controlO.update();



    window.requestAnimationFrame(animate);

}

animate();
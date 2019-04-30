console.log("main in version2 has called");

// instantiations

var controlRect1 = new ControlRect(canvas,200,25,572,550,colArray[2][2]);


function animate(){
    ctx.clearRect(0,0,width,height);

    controlRect1.update();



    window.requestAnimationFrame(animate);

}

animate();
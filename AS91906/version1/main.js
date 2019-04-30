console.log("main in version1 has called");

var controlRect1 = new ControlRect(canvas);


function animate(){
    ctx.clearRect(0,0,width,height);
    controlRect1.update();



    window.requestAnimationFrame(animate);

}

animate();
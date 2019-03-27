console.log("main in animation has called");

var objectSet=[];

var BOne = new Ball(300,300,20,colArray[0][5]);

var BBOne = new BouncingBall(500,400,190,150,colArray[0][6],10,3,-2);
var BBTwo = new BouncingBall(500,400,190,150,colArray[0][7],10,2,1);
var BBThree = new BouncingBall(500,400,190,150,colArray[0][8],10,5,2);
var FDROne = new FivedotRotate(100,100,50,colArray[1][8],colArray[1][3],colArray[1][6],30);
var GCOne = new GrowingCircle(200,400,50,0.5,colArray[0][3]);
var GCTwo = new GrowingCircle(600,200,100,0.5,colArray[0][8]);
var RROne = new RotatingRect(400,300,30,30, colArray[0][4]);

objectSet.push(BOne,BBOne,BBTwo,BBThree,FDROne,GCOne,GCTwo,RROne);


function animate(){
    ctx.clearRect(0,0,width,height);

    for(var i =0; i< objectSet.length ; i++){
        objectSet[i].update();
    }


    window.requestAnimationFrame(animate);
}
animate();

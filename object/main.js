console.log("main js in object has called");
var myRectangle = new Rectangle(100,200,50,100,colArray[0][2]);
myRectangle.update();

var myRectangleOne = new Rectangle(200,200,50,300,colArray[1][7]);
myRectangleOne.update();

var myRectangleTwo = new Rectangle(300,200,50,300,colArray[2][6]);
myRectangleTwo.update();


var objectSet = [] // empty array (aka list)

var FDOne = new Fivedot(400,100,60,colArray[1][8],colArray[1][7],colArray[1][6]);
var FDTwo = new Fivedot(200,300,100,colArray[1][3],colArray[1][4],colArray[1][5]);
var FDThree = new Fivedot(600,300,120,colArray[1][0],colArray[1][1],colArray[1][2]);
var FDFour = new Fivedot(400,400,200,colArray[1][5],colArray[1][7],colArray[1][3]);
objectSet.push(FDOne,FDTwo,FDThree,FDFour); 

objectSet.push(new FivedotRotate(150,100,80,colArray[0][4],colArray[1][3],colArray[2][5],60));

for (var i = 0; i < objectSet.length; i++){
    objectSet[i].update();
}
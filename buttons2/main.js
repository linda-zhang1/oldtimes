console.log("main in buttons2 has called");

var rect1 = new Rectangle(250,50,100,500,"rgb(255,255,255)");
var rect2 = new Rectangle(600,50,100,500,"rgb(255,255,255)");

var growingCSet = [];

var gc1 = new GrowingCircle(300,100,30,1,colArray[2][1]);
var gc2 = new GrowingCircle(300,125,20,1,colArray[2][2]);
var gc3 = new GrowingCircle(300,150,30,1,colArray[2][1]);
var gc4 = new GrowingCircle(300,175,20,1,colArray[2][2]);
var gc5 = new GrowingCircle(300,200,30,1,colArray[2][1]);
var gc6 = new GrowingCircle(300,225,20,1,colArray[2][2]);
var gc7 = new GrowingCircle(300,250,30,1,colArray[2][1]);
var gc8 = new GrowingCircle(300,275,20,1,colArray[2][2]);
var gc9 = new GrowingCircle(300,300,30,1,colArray[2][1]);
var gc10 = new GrowingCircle(300,325,20,1,colArray[2][2]);
var gc11 = new GrowingCircle(300,350,30,1,colArray[2][1]);
var gc12 = new GrowingCircle(300,375,20,1,colArray[2][2]);
var gc13 = new GrowingCircle(300,400,30,1,colArray[2][1]);
var gc14 = new GrowingCircle(300,425,20,1,colArray[2][2]);
var gc15 = new GrowingCircle(300,450,30,1,colArray[2][1]);
var gc16 = new GrowingCircle(300,475,20,1,colArray[2][2]);
var gc17 = new GrowingCircle(300,500,30,1,colArray[2][1]);
growingCSet.push(gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,gc11,gc12,gc13,gc14,gc15,gc16,gc17);

var bouncingBSet = [];
var bb1 = new BouncingBall(600,50,100,500,colArray[1][8],10,3,2);
var bb2 = new BouncingBall(600,50,100,500,colArray[1][7],20,1,3);
var bb3 = new BouncingBall(600,50,100,500,colArray[1][6],30,4,2);
var bb4 = new BouncingBall(600,50,100,500,colArray[1][1],15,5,5);
bouncingBSet.push(bb1,bb2,bb3,bb4);

var buttonSet = [];

var b1 = new Button(50,100,150,50,colArray[0][0],colArray[0][6],colArray[1][6],colArray[0][4],"Lemon",canvas,rect1);
var b2 = new Button(50,250,150,50,colArray[0][0],colArray[0][7],colArray[1][7],colArray[0][4],"Peach",canvas,rect1);
var b3 = new Button(50,400,150,50,colArray[0][0],colArray[0][8],colArray[1][8],colArray[0][4],"Blush",canvas,rect1);

var b4 = new Button(400,100,150,50,colArray[0][0],colArray[0][3],colArray[1][3],colArray[0][8],"Wine",canvas,rect2);
var b5 = new Button(400,250,150,50,colArray[0][0],colArray[0][4],colArray[1][4],colArray[0][8],"Ash",canvas,rect2);
var b6 = new Button(400,400,150,50,colArray[0][0],colArray[0][5],colArray[1][5],colArray[0][8],"Lime",canvas,rect2);
buttonSet.push(b1,b2,b3,b4,b5,b6);

function animate(){
    ctx.clearRect(0,0,width,height);

    rect1.update();
    rect2.update();

    for(var i=0 ; i<growingCSet.length ; i++){
        growingCSet[i].update();
    }

    for(var i=0 ; i<bouncingBSet.length ; i++){
        bouncingBSet[i].update();
    }

    for(var i=0 ; i<buttonSet.length ; i++){
        buttonSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();
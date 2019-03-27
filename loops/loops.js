console.log("loops file called");

// rectangle loop
for (var i=0; i<10; i++){
    drawRectangle(100+60*i,100,50,60,colArray[1],colArray[2],5,true,true);

}

// circle loop
for(var i=0; i<10; i++){
    drawCircle(40+50*i,200,20,colArray[6],colArray[8],5,true,true);
}

for(var j=0; j<5; j++){
    drawCircle(600,30+70*j,20,colArray[3],colArray[4],5,true,true);
}

for (var i=0; i<5; i++){

    for(var j=0; j<5; j++){
        drawCircle(10+30*i,10+30*j,10,colArray[8],colArray[5],2,true,true);
    }
}

// line loop
for (var k=0; k<5; k++){

    for(var j=0; j<5; j++){
        drawLine(50,250+50*j,350,350,2,colArray[7]);
    }
}

// write text
for (var t=0; t<7; t++){
    writeText(colArray[0],"this is a loop",300,400+30*t);
}

// gradient rectangle loop
for (g=0; g<5; g++){
    drawGradientRect(450,250+70*g,100,50,colArray[5],colArray[6],colArray[7],colArray[0],2)
}





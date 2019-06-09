console.log("init js in version9 has called")

// defult set up for canvas
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// colour palette var colArray
var colArray=[
[
    "rgba(255,255,255,1)","rgba(153,153,153,1)","rgb(0,0,0,1)" ,
    "rgba(255,0,0,1)", "rgba(255,165,0,1)", "rgba(255,255,0,1)",
    "rgba(0,128,0,1)","rgba(0,0,255,1)",
    "rgba(75,0,130,1)","rgba(238,130,238,1)"
    ],

    [
        "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)","rgb(0,0,0,0.67)",
        "rgba(255,0,0,0.67)", "rgba(255,165,0,0.67)", "rgba(255,255,0,0.67)",
        "rgba(0,128,0,0.67)","rgba(0,0,255,0.67)",
        "rgba(75,0,130,0.67)","rgba(238,130,238,0.67)"
        ],

        [
            "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)","rgb(0,0,0,0.33)" ,
            "rgba(255,0,0,0.33)", "rgba(255,165,0,0.33)", "rgba(255,255,0,0.33)",
            "rgba(0,128,0,0.33)","rgba(0,0,255,0.33)",
            "rgba(75,0,130,0.33)","rgba(238,130,238,0.33)"
            ]
        ]
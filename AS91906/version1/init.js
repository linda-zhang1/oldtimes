console.log("init js in version1 has called")

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
    "rgba(255,255,255,1)", "rgba(153,153,153,1)", "rgba(0,0,0,1)", 
    "rgba(83,51,74,1)","rgba(110,99,91,1)","rgba(204,204,153,1)",
    "rgba(255,247,208,1)","rgba(247,209,160,1)", "rgba(208,136,112,1)"
    ],

    [
        "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
        "rgba(83,51,74,0.67)","rgba(110,99,91,0.67)","rgba(204,204,153,0.67)",
        "rgba(255,247,208,0.67)","rgba(247,209,160,0.67)", "rgba(208,136,112,0.67)"
        ],

        [
            "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
            "rgba(83,51,74,0.33)","rgba(110,99,91,0.33)","rgba(204,204,153,0.33)",
            "rgba(255,247,208,0.33)","rgba(247,209,160,0.33)", "rgba(208,136,112,0.33)"
            ]
        ]
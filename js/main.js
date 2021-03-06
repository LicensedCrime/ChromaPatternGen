// https://bsmg.wiki/mapping/advanced-lighting.html

// https://github.com/Aeroluna/Chroma


var stepsPerBeat = 4;


var canvas = document.getElementById("preview");
canvas.style = "background-color: black;";

var canvas_ring = document.getElementById("ring_preview");
canvas_ring.style = "background-color: black;";

var ctx = canvas.getContext("2d");
var ctx_ring = canvas_ring.getContext("2d");

include("UI");
include("JsonData");

onload(function() {
    var ui = new UI();
    var jsonData = new JsonData();

    jsonData.bindDrop();
    jsonData.ondrop = function() {
        // yeet
    };
    
    ui.generateGrid(ctx);
    ui.generateRing(ctx_ring);
});

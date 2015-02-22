//=========== global variables ===========
var axis_baseX = 0.05;
var axis_baseY = 0.90;
var axis_topY = 0.05;
var maxY = 0.1;

var point1_x = axis_baseX, point1_y = maxY;
var point2_x = 0.2, point2_y = maxY;
var point3_x = 0.7, point3_y = 0.8;
var point4_x = 2, point4_y = 0.8;


// images
var arrow_left;
var arrowY;

/*
//=========== preload()===========
function preload(){
	arrow_up = loadImage("../img/arrow_up.png");
	arrow_up.id('arrow_up'); // how can I assign html id to the loaded image?
}
*/

//=========== setup() ===========
function setup() {
	//create a canvas
	var graphAreaWidth = $("#graph-area").width();
	var graphAreaHeight = $("#graph-area").height();
	console.log("height: " + graphAreaHeight);
	console.log("width: " + graphAreaWidth);
  	var myCanvas = createCanvas(graphAreaWidth, graphAreaHeight);
  	console.log("canvas height: " + height);
  	console.log("canvas width: " + width);


  	//move the canvas inside the div of graph-area
  	myCanvas.id("graph");
  	$("#graph-area").append($("#graph"));
  	$("#graph").removeAttr("style");

	//backImage = loadImage("../img/graph_bg.png");
    //arrow_up = loadImage("../img/arrow_up.png");

}

//=========== setup() ===========
function draw() {
	//background(200);
	//image(backImage, 0, 0, graphAreaWidth, graphAreaHeight);
	//image(arrow_up, width * point2_x  , mouseY , arrow_up.width/4, arrow_up.height/4);

	console.log("arrow x: " + width * point2_x);
	console.log("arrow y: " + mouseY);

	//axis

	// // circles
	// fill(80);
	// var r = 0.05 * width;
	// ellipse(width * point2_x, height * point2_y, r, r);
	// ellipse(width * point3_x, height * point3_y, r, r);

	// fill(160);
	// var r = 0.03 * width;
	// ellipse(width * point2_x, height * axis_baseY, r, r);
	// ellipse(width * point3_x, height * axis_baseY, r, r);
//console.log("oY: " +mouseY);
//console.log("ar: " +arrowY);

}

function mouseDragged(){
	//console.log(mouseX);
	//console.log("y: "+mouseY);
	//arrowY = mouseY;

	// var r = 0.05 * width;
	// if (abs(mouseX - width * point2_x) < r && abs(mouseY - height * point2_y) < r){
	// 	if(mouseReleased()){
	// 		if(mouseX > 0 && mouseX < width){
	// 			point2_x = mouseX / width;
	// 		}
	// 	}
	// }
}

//Team Bubblegum Bears (Jeffrey Huang, Arib Chowdhury)
//SoftDev
//K26 -- They lock us in the tower whenever we get caught
//2021-05-05

// model for HTML5 canvas-based animation


//access canvas and buttons via DOM
var c =  document.getElementById("playground")// GET CANVAS
var dotButton = document.getElementById("buttonCircle") // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop") // GET STOP BUTTON
var ctx = c.getContext("2d");// YOUR CODE HERE

//set fill color to team color
ctx.fillStyle = "blue"; // YOUR CODE HERE

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {

  console.log("clear invoked...")
  ctx.clearRect(0,0,500,500);
};

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  dotButton.disabled = true;
  clear();

  // YOUR CODE HERE
  if (growing) {
    radius+=1;
    if (radius == 250) growing=false;
  }

  else {
    radius-=1;
    if (radius == 0) growing=true;
  }

  ctx.beginPath();
  ctx.arc(250, 250, radius, 0, 2 * Math.PI); // draws a circle
  ctx.fill();

  requestID = window.requestAnimationFrame(drawDot);
};

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  dotButton.disabled = false;
  window.cancelAnimationFrame(requestID);

};

dotButton.addEventListener( "click", drawDot);
stopButton.addEventListener( "click",  stopIt );

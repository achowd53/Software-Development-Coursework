//Team New York Ostriches (Anya Zorin, Arib Chowdhury)
//SoftDev
//K27 -- DVD
//2021-05-07

// model for HTML5 canvas-based animation


//access canvas and buttons via DOM
var c =  document.getElementById("playground")// GET CANVAS
var dotButton = document.getElementById("buttonCircle") // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop") // GET STOP BUTTON
var moveButton = document.getElementById("buttonMove") // GET MOVE BUTTON
var ctx = c.getContext("2d");// YOUR CODE HERE
var logo = new Image();
logo.src = "logo_dvd.jpg";
logo.onload = function(){ctx.drawImage(logo,190,210,120,80);}
var loc = [190,210];
var mv = [1,1];

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
  moveButton.disabled = true;
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

//var moveIt = function() {
var moveIt = () => {
  console.log("moveIt invoked...")
  dotButton.disabled = true;
  moveButton.disabled = true;
  clear();
  console.log( requestID );
  loc = [loc[0]+mv[0],loc[1]+mv[1]];
  ctx.drawImage(logo,loc[0],loc[1],120,80);
  if (loc[0] == 0 | loc[0] == 380) mv[0] = -mv[0];
  if (loc[1] == 0 | loc[1] == 420) mv[1] = -mv[1];
  requestID = window.requestAnimationFrame(moveIt);
};

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  dotButton.disabled = false;
  moveButton.disabled = false
  window.cancelAnimationFrame(requestID);

};

dotButton.addEventListener( "click", drawDot);
stopButton.addEventListener( "click",  stopIt );
moveButton.addEventListener( "click",  moveIt );

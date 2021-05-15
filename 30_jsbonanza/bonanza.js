var c = document.getElementById("board");
var wd = c.width;
var ht = c.height;
var ctx = c.getContext("2d");
ctx.fillColor = "black";

var requestID;
var snek = [[wd/2, ht/2], [(wd-wd/25)/2, ht/2], [(wd-2*wd/25)/2, ht/2], [(wd-3*wd/25)/2, ht/2]];
var v = [0,0];
var elapsed = 0

for (x = 0; x < snek.length; x++) ctx.fillRect(snek[x][0], snek[x][1], wd/50, ht/50);
function drawBoard() {
    ctx.clearRect(0,0,wd,ht);
    for (x = 0; x < snek.length; x++) ctx.fillRect(snek[x][0],snek[x][1], wd/50, ht/50); //Redraw Snek
    elapsed += 1 //Increment Timer
    if (v[0] != 0 | v[1] != 0) {
        if (elapsed % 3 == 0) { //Move every 3 frames
            for (x = snek.length - 1; x > 0; x--) snek[x] = [snek[x-1][0], snek[x-1][1]];
            snek[0] = [snek[0][0] + v[0], snek[0][1] + v[1]]
        }
        if (snekCollide()) gameEnd();
        else requestID = window.requestAnimationFrame(drawBoard); //Next Frame
    }
}
function snekCollide() {
    for (x = 1; x < snek.length; x++) { //Check if snek ran into itself
        if (snek[x][0] == snek[0][0] & snek[x][1] == snek[0][1]) {
            return true;
        }
    }
    return (snek[0][0] < 0 | snek[0][1] < 0 | snek[0][0] > wd | snek[0][1] > ht); //Check if snake hit wall
}
function gameEnd() {
    window.cancelAnimationFrame(requestID); //End Animation
    requestID = null;
    snek = [[wd/2, ht/2], [(wd-wd/25)/2, ht/2], [(wd-2*wd/25)/2, ht/2], [(wd-3*wd/25)/2, ht/2]]; //Reset Snek
    v = [0,0]; 
    ctx.clearRect(0,0,wd,ht);
    for (x = 0; x < snek.length; x++) ctx.fillRect(snek[x][0],snek[x][1], wd/50, ht/50); //Redraw Starting Snek
    elapsed = 0 //Restart timer
}
document.onkeypress = function turn(event) { //Check key presses for turning
    if (event.keyCode == 97 & v[0] != wd/50) v = [-wd/50,0]; //Left, A
    if (event.keyCode == 100 & v[0] != -wd/50) v = [wd/50,0]; //Right, D
    if (event.keyCode == 119 & v[1] != ht/50) v = [0,-ht/50]; //Up, W
    if (event.keyCode == 115 & v[1] != -ht/50) v = [0,ht/50]; //Down, S
    if (requestID == null & [100, 119, 115].includes(event.keyCode)) drawBoard(); //Start game upon picking direction
}

drawBoard();
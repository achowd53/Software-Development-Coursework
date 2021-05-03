//Team Bubblegum Bears (Jeffrey Huang, Arib Chowdhury)
//SoftDev
//K25 -- I See a Red Door...
//2021-05-03

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var state = null;

//clears the canvas
function doit() {
  ctx.clearRect(0,0,600,600);
  console.log("clicked clear");
}

//toggles rectangle or dot draw mode if mouse within canvas
function no() {
  var x = document.getElementById("Toggle");
  if (x.innerHTML == "Dot Mode") {
    x.innerHTML = "Rectangle Mode";
  } else {
    x.innerHTML = "Dot Mode";
  }
  state = x.innerHTML;
  console.log("Toggle clicked");
}

var offset = [null, null];
//Reads mouse click on canvas as event
c.addEventListener('click', (event) => {
  var x = document.getElementById("Toggle");
  // Fills small red rectangle (dot) at clicked location 
  if (x.innerHTML == "Dot Mode") {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(event.offsetX-3, event.offsetY-3, 3, 3);
  }
  //First time clicked, saves location in offset
  //Second time clicked, makes rectangle between offset coordinates and mouse coors
  if (x.innerHTML == "Rectangle Mode") {
    ctx.fillStyle = "#FF0000";
    if (offset[0] == null & offset[1] == null) {
      offset = [event.offsetX, event.offsetY];
    }
    else {
      ctx.fillRect(offset[0], offset[1], event.offsetX - offset[0], event.offsetY - offset[1]);
      offset = [null, null];
    }
    console.log(offset);
  }

  console.log(event.offsetX, event.offsetY);
  console.log('canvas click');
});

// Gets x coordinate in respect to top left corner of element
//e.offsetX

// Gets y coordinate in respect to top left corner of element
//e.offsetY

// prevents functions from being performed (locked mode) for testing purposes maybe
//e.preventDefault();

// begins a path, or resets the current path
//ctx.beginPath();
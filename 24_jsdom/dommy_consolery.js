// Team Bubblegum Bears :: Arib Chowdhury, Jeffrey Huang
// SoftDev pd1
// K24: Settling in to your DOMicile
// 2021-04-17

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");
var i = "hello";
var j = 20;

//assign an anonymous fxn to a var
var f = function(x) {
  var j = 30;
  return j + x;
};
// returns 30 plus input

//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };
// initialize an object to var o

//(define fact (lambda (n) ...)
var fact = function(n) {
  var prod = 1;
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};
// factorial


//(define fact (lambda (n) ...)
var factR = function(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};
// recursive factorial


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
// appends [text] to end of thelist


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
// gets the list and removes (n+1)th element


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
// gets list and for all non-blue elements makes text red


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
// gets list and for even elements makes red and odd elements blue

var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}
// prints location of the button in the html file

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);
// when button is clicked refer to butttonCallback

var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}
// tells the user that the element set to red

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}
// 1) two default colors/shades of red and black
// 2) Mousing in toggles the color green
// 3) Mousing out toggles the color blue
// 4) Clicking on a list item, sets (not toggles) the default color when blue and green aren’t toggled from black to red.ue
// [this] refers to the object that the method is being invoked on in this case the list item(s)
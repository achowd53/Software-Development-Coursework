// Team Bubblegum Bears :: Arib Chowdhury, Jeffrey Huang
// SoftDev pd1
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here


// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b % a, a);
  }
  //Develop, then implement randomStudent(), which returns a randomly selected name from a list.
  function randomStudent(lis) {
    return lis[Math.floor(Math.random()*lis.length)];
  }
  //You may want to create helper functions or external list variables here.
  
  //Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.
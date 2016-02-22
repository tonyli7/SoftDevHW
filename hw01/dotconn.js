/*
e.offsetX: x position of cursor relative to object
e.offsetY: y position of cursor relative to object
*/
var b = document.getElementById("clear");//clear button object

var c = document.getElementById("playground");//canvas object
var ctx = c.getContext("2d");

console.log(ctx);

//makes a 538 x 538 square
ctx.strokeRect(0,0,538,538);
//-------------------------

//store as previous x and y values
var prevX=0;
var prevY=0;

//boolean to account for first dot
var first=true;


function draw_dot(e){
    
    ctx.beginPath();
    ctx.fillStyle="#FF0000"
    ctx.arc(e.offsetX,e.offsetY,10,0,2*Math.PI);//circle of radius 10 at mouse cursor
    if (first){
	ctx.moveTo(e.offsetX,e.offsetY);//if first dot, move brush to cursor
	first=false;
    }else{
	ctx.moveTo(prevX,prevY);//moves brush to previous dot position
    }
    prevX=e.offsetX;
    prevY=e.offsetY;
   
    ctx.fill();

    //console.log(e.offsetX);
}

//draws line from previous dot
function draw_line(e){

    //console.log("PrevX:"+prevX);
    draw_dot(e);
  
    ctx.lineTo(e.offsetX,e.offsetY);
  
    ctx.stroke();

    //console.log("PrevX:"+prevX);
}

//clears canvas
function clear(e){
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538);
    first=true;
}

c.addEventListener("click",draw_line);
b.addEventListener("click",clear);




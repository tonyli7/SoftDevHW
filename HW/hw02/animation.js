var b = document.getElementById("circle");//clear button object

var c = document.getElementById("playground");//canvas object
var ctx = c.getContext("2d");

console.log(ctx);

//makes a 538 x 538 square
ctx.strokeRect(0,0,538,538);
//-------------------------
var radius = 0;
var growing = true;
function draw_circle(e){
    if (growing){
	radius++;
    }else{
	radius--;
    }
    if (radius == (c.width/2)){
	growing = false;
    }else if(radius == 0){
	growing = true;
    }
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538);
    ctx.beginPath();
    ctx.fillStyle="#FF0000"
    ctx.arc(c.width/2,c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    window.requestAnimationFrame(draw_circle);
}

b.addEventListener("click",draw_circle);

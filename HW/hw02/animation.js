var b = document.getElementById("circle");//circle button object
var d = document.getElementById("DVD");//dvd button object
var s = document.getElementById("stop");//stop button object
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

    requestID=window.requestAnimationFrame(draw_circle)
    
}

var logo=new Image();
logo.src="logo_dvd.jpg";
var dvdx=c.width/2;
var dvdy=c.height/2;

function dvd(e){
    console.log(this);
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538);

    ctx.drawImage(logo,dvdx,dvdy,100,100);
    window.requestAnimationFrame(dvd);
}

function stop(e){
  
    window.cancelAnimationFrame(requestID);
}

b.addEventListener("click",draw_circle);
d.addEventListener("click", dvd);
s.addEventListener("click", stop);

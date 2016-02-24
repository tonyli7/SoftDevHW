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
var dvdx=300;
var dvdy=100;
var x = Math.sqrt(2)/2;//how much x moves
var y = Math.sqrt(2)/2;//how much y moves
var direction = 135;
function dvd(e){
    console.log(this);
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538);
    if (dvdx+100 >= 538){//if touching right side
	if (direction == 135){
	    direction = 225;
	}else{
	    direction = 315;
	}
    }else if (dvdx <= 0){//if touching left side
	if (direction == 225){
	    direction = 135;
	}else{
	    direction = 45;
	}
    }else if (dvdy+100 >= 538){//if touching bottom side
	if (direction == 135){
	    direction = 45;
	}else{
	    direction = 315;
	}
    }else if (dvdy <= 0){//if touching top side
	if (direction == 45){
	    direction = 135;
	}else{
	    direction = 225;
	}
    }

    if (direction == 135){
	dvdx+=x;
	dvdy+=y;
    }else if (direction == 225){
	dvdx-=x;
	dvdy+=y;
    }else if (direction == 315){
	dvdx-=x;
	dvdy-=y;
    }else if (direction == 45){
	dvdx+=x;
	dvdy-=y;
    }

    ctx.drawImage(logo,dvdx,dvdy,100,100);
    window.requestAnimationFrame(dvd);
}

function stop(e){
  
    window.cancelAnimationFrame(requestID);
}

b.addEventListener("click",draw_circle);
d.addEventListener("click", dvd);
s.addEventListener("click", stop);

var pic = document.getElementById("vimage");
var circle = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");

console.log(pic);
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var drawDot = function (x , y){
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","30");
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke","black");
    c.addEventListener("click", change);
    pic.appendChild(c);
};

var clicked = function(e){
    if (e.toElement == this){
	drawDot(e.offsetX,e.offsetY);
    }
};
//================Circle Animate=======================
var grow = 1;
var dr = 1;
var radius = 0;
var circle_animate = function(e){
     var c = document.createElementNS(
	"http://www.w3.org/2000/svg","circle");
    //setup
    c.setAttribute("cx",250);
    c.setAttribute("cy",250);
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke","black");
    
    radius+=dr*grow//grow if grow>0 ; shrink if grow<0
    console.log(radius);
    c.setAttribute("r", radius.toString())
    console.log(radius);
    if (radius>=250){//if max size 
	grow=-1
    }else if (radius <=1){//if min size
	grow=1
    }
    pic.appendChild(c);
    pic.removeChild(pic.childNodes[0]);//removes last child
  
}

var go_circle = function(e){
    intervalID=window.setInterval(circle_animate,1);
}

var stop_circle = function(e){
    window.clearInterval(intervalID);
}
//======================================================

//====================DVD Animate=======================
var dvd_animate = function(e){
    var i = document.createElementNS(
	"http://www.w3.org/2000/svg", "image");

    i.setAttribute("x",250);
    i.setAttribute("y",250);
    i.setAttribute("height","100");
    i.setAttribute("width","100");
    i.setAttribute("http://www.w3.org/1999/xlink","href","logo_dvd.jpg");
    i.setAttribute("id","dvd_logo");

    pic.appendChild(i);
    console.log(i);
    
}

var go_dvd = function(e){
    intervalID=window.setInterval(dvd_animate,1);
}

//======================================================

circle.addEventListener("click", go_circle);
stop.addEventListener("click", stop_circle);
dvd.addEventListener("click", go_dvd);
pic.addEventListener("click",clicked);



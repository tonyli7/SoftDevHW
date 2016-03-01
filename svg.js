var pic = document.getElementById("vimage");
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

var grow = true;
var dr = 1;
var circle_animate = function(e){
    radius = parseInt(c.getAttribute("r"));
    c.setAttribute("r", radius.toString())
}

pic.addEventListener("click",clicked);



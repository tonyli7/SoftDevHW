var yes = true;
var no = false;
var democrats = [["Alabama", yes, 58],["Alaska",yes,18],["Arizona",no,75],["Arkansas",yes,37],
		 ["California",no,476],["Colorado",yes,77],["Connecticut",no,65],["Delaware",no,27],
		 ["Florida",yes,238],["Georgia",yes,112],["Hawaii",no,31],
		 ["Idaho",no,24],["Illinois",yes,190],["Indiana",no,79],["Iowa",yes,54],
		 ["Kansas",yes,37],["Kentucky",no,53],["Louisiana",yes,61],["Maine",yes,30],
		 ["Maryland",no,105],["Massachusetts",yes,121],["Michigan",yes,152],
		 ["Minnesota", yes,94],["Mississippi",yes,41],["Missouri",yes,88],["Montana",no,22],
		 ["Nebraska",yes,31],["Nevada",yes,39],["New Hampshire",yes,32],["New Jersey",no,126],
		 ["New Mexico",no,38],["New York",no,277],["North Carolina",yes,120],
		 ["North Dakota",no,19],["Ohio",yes,165],["Oklahoma",yes,42],["Oregon",no,64],
		 ["Pennsylvania",no,181],["Rhode Island",no,31],["South Carolina",yes,57],
		 ["South Dakota",no,20],["Tennessee",yes,77],["Texas",yes,237],["Utah",no,28],
		 ["Vermont",yes,23],["Virginia",yes,112],["Washington",no,102],
		 ["West Virginia",no,35],["Wisconsin",no,89],["Wyoming",no,17]];





d3.select(".chart")
    .selectAll("div")
    .data(democrats)
    .enter().append("div")
    .style("width", function(d) {
	return d[2]*4 + "px"; })
    .style("background-color", function(d){
	if (d[1]){
	    return "blue";
	}else if (!d[1]){
	    return "#81BEF7";
	}
    })
    .text(function(d) {
	return d[0]+" "+d[2];})
   


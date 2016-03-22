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

var republicans = [
    {"state": "Alabama", "pledged": 50, "unpledged": 0},
    {"state": "Alaska", "pledged": 28, "unpledged": 0},
    {"state": "Arizona", "pledged": 0, "unpledged": 58},
    {"state": "Arkansas", "pledged": 40, "unpledged": 0},
    {"state": "California", "pledged": 0, "unpledged": 172},
    {"state": "Connecticut", "pledged": 0, "unpledged": 28},
    {"state": "Delaware", "pledged": 0, "unpledged": 16},
    {"state": "Florida", "pledged": 99, "unpledged": 0},
    {"state": "Georgia", "pledged": 76, "unpledged": 0},
    {"state": "Hawaii", "pledged": 19, "unpledged": 0},
    {"state": "Idaho", "pledged": 32, "unpledged": 0},
    {"state": "Illinois", "pledged": 69, "unpledged": 0},
    {"state": "Indiana", "pledged": 0, "unpledged": 57},
    {"state": "Iowa", "pledged": 30, "unpledged": 0},
    {"state": "Kansas", "pledged": 40, "unpledged": 0},
    {"state": "Kentucky", "pledged": 46, "unpledged": 0},
    {"state": "Louisiana", "pledged": 46, "unpledged": 0},
    {"state": "Maine", "pledged": 23, "unpledged": 0},
    {"state": "Maryland", "pledged": 0, "unpledged": 38},
    {"state": "Massachusetts", "pledged": 42, "unpledged": 0},
    {"state": "Michigan", "pledged": 59, "unpledged": 0},
    {"state": "Minnesota", "pledged": 38, "unpledged": 0},
    {"state": "Mississippi", "pledged": 40, "unpledged": 0},
    {"state": "Missouri", "pledged": 52, "unpledged": 0},
    {"state": "Montana", "pledged": 0, "unpledged": 27},
    {"state": "Nebrask", "pledged": 0, "unpledged": 36},
    {"state": "Nevada", "pledged": 30, "unpledged": 0},
    {"state": "New Hampshire", "pledged": 23, "unpledged": 0},
    {"state": "New Jersey", "pledged": 0, "unpledged": 51},
    {"state": "New Mexico", "pledged": 0, "unpledged": 24},
    {"state": "New York", "pledged": 0, "unpledged": 95},
    {"state": "North Carolina", "pledged": 72, "unpledged": 0},
    {"state": "Ohio", "pledged": 66, "unpledged": 0},
    {"state": "Oklahoma", "pledged": 43, "unpledged": 0},
    {"state": "Oregon", "pledged": 0, "unpledged": 28},
    {"state": "Pennsylvania", "pledged": 0, "unpledged": 17},
    {"state": "Rhode Island", "pledged": 0, "unpledged": 19},
    {"state": "South Carolina", "pledged": 50, "unpledged": 0},
    {"state": "South Dakota", "pledged": 0, "unpledged": 29},
    {"state": "Tennessee", "pledged": 58, "unpledged": 0},
    {"state": "Texas", "pledged": 155, "unpledged": 0},
    {"state": "Utah", "pledged": 0, "unpledged": 40},
    {"state": "Vermont", "pledged": 16, "unpledged": 0},
    {"state": "Virginia", "pledged": 49, "unpledged": 0},
    {"state": "Washington", "pledged": 0, "unpledged": 44},
    {"state": "Washington, D.C.", "pledged": 19, "unpledged": 0},
    {"state": "West Virginia", "pledged": 0, "unpledged": 34},
    {"state": "Wisconsin", "pledged": 0, "unpledged": 42},
    {"state": "Wyoming", "pledged": 26, "unpledged": 0}
];

console.log(democrats)
var data=1;
var dataset=democrats;
if (data==0){
    dataset=democrats;
}else{
    dataset=republicans;
}
d3.select(".chart")
    .selectAll("div")
    .data(dataset)
    .enter().append("div")
    .style("width", function(d) {
	if (data == 0){
	    return d[2]*4 + "px"; 
	}else{
	    console.log(d["pledged"]);
	    if (d["pledged"] == 0){
	
		return d["unpledged"]*4+"px"
	    }else{
		return d["pledged"]*4+"px"
	    }
	}
    })
    .style("background-color", function(d){
	if (data == 0){
	    if (d[1]){
		return "blue";
	    }else if (!d[1]){
		return "#81BEF7";
	    }
	}else{
	    if (d["pledged"] == 0){
		return "#FF6666";
	    }else{
		return "red";
	    }
	}
    })
    .text(function(d){
	if (data == 0){
	    return d[0]+" "+d[2];
	}else{
	    if (d["pledged"] == 0){
		return d.unpledged;
	    }else{
		return d["pledged"];
	    }
	}
    });


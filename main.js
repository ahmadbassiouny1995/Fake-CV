

function halloween(d){
	return d.getMonth() === 9 
		&& d.getDate() === 31? "Bonfire toffee" : "toffee";
}

console.log(halloween(new Date("2013/10/31")));

// console.log(new Date("2013/10/31").getDate())
window.onclick = function(){
	let x = document.getElementById('filterresults');
	console.log(x.innerHTML);
	console.log("above is x; below is filter")
	let filter = document.getElementById('filterby').value;
	console.log(filter);
	console.log(filter);
	var rows = document.getElementsByTagName("tr");
	console.log(rows);
	
	let filteredResults = rows.filter(function (e){
		return e.Status == filter;
	});
	console.log(filteredResults);
	//for (var i=0; i<rows.length; i++){
		//var fullrow = rows[i].getElementsByTagName("td");
		//fullrow = fullrow[0].innerHTML;
		//fullrow.
		//console.log(fullrow);
	//}
	//x.addEventListener("click", filterResults);
}


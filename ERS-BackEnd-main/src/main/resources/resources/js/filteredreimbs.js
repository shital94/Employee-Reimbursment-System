//window.addEventListener()
window.onload = function(){
		//document.getElementById("trialSubmit").addEventListener("click", simplefunc);
		simplefunc();
	}
	function simplefunc(){
		fetch("http://localhost:8080/project1/filterby.json").then(
				function(response){
					console.log(response);
					console.log('in filterjs')
					return response.json();
				}, function() {
						console.log('second fetch reject');
				}
			).then(function(myJSON){
				console.log(myJSON);
				DOMsimple(myJSON);
			})
	}
	function DOMsimple(danJSON){
		let table = document.getElementById("reimbtableman");
		
		for (let singleR in danJSON){
			
			let obj = danJSON[singleR];
			console.log(obj);
			console.log(obj.amount);
			row = document.createElement("tr");
			cell1 = document.createElement("td");
			cell2 = document.createElement("td");
			cell3 = document.createElement("td");
			cell4 = document.createElement("td");
			cell5 = document.createElement("td");
			cell6 = document.createElement("td");
			cell7 = document.createElement("td");
			cell8 = document.createElement("td");
			cell9 = document.createElement("td");
			
			cell1.innerHTML = `${obj.idreimb}`;
			cell2.innerHTML = `${obj.amount}`;
			cell3.innerHTML = `${new Date(obj.submitted)}`;
			if(obj.resolved==null){
				cell4.innerHTML = "TBD";
			} else {
				cell4.innerHTML = `${new Date(obj.resolved)}`;
			}
			
			cell5.innerHTML = `${obj.description}`;
			cell6.innerHTML = `${obj.author}`;
			cell7.innerHTML = `${obj.resolver}`;
			if(obj.statusid==1){
				cell8.innerHTML = "Pending";
			} else if(obj.statusid==2){
				cell8.innerHTML = "Approved";
			} else {
				cell8.innerHTML = "Denied";
			}
			if(obj.rtypeid==1){
				cell9.innerHTML = "Lodging";
			}
			else if (obj.rtypeid==2){
				cell9.innerHTML = "Food";
			}
			else if (obj.rtypeid==3){
				cell9.innerHTML = "Travel";
			} else {
				cell9.innerHTML = "Other";
			}
			
			table.appendChild(row);
			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
			row.appendChild(cell4);
			row.appendChild(cell5);
			row.appendChild(cell6);
			row.appendChild(cell7);
			row.appendChild(cell8);
			row.appendChild(cell9);
			

		}
	}
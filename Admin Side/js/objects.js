// COLLECTING THE UI ELEMENTS 

const buttons = document.querySelector(".buttons");
const addMountain = document.querySelector('.add-mountain');
const submits  = document.querySelector(".row");
const name = document.querySelector("#name");
const elevation = document.querySelector("#elevaltion");
const place = document.querySelector("#location");
const tableBody = document.querySelector(".tbody");
//LOAD EVENT LISTENERS FUNCTION CALL

loadEventListener();

//LOAD EVENT LISTENER FUNCTION CREATIONS

function loadEventListener(){
	buttons.addEventListener('click', popUp);
	addMountain.addEventListener('click',createMountain);

}


// THE POPUP FUNCTION
function popUp(e){
	submits.classList.remove('hide');
	buttons.classList.add('hide')
	e.preventDefault();
}

//Creating the new mountain
function createMountain(e){
	createElement(name,elevation,place);



	

}

//FUCNTION THAT GETS CALLED BY CREATE ELEMENT
function createElement(...input){
// this function will create one table row and will append table data to it, depending on ...input
	let tr = document.createElement("tr"); // creates a new table row. only needs to be created once
	for (let i of input){
		let tdName1 =document.createElement("td"); // creates a table data
		tdName1.appendChild(document.createTextNode(i.value)); // creates can appends the value to the table data
		tr.appendChild(tdName1); // appends the created table data to the table row
		tableBody.appendChild(tr); // will append the table row to the table row
		i.value = ''// this should reset all of the values in the form

	}
}
		

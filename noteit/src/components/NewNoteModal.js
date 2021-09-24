import './cssFiles/newNoteModal.css';
import React from "react";
//---------------------------------------
export default function NewNoteModal(props) {
	React.useEffect(() => {
		minimumSetDate();
	}, []);
	return(
		<div id = "newNoteModal">
			<div id = "newNote-header">
				<h2>NoteKeeper</h2>
				<span onClick = {props.onCancel}> {/* the span is for coloring the close sign*/}
					<i className = "fas fa-times"></i>
				</span>
			</div>

			<form id = "newNote-content" method = "post" encType = "application/x-www-form-urlencoded">
				<label htmlFor = "noteName">Note Name:</label>
				<input type="text" id = "noteName"></input>
				<br></br>
				{/* ---------------------- */}
				<label htmlFor="checkB-important">Important:</label>
				<input type = "checkbox" name = "important" id = "checkB-important" required></input>
				<br></br>
				{/* ---------------------- */}
				<label htmlFor="remindDate">Remind me on:</label>
				<input type="date" name = "remindDate" id = "remindDate" required></input>
				<br></br>
				{/* ---------------------- */}
				<label htmlFor="noteMsg" required>Note:</label>
				<br></br>
				<textarea id = "noteMsg"></textarea>
				{/* ---------------------- */}
				<button id = "submit" onClick = {props.onCancel}><p>Submit</p></button>
			</form>
			
		</div>
	);
}
export function minimumSetDate() {
	let today = new Date();

	let day = today.getDate(); // typeof = number
	let month = ('0' + (today.getMonth()+1)).slice(-2); // typeof = number
	let year = today.getFullYear(); // typeof = number

	let currentDate = `${year}-${month}-${day}`; // typeof = string;
	//console.log(typeof(currentDate), currentDate);
	//------------------------------------------
	let milli = (Date.parse(currentDate) + 86400000 /* a day in milliseconds */);
	//console.log(milli);
	//------------------------------------------
	let minimumDate = new Date(milli);
	
	let minimumDay = minimumDate.getDate(); // typeof = number
	let minimumMonth = ('0' + (minimumDate.getMonth()+1)).slice(-2); // typeof = number
	let minimumYear = minimumDate.getFullYear(); // typeof = number

	currentDate = `${minimumYear}-${minimumMonth}-${minimumDay}`; // typeof = string;
	//console.log(typeof(currentDate), currentDate);

	document.getElementById("remindDate").setAttribute("min", currentDate);
};

export function checkConnection(){
	const PORT = process.env.PORT || 3001;
	//------------------------
	let noteNameInput = document.getElementById("noteName"); // form fields
	let noteImportant = document.getElementById("checkB-important"); // form fields
	let noteDateInput = document.getElementById("remindDate"); // form fields
	let noteMsgInput = document.getElementById("noteMsg"); // form fields
	
	if((noteNameInput.value === "") || (noteDateInput.value === "") || (noteMsgInput.value === "")){
		alert("A field is not properly filled!");
	} else {
		//---------------------------------
		if(noteImportant.checked){ // check if checkbox is on
			noteImportant.value = "on";
		} else {
			noteImportant.value = "off";
		}
		//---------------------------------
		let myForm = document.getElementById("newNote-content"); // form
		let method = myForm.method; // form method
		//--------------------
		let userNote = { // the object
			noteName: noteNameInput.value,
			important: noteImportant.value,
			reminder: noteDateInput.value,
			noteMsg: noteMsgInput.value,
			creationDate: creationDate()
		}
		let data = JSON.stringify(userNote);
		
		let xhr = new XMLHttpRequest();
		xhr.open(method, `http://localhost:${PORT}/api`, true);
		xhr.setRequestHeader('Content-Type', 'application/json'); //; charset=UTF-8	
		xhr.send(data);
	}
};

function creationDate(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    return currentDate;
}
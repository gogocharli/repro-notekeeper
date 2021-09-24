import './cssFiles/searchBar.css';
import React from "react";
import $ from 'jquery';
//---------------------------------------
export default function SearchBar(props) {
	return(
		<div id = "searchBar-modal">
			<input type="text" id = "searchBar" autoFocus></input>
			<div id = "btn-closeSearchBar" onClick = {props.onCancel}>
				<span> {/* the span is for coloring the close sign*/}
					<i className="far fa-times-circle"></i>
				</span>
			</div>
		</div>
	);
}
export function filterBySearchBar(){
		$(document).ready(function() {
			let searchBar = document.getElementById("searchBar");
			searchBar.addEventListener("keyup", () => {
				console.log("ola");
				//----------------
				var search = searchBar.value.toLowerCase();
				var all = document.querySelectorAll(".header span");

				for(let i of all){
					let item = i.innerHTML.toLowerCase(); // message
					if(item.indexOf(search) === -1){
						i.parentNode.parentNode.classList.add("hide");
						//console.log(i.parentNode.parentNode);
					} else {
						i.parentNode.parentNode.classList.remove("hide");
						//console.log(i.parentNode.parentNode);
					}
				}
			});
		});
}
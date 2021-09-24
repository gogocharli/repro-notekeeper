import './cssFiles/menuButtons.css';
import Backdrop from './Backdrop';
import SearchBar from './SearchBar';
import Filter from './Filter';
import NewNoteModal from './NewNoteModal';
import React, { useState } from 'react';
import { checkConnection } from './NewNoteModal';
import { filterBySearchBar } from './SearchBar';
//---------------------------------------
export default function MenuButtons() {
	window.onload = () => { // testing
		const noteDisplay = document.getElementById('noteDisplay');
		noteDisplay.addEventListener('click', () =>{
			filterClose();
		});
	}
	const [modalBackdrop, setModalBackdrop] = useState(false); // controlls backdrop
	const [modalNewNote, setModalNewNote] = useState(false); // controlls new note menu
	const [modalSearchBar, setModalSearchBar] = useState(false); // controlls searchbar
	const [modalFilter, setFilter] = useState(false); // controlls filter

    function openNewNoteModal(){
        setModalBackdrop(true); // opens backdrop
        setModalNewNote(true); // opens new note menu
    }
	function closeNewNoteModal(e){
		e.preventDefault();
		checkConnection(); // imported function
        setModalBackdrop(false); // closes backdrop
        setModalNewNote(false); // closes new note menu
	}
    function backdropClose(){
        setModalBackdrop(false); // closes backdrop
        setModalNewNote(false); // closes new note menu
        setFilter(false); // closes searchbar
    }
    //--------------------
    function searchBarOpen(){
        setModalSearchBar(true); // opens searchbar
		filterBySearchBar();
    }
    function searchBarClose(){
        setModalSearchBar(false); // closes searchbar
    }
    //--------------------
	function filterOpen(){
        setFilter(true); // opens searchbar
    }
    function filterClose(){
        setModalBackdrop(false); // closes backdrop
        setFilter(false); // closes filter
    }
    //--------------------
	return(
		<div id = "menu-for-btns">
			<div id = "btn-addNewNote" onClick = {openNewNoteModal}>
				<span> {/* the span is for coloring the plus sign*/}
					<i className="fas fa-plus"></i>
				</span>
			</div>

			<div id = "btn-openSearchBar" onClick = {searchBarOpen}>
				<span> {/* the span is for coloring the magnifying glass sign*/}
					<i className="fas fa-search"></i>
				</span>
			</div>

			<div id = "btn-filter" onClick = {filterOpen}>
				<span> {/* the span is for coloring the magnifying glass sign*/}
					<i className="fas fa-filter"></i>
				</span>
			</div>

			{modalBackdrop && <Backdrop onCancel = {backdropClose}/>} {/* if modalBackdrop is true and Backdrop is true (which is always true), execute Backdrop */}
			{modalNewNote && <NewNoteModal onCancel = {closeNewNoteModal}/>} {/* same */}
			{modalSearchBar && <SearchBar onCancel = {searchBarClose}/>} {/* same */}
			{modalFilter && <Filter onCancel = {filterClose}/>} {/* same */}
		</div>
	);
}


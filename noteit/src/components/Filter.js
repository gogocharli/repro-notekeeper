import './cssFiles/filter.css';
//---------------------------------------
export default function Filter(props){
    return(
        <div id = "filter-container">
            <FilterOptions content = "Important" onClick = {filterImportant}/>
            <FilterOptions content = "All" onClick = {filterAll}/>
            <FilterOptions content = "Close" onClick = {props.onCancel}/>
        </div>
    );
}

function FilterOptions(props){
    return(
        <div className = "filterOption" onClick = {props.onClick}>
            <p>{props.content}</p>
        </div>
    );
}
function filterImportant(){
    const off = document.getElementsByClassName('off');
    for(let i = 0; i < off.length; i++){
        off[i].style.display = "none";
    }
}
function filterAll(){
    const note = document.getElementsByClassName('note');
    for(let i = 0; i < note.length; i++){
        note[i].style.display = "inline-block";
    }
}
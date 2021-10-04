import './cssFiles/backdrop.css';
//---------------------------------------
export default function Backdrop(props) {
	return(
		<div id = "backdrop" onClick = {props.onCancel}></div>
	);
}
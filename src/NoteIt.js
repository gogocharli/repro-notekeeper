import Header from './components/Header';
import MenuButtons from './components/MenuButtons';
import Check from './components/underTheHood/NoteChecker';
//-------------------------------------
export default function NoteIt() {
  return (
    <div id = "container" >
      <Header />
      <MenuButtons />
      <Check />
    </div>
  );
}
// https://fontawesome.com/
import React from 'react';
import '../cssFiles/noteChecker.css';
//-------------------------------------
export default function Check() {
  //const [data, setData] = React.useState(null);
  React.useEffect(() => {
    //--------------------------------------
    const fetchFile = async () => {
      const req = await fetch(`/api`);
      const data = await req.json(); // is a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
      const noteDisplay = document.getElementById('noteDisplay');
      //-------------------------------
      if (data.notes.length < 1) {
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'msg');
        let innerMsg = document.createTextNode("There aren't any notes!");
        paragraph.appendChild(innerMsg);
        //-----------------------
        noteDisplay.append(paragraph);
        //console.log(paragraph);
      } else {
        noteDisplay.style.display = 'block';
        data.notes.forEach((note) => {
          /*note*/ let div = document.createElement('div'); // creation of the note
          div.classList.add(note.noteName);
          div.classList.add('note'); // giving them class "note"
          //---------------------
          /*importantOrNot*/ function isImportantOrNot() {
            if (note.important === 'off') {
              div.classList.add('off');
            }
          }
          //---------------------
          /*note-header*/ let header = document.createElement('div'); // created the header
          header.setAttribute('class', 'header'); // then gave it the "header" class
          div.appendChild(header); // and then append the header to the "note"

          let spanHeader = document.createElement('span'); // lets create a span to hold the noteName
          let noteName = document.createTextNode(note.noteName); // then we get the object key/value pair
          spanHeader.appendChild(noteName); // then we append to the span the noteName
          header.appendChild(spanHeader); // and to the header the span
          //---------------------
          /*note-body*/ let body = document.createElement('div');
          body.setAttribute('class', 'body');
          div.appendChild(body);

          let spanBody = document.createElement('span');
          let noteMsg = document.createTextNode(note.noteMsg);
          spanBody.appendChild(noteMsg);
          body.appendChild(spanBody);
          //---------------------
          noteDisplay.append(div); // then adding them to the "note display"
          //console.log(note.noteName);
          //---------------------
          /*note-footer*/ let footer = document.createElement('div');
          footer.setAttribute('class', 'footer');
          div.appendChild(footer);

          let spanFooter = document.createElement('span');
          let noteCreationDate = document.createTextNode(
            `Creation date: ${note.creationDate}`,
          );
          spanFooter.appendChild(noteCreationDate);
          footer.appendChild(spanFooter);
          //----------------------
          isImportantOrNot();
        });
      }
    };
    fetchFile();
  });
  //------------------------------
  return <div id='noteDisplay'></div>;
}

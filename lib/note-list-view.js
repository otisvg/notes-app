// Has a method that, when called, returns a string of HTML that represents the note list model.
//  For example:
//  <ul>
//   <li><div>Favourite food: pesto</div></li>
//  <li><div>Favourite drink: seltzer</div></li>
//  </ul>.
// Handles a note list model that has no notes, one note or several notes.



class Notelistview {

  constructor(noteList = new Notelist){
    this.noteList = noteList;
  }

  allNotes() {
    var noteListArray = this.noteList;
    var htmlNoteArray = [];

    noteListArray.forEach(note =>  {
      htmlNoteArray.push(`<li><div>${note}</div></li>`);
    });

    var something = `<ul>${htmlNoteArray.join("")}</ul>`
    return something  
  }
}

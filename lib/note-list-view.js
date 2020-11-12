class Notelistview {

  constructor(noteList = new Notelist){
    this.noteList = noteList;
  }

  allNotes() {
    var htmlNoteArray = [];

    this.noteList.forEach(note =>  {
      htmlNoteArray.push(`<li><div>${note.returnNote()}</div></li>`);
    });

    return `<ul>${htmlNoteArray.join("")}</ul>`
  }
}

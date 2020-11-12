class Notelistview {
  constructor(noteList = new Notelist){
    this.noteList = noteList.returnNotes();
  }

  allNotes() {
    var htmlNoteArray = [];

    this.noteList.forEach(note =>  {
      htmlNoteArray.push(`<li><div>${note.returnNote()}</div></li>`);
    });
    
    // for loop - kept for reference
    // for(let i = 0; i < this.noteList.length; i++){
    //   htmlNoteArray.push(`<li><div>${this.noteList[i].returnNote()}</div></li>`);
    // }

    return `<ul>${htmlNoteArray.join("")}</ul>`
  }
}

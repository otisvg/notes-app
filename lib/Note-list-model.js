class Notelist {

  constructor() {
    this.savedNotes = []
  }

  addNote(note) {
    var newNoteInstance = new Note(note)
    this.savedNotes.push(newNoteInstance.note)
  }

  returnNotes() {
     return (this.savedNotes.length === 1 ? this.savedNotes[0] : this.savedNotes.join(", "))
  }

}

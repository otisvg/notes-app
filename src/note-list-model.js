class Notelist {

  constructor() {
    this.savedNotes = []
  }

  addNote(note) {
    var newNoteInstance = new Note(note)
    this.savedNotes.push(newNoteInstance)
  }

  returnNotes() {
    return this.savedNotes
  }
}
"1. Fav food: something, 2. Fave drink: something"
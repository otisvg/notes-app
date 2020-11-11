class Notelist {

  constructor() {
    this.savedNotes = []
  }

  addNote(note) {
    this.note = new Note(note)
    this.savedNotes.push(this.note)
  }

  returnNotes() {
    for (let i = 0; i < this.savedNotes.length; i++) {
      return this.savedNotes[i]
    }
  }

}

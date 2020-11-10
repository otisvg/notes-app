class Notelist {

  constructor() {
    this.savednotes = []
  }

  addNote(note) {
    this.note = new Note(note)
    this.savednotes.push(this.note)
  }

  returnNotes(notes = this.savednotes) {
    for (let i = 0; i < this.savednotes.length; i++) {
      return this.savednotes[i].savednote
    }
  }

}

class NoteController {
  constructor(noteList = new Notelist){
    this.noteList = noteList
    this.noteList.addNote("Favourite drink: seltzer")
    this.view = new Notelistview(this.noteList)
  }

  render(){
    document.getElementById("app").innerHTML = this.view.allNotes()
  }
}

noteController = new NoteController
noteController.render()
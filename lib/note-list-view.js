class Notelistview {

  constructor(start = new Notelist){
    this.viewnotes = start
  }

  allNotes() {
    return "<ul><li><div>Fav food = beef</div></li><li><div>Fav drink = beer</div></li></ul>"
  }

}

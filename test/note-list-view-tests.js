function testListViewReturns() {
  var noteview = new Notelistview();
  var note = new Note("Fav food = beef")
  var note = new Note("Fav drink = beer")
  assert.isTrue(noteview.allNotes() = "Fav food = beef, Fav drink = beer");
};

testListViewReturns()

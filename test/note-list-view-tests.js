(function testListViewReturns(exports) {
  //mocking?
  var noteList = new Notelist();
  noteList.addNote("Fav food = beef");
  noteList.addNote("Fav drink = beer");

  var noteListView = new Notelistview(noteList.returnNotes());

  assert.isTrue(noteListView.allNotes() === "Fav food = beef, Fav drink = beer");
})(this);

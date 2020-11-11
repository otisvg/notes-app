(function testListViewReturns(exports) {
  //mocking?
  var noteList = new Notelist();
  noteList.addNote("Fav food = beef");
  noteList.addNote("Fav drink = beer");

  console.log(noteList.returnNotes());
  
  var noteListView = new Notelistview(noteList.savednotes);

  assert.isTrue(noteListView.allNotes() === "Fav food = beef, Fav drink = beer");
})(this);



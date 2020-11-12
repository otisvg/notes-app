(function testListViewReturns() {

  var noteList = new Notelist();
  noteList.addNote("Fav food = beef");
  noteList.addNote("Fav drink = beer");

  var noteListView = new Notelistview(noteList.savedNotes);
  console.log(noteListView.allNotes());

  assert.isTrue(noteListView.allNotes() === `<ul><li><div>Fav food = beef</div></li><li><div>Fav drink = beer</div></li></ul>`
    );
})(this);


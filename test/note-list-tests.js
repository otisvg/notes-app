function testNotesArrayExists() {
  var note = new Notelist();
  assert.isTrue(Array.isArray(note.savednotes));
};

function testNotesArrayLength() {
  var note = new Notelist();
  assert.isTrue(Array.length === 1);
};

function testOutputNotes() {
  var notelist = new Notelist();
  notelist.addNote("test")
  assert.isTrue(notelist.savedNotes[0] === "test");
};

function testReturnsAllNotes() {
  var notelist = new Notelist();
  notelist.addNote("test")
  assert.isTrue(notelist.returnNotes() === "test");

};

testNotesExist();
testNotesArrayLength();
testOutputNotes();
testReturnsAllNotes()

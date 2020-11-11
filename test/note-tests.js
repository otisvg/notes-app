// note-tests.js

function testNotesExist() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.note === "My favourite language is JavaScript");
};

function testNotesReturn() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.returnNote() === "My favourite language is JavaScript");
};

testNotesExist();
testNotesReturn()

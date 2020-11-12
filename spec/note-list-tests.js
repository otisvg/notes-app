  (function() {

  var notelist = new Notelist();
  notelist.addNote("test")

  function testNotesArrayExists() {
    assert.isTrue(Array.isArray(notelist.savedNotes));
  };

  function testNotesArrayLength() {
    assert.isTrue(notelist.savedNotes.length === 1);
  };

  function testOutputNotes() {
    assert.isTrue(notelist.savedNotes[0].note === "test");
  };

  function testReturnsAllNotes() {
    assert.isTrue(notelist.returnNotes() === notelist.savedNotes);
  };
  
  testNotesArrayExists();
  testNotesArrayLength();
  testOutputNotes();
  testReturnsAllNotes()

})()
  
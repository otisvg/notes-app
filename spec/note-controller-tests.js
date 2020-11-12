(function () {
  var noteList = new Notelist;
  noteList.addNote("our test note");
  var noteController = new NoteController(noteList);

  function noteControllercanBeInstantiated() {
      assert.isTrue(noteController instanceof NoteController);
   }

  function renderOutputsHTMLToPage (){
      noteController.render();
      console.log(document.getElementById("app").innerHTML);
      assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>our test note</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
   }

  renderOutputsHTMLToPage();
  noteControllercanBeInstantiated();
})();
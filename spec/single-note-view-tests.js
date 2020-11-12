(function() {
  var note = {
    returnNote: function(){
      return 'Test Note'
    }
  }
  var singleNoteView = new SingleNoteView(note);

  function singleNoteViewModelCanBeInstantiated(){
    assert.isTrue(singleNoteView instanceof SingleNoteView)
  }

  function singleNoteViewInitializedWithNoteModel(){
    assert.isTrue(singleNoteView.note === note)
  }

  function returnsNoteModelHTMLString(){
    assert.isTrue(singleNoteView.outputHTML() === "<div>Test Note</div>")
  }


  
  singleNoteViewModelCanBeInstantiated();
  singleNoteViewInitializedWithNoteModel();
  returnsNoteModelHTMLString();
})();
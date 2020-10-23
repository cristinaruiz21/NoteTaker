// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on notes
// ===============================================================================

var router = require("express").Router();
var notes = require("../db/notes");



// ===============================================================================
// ROUTING
// ===============================================================================

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  router.get("/api/notes", function(req, res) {
    notes.getNotes().then(data => res.json(data)).catch(err => res.json(err))
  });

  router.post("/api/notes", function(req, res) {
    notes.addNotes(req.body).then(data => res.json(data)).catch(err => res.json(err))
  });


  router.delete("/api/notes/:id", function(req,res){
    notes.deleteNotes(req.params.id).then(()=> res.json({ok:true})).catch(err => res.json(err))
  })

  module.exports = router;
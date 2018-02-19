
//=================================================
// dependencies
//=================================================
import React from "react";
import Express from "express";
import Request from "request";
import mongojs from "mongojs";
// const router = express.Router();
const Articles = require("../models/articles.js");

//=================================================
// global variables
//=================================================

//=================================================
// Functions
//=================================================


//-----------------------------------------------------
// bulk insert the newly scraped articles into the
// collection
//-----------------------------------------------------
function insertNewArticles(currentArticles, res) {
  Articles.insertMany(currentArticles, function (err, data) {
    if (err) {
      console.log(`There was a DB error from insertNewArticles: ${err} `);
      res.status(500).end();
    } else {
      let result = data.length.toString();
      res.send(result);
    }
  });
}

//-----------------------------------------------------------
// delete a note from an article in the database, from the 
// notes modal
//-----------------------------------------------------------
function deleteANote(req, res) {
  console.log("im in deleteANote");
  Articles.findByIdAndUpdate(req.params.id, {
    $pull: {"notes": req.body.note},
    new: true,
    multi: false
  }).then(function (data) {
    res.render("saved", {
      notes: data.notes
    });
  }).catch(function (err) {
    console.log(`There was a DB error - deleteANote: ${err}`);
    res.status(500).send("A Server Error Occurred");
  });
}


//-----------------------------------------------------
// retrieve the previously scraped articles from the
// Article collection to populate the saved article page
//-----------------------------------------------------
function getSavedArticles(req, res) {
  console.log("IM IN getSavedArticles");
  Articles.find().where('saved').equals(true)
    .then(function (savedArticles) {
      console.log(savedArticles);
      res.render("saved", {
        "savedArticles": savedArticles
      })
    }).catch(function (err) {
      console.log(`DB Error from getSavedArticles: ${err}`);
    });
}



//==============
// ROUTES
//==============


//----------------------------------------------
// get saved articles from the database
//----------------------------------------------
router.get("/api/articles", function (req, res) {
  getSavedArticlesFromDB(req, res);
});

//----------------------------------------------
// add an article to  the database
//----------------------------------------------
router.post("/api/articles", function (req, res) {
  saveArticlestoDB(req, res);
});

//----------------------------------------------
// add an article to  the database
//----------------------------------------------
router.delete("/api/articles/:id", function (req, res) {
  deleteSavedArticlesFromDB(req, res);
});


//--------------------------------------
// Export routes for server.js to use.
//--------------------------------------
module.exports = router;
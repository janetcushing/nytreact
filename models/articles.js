
// Require mongoose
import mongoose from "mongoose";

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
var NYTArticlesSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "title is Required",
    validate: [
      function(input) {
        return input.length >= 1;
      },
      "String should be longer."
    ]
  },
  link: {
    type: String,
    trim: true,
    required: "link is Required"
  }, 
  date_published: {
    type: String,
    trim: true,
    required: "date published is Required"
  }
});

var NYTArticles = mongoose.model("NYTArticles", NYTArticlesSchema);

module.exports = NYTArticles;

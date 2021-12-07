var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);

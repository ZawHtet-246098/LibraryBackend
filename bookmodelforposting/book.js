const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
  title: String,
  dataId: Number,
  pageCount: String,
  publishAdt: Number,
  fileSize: String,
  downloadCount: String,
  coverImage: String,
  category: String,
  tags: Array,
  author: String,
  link: String,
});

// export default mongoose.model("bookModel", bookModel);
module.exports = mongoose.model("bookModel", bookModel);

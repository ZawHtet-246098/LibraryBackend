import mongoose from "mongoose";

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
  category: String,
});
export default mongoose.model("bookModels", bookModel);

// import mongoose from "mongoose";

// const bookModel = new mongoose.Schema({
//   title: String,
//   dataId: Number,
//   pageCount: String,
//   publishAdt: Number,
//   fileSize: String,
//   downloadCount: String,
//   coverImage: String,
//   category: String,
//   tags: Array,
//   author: String,
//   link: String,
// });

// export default mongoose.model("Books", bookModel);
// // module.exports = mongoose.model("Books", bookModel);

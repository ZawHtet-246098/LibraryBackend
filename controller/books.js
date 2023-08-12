import express from "express";
import mongoose from "mongoose";

import bookModels from "../models/book.js";

export const getBooks = async (req, res) => {
  try {
    const Technology = await bookModels
      .find({ category: "Technology" })
      .limit(20);
    const Business = await bookModels
      .find({ category: "Business & Career" })
      .limit(20);
    const Academic = await bookModels
      .find({ category: "Academic & Education" })
      .limit(20);
    const Fiction = await bookModels
      .find({ category: "Fiction & Literature" })
      .limit(20);
    const Editor = await bookModels
      .find({ category: "Editor's Picks" })
      .limit(20);
    const Politics = await bookModels
      .find({ category: "Politics & Laws" })
      .limit(20);
    const Health = await bookModels
      .find({ category: "Health & Fitness" })
      .limit(20);
    const Child = await bookModels
      .find({ category: "Children & Youth" })
      .limit(20);
    const Lifestyle = await bookModels
      .find({ category: "Lifestyle" })
      .limit(20);
    const Science = await bookModels
      .find({ category: "Science & Research" })
      .limit(20);
    const Most = await bookModels.find({ category: "Most Popular" }).limit(20);
    const Art = await bookModels.find({ category: "Art" }).limit(20);
    const Environment = await bookModels
      .find({ category: "Environment" })
      .limit(20);
    const Personal = await bookModels
      .find({ category: "Personal Growth" })
      .limit(20);
    const Religion = await bookModels.find({ category: "Religion" }).limit(20);
    const Biography = await bookModels
      .find({ category: "Biography" })
      .limit(20);

    const allBooks = [
      { name: "Technology", data: Technology },
      { name: "Business & Career", data: Business },
      { name: "Academic & Education", data: Academic },
      { name: "Fiction & Literature", data: Fiction },
      { name: "Editor's Picks", data: Editor },
      { name: "Politics & Laws", data: Politics },
      { name: "Children & Youth", data: Child },
      { name: "Health & Fitness", data: Health },
      { name: "Lifestyle", data: Lifestyle },
      { name: "Science & Research", data: Science },
      { name: "Most Popular", data: Most },
      { name: "Art", data: Art },
      { name: "Environment", data: Environment },
      { name: "Personal Growth", data: Personal },
      { name: "Religion", data: Religion },
      { name: "Biography", data: Biography },
    ];

    res.status(200).json(allBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllBooksForSearchBarSuggestion = async (req, res) => {
  try {
    const allBooks = await bookModels.find();
    let nameArray = [];
    allBooks.map((book) => {
      nameArray.push(book.title);
    });
    res.status(200).json(nameArray);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBooksByPage = async (req, res) => {
  const { page, category } = req.query;
  let newCategory;

  switch (category) {
    case "Business ":
      newCategory = "Business & Career";
      break;
    case "Academic ":
      newCategory = "Academic & Education";
      break;
    case "Fiction ":
      newCategory = "Fiction & Literature";
      break;
    case "Politics ":
      newCategory = "Politics & Laws";
      break;
    case "Health ":
      newCategory = "Health & Fitness";
      break;
    case "Children ":
      newCategory = "Children & Youth";
      break;
    case "Science ":
      newCategory = "Science & Research";
      break;
    default:
      newCategory = category;
      break;
  }

  console.log(newCategory);

  try {
    const LIMIT = 24;
    const startIndex = (Number(page) - 1) * LIMIT;

    const total = await bookModels
      .find({ category: newCategory })
      .countDocuments({});
    const books = await bookModels
      .find({ category: newCategory })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: books,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getExactBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookModels.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSearchBook = async (req, res) => {
  const { title } = req.query;
  console.log(title);

  const newTitle = { $regex: title, $options: "i" };
  try {
    const book = await bookModels.find({ title: title });
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

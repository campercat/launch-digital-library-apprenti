import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get("/", async (req, res) => {
  // your code here
  try{
    const books = await Book.findAll()
    debugger
    res.json({ books:books })
  }catch(error){
    console.error(`Error in Fetch: ${error.message}`)
    res.status(500).json({ errors: error })
  }
})

booksRouter.get("/:id", async (req, res) => {
  const bookId = req.params.id
  debugger
  try{
    const book = await Book.findById(bookId)
    debugger
    res.json({book:book})
  }catch(err){
    console.error(`Error in Fetch: ${err.message}`)
  }
})

export default booksRouter
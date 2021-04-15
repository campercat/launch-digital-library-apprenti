import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/launch_digital_library_development"
})

class Book {
  constructor({title, author, page_count, description, fiction, id=null}) {
    this.id = id
    this.title = title
    this.author = author
    this.page_count = page_count
    this.description = description
    this.fiction = fiction
  }

  static async findAll() {
    try{
      debugger
      const result = await pool.query('SELECT * FROM books;')
      const bookData = result.rows
      const books = bookData.map(book => {
        debugger
        console.log(book)
        return new this(book)
      })
      debugger
      return books
    }catch(error){
      console.log(`errors: ${error}`)
      throw(error)
    }
  }

  static async findById(id) {
    try{
      const result = await pool.query(`SELECT * FROM books WHERE id= ${id}`)
      const book = result.rows[0]
      return book
    }catch(error){
      console.log(`errors: ${error}`)
    }
  }
}

export default Book
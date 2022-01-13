const mongoose = require('mongoose')

const url = 'mongodb://localhost/'


//Connects to localhost as a database
mongoose.connect(url)
.then(() => console.log('Connected'))
.catch((e) => console.log('Error: ' + e))


//Schema to create a database model
const bookSchema = mongoose.Schema({
  author: String,
  title: String,
  date: Date,
  stock: Number
},
{
  versionKey: false
})

//Model i'm gonna use for practically everything
const BookModel = mongoose.model('Books', bookSchema)


//creates a new document
const create = async (author, title, date, stock) => {
  const book = new BookModel({
    author: author,
    title: title,
    date: date,
    stock: stock
  })
  const result = await book.save()
  console.log(result)
}

//Returns an array of all the existing documents
const readAll = async () => {
  const books = await BookModel.find()
  console.log(posts)
}


//Modify a document by id (Needs more work)
const update = async (id, author, title, date, stock) => {
  const book = await BookModel.updateOne({
    _id: id
  },
  {
    $set: {
      author: author,
      title: title,
      date: date,
      stock: stock
    }
  })
}



//Delete a document by its ID
const delete = async (id) => {
  const book = await BookModel.deleteOne({_id: id})
  console.log(book)
}

create('Rabos', 'Libro gamer', new Date(), 5)

readAll()

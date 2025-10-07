
'use strict'

function getBookById(books,bookId){
   const book = books.find(book => book.id == bookId);
   if(!book){
    console.error("No existe esa id en el array de libros");
    return null
   }
   return book;

}

function getBookIndexById(books,bookId){
    const posicion = books.findIndex(book => book.id==bookId);
    return 

}

export{
    getBookById,
}
/*export {
  getBookById
  getBookIndexById,
  bookExists,
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNote,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode 
}*/

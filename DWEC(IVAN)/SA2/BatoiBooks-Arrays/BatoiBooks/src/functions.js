
'use strict'

function getBookById(books, bookId) {
  if (books.length === 0) {
    console.error("El array de libreso está vacio");
    return null;
  }
  let book = books.find(book => book.id === bookId);
  if (!book) {
    console.error("No existe esa id en el array de libros");
    return null
  }
  return book;

}

function getBookIndexById(books, bookId) {
  if (books.length === 0) {
    console.error("El array de libreso está vacio");
    return null;
  }
  const posicion = books.findIndex((book) => book.id === bookId);

  if (posicion === -1) {
    console.error("El valo que está buscando no existe.")
    return null
  }
  return posicion;
}

function bookExists(books, userId, moduleCode) {
  let comprobante = books.some((book) => book.userId === userId && book.moduleCode == moduleCode);
  if (!comprobante) {
    console.error("No se han pasado los parametros correctos.");
    return false
  }
  return comprobante;

}

function booksFromUser(books, userId) {
  let librosArray = books.filter(book => book.userId === userId);
  return librosArray;
}

function booksFromModule(books, moduleCode) {
  return books.filter(book => book.moduleCode === moduleCode)

}
function booksCheeperThan(books, price) {
  let librosArray = books.filter(book => book.price <= price)
  return librosArray;
}
function booksWithStatus(books, status) {
  let libros = books.filter(book => book.status === status);
  return libros;

}
function averagePriceOfBooks(books){
   let total= ((books.reduce((total, book) => total+=book.price,0))/books.length).toFixed(2) +"€";
   return total;
}
function booksOfTypeNote(books){
  return books.find(book => book.publisher === "Apunts")

}
function booksNotSold(books){
  soldDate
}
function incrementPriceOfbooks(books,percentage){
  
}

function getUserById(users,userId){
  
}
function getUserIndexById(users,userId){
  
}
function getUserByNickName(users,nick){
  
}
function getModuleByCode(modules,modeuleCode){
  
}
export {
  getBookById,
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
}

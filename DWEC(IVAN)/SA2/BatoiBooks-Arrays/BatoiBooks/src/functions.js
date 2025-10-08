
'use strict'

function getBookById(books, bookId) {
  return books.length > 0
    ? books.find(book => book.id === bookId) || (() => { throw new Error("No se ha encontrado el libro por la id") })()
    : (() => { throw new Error("No se han encontrado libros") })();
}

function getBookIndexById(books, bookId) {
  if (books.length === 0) {
    throw new Error("Error al buscar mediante index una id de un libro");
  }
  const posicion = books.findIndex((book) => book.id === bookId);

  if (posicion === -1) {
    throw new Error("Error libro no encontrado");
  }
  return posicion;
}

function bookExists(books, userId, moduleCode) {
  return books.some((book) => book.userId === userId && book.moduleCode == moduleCode);
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
function averagePriceOfBooks(books) {

  if (!Array.isArray(books) || books.length === 0) return "0.00 €";
  return ((books.reduce((total, book) => total += book.price, 0)) / books.length).toFixed(2) + " €"

}

function booksOfTypeNotes(books) {

  if (!Array.isArray(books)) throw new Error("Se esperaba un array de libros");

  const bookType = books.filter(book => book.publisher == "Apunts")

  if (bookType.length === 0) return [];

  return bookType;

}




function booksNotSold(books) {
  return Array.isArray(books)
    ? books.filter(book => !book.soldDate) || (() => { throw new Error("Error a la hora buscar si se ha publicado") })()
    : (() => { })()
}


/*Hasta aquí tiene que estar bien*/
function incrementPriceOfbooks(books, percentage) {
  return (percentage > 0 && !isNaN(percentage))
    ? books.map(book => ({
      ...book,
      price: +(book.price + book.price * percentage).toFixed(2) //el + lo que hace es pasar el string a numero
    }))
    : (() => { throw "Error al introducir porcentajes" })();
}

function getUserById(users, userId) {
  return users.length > 0
    ? users.find(user => user.id === userId) || (() => { throw new Error("Error a la hora de buscar mediante Index la id de un usuario") })()
    : (() => { throw "Error a la hora de buscar por una id" })();

}
function getUserIndexById(users, userId) {
  if (users.length < 0)
    throw new Error("Error a la hora de buscar mediante Index la id de un usuario");

  const indexUserId = users.findIndex(user => user.id === userId)

  return indexUserId !== -1
    ? indexUserId
    : (() => { throw new Error("Error a la hora de buscar por indice un id") })();
}
function getUserByNickName(users, nick) {
  return users.length > 0
    //En caso de que no encuentre el nick lo que hace es pasar a la otra parte entonce envía el throw
    ? users.find(user => user.nick === nick) || (() => { throw new Error("Nickname no encontrado") })()
    : (() => { throw new Error("Error a la hora de obtener el nombre por el nickname") })();
}

function getModuleByCode(modules, modeuleCode) {
  return modules.length > 0
    ? modules.find(modul => modul.code === modeuleCode) || (() => { throw new Error("No se ha encontrado el modulo") })()
    : (() => { throw new Error("Error a la hora de obtener los modulos") })();
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
  booksOfTypeNotes,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode
}

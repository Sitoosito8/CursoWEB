import data from './src/services/datos';
import * as functions from './src/functions';


console.log(functions.getBookById(data.books,1));
console.log(functions.getBookIndexById(data.books,6));
console.log(functions.bookExists(data.books,3,5021));
console.log(functions.booksFromUser(data.books,4));
console.log(functions.booksFromModule(data.books,"5025"));
console.log(functions.booksCheeperThan(data.books,60))
console.log(functions.booksWithStatus(data.books, "good"));
console.log(functions.averagePriceOfBooks(data.books));
console.log(functions.booksOfTypeNote(data.books));
console.log(functions.booksNotSold(data.books));
console.log(functions.incrementPriceOfbooks(data.books,0.1));
console.log(functions.getUserById(data.users,2));
console.log(functions.getUserIndexById(data.users,5));
console.log(functions.getUserByNickName(data.users,"Marta"));
console.log(functions.getModuleByCode(data.modules,"5025"));
console.log("Aplicación BatoiBooks cargada correctamente");
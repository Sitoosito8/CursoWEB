import data from './src/services/datos';
import * as functions from './src/functions';


console.log(functions.getBookById(data.books,1));
console.log("Aplicación BatoiBooks cargada correctamente");
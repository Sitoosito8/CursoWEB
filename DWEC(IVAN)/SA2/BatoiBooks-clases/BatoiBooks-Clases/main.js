import data from './src/services/datos.js';
import Books from './src/model/books.class.js';
import Modules from './src/model/modules.class.js';
import Users from './src/model/users.class.js'

const libros = new Books();
const modulos = new Modules();
const usuarios = new Users();

libros.populate(data.books);
modulos.populate(data.modules);
usuarios.populate(data.users);

let librosModulos = libros.booksFromModule("5021");

console.log("Mostramos por consola todos los libros del módulo 5021");
librosModulos.forEach(libroMod => {
    console.log(libroMod);
})

let librosEstado = libros.booksWithStatus("new");
console.log("Mostramos los que están nuevos (estado new)");
librosEstado.forEach(libroEst => {
    console.log(libroEst);
})

let librosIncrement = libros.incrementPriceOfbooks(10);
console.log("Incrementamos un 10% el precio de los libros y los mostramos por consola");
librosIncrement.forEach(libroInc =>{
    console.log(libroInc);
})


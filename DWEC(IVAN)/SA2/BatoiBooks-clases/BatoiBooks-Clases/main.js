import data from './src/services/datos.js';
//import * as  functions from './src/functions.js';
import Books from './src/model/books.class.js';

const books = new Books();

books.populate(data.books);

books.data.forEach(libro => {
    console.log(libro);
});



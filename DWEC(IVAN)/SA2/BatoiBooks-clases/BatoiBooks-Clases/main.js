import data from './src/services/datos.js';
import Books from './src/model/Books.class.js';

const books = new Books();

books.populate(data.books);

books.data.forEach(libro => {
    console.log(libro);
});



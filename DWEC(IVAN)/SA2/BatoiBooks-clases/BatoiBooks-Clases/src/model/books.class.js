import Book from './book.class';

export default class Books {
    constructor() {
        this.data = [];
    }

    populate(datosLibros) {
        this.data = datosLibros.map(libro => new Book(libro));
    }

    addBook(objetoLibro) {
        let nuevoid = this.data.length > 0 ? Math.max(...this.data.map(libro => libro.id)) + 1 : 1;
        let nuevoLibro = new Book({ id: nuevoid, ...objetoLibro });
        this.data.push(nuevoLibro);
        return nuevoLibro;
    }

    removeBook(idLibro) {
        let indice = this.data.findIndex(libro => libro.id === idLibro);
        if (indice === -1) throw new Error("Error al borrar el libro que se ha intentado borrar.")
        this.data.splice(indice, 1);


    }

    changeBook(libro) {
        let indice = this.data.findIndex(lib => lib.id === libro.id);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los libros");
        this.data[indice] = new Book(libro);
        return this.data[indice];
    }

    getBookById() { }

    getBookIndexById() { }
    bookExists() { }
    booksFromUser() { }
    booksFromModule() { }
    booksCheeperThan() { }
    booksWithStatus() { }
    averagePriceOfBooks() { }
    booksOfTypeNotes() { }
    booksNotSold() { }
    incrementPriceOfbooks() { }



    toString() {
        if (this.data.length === 0) return [];
        return this.data.map(libro => libro.toString()).join("\n");
    }


}
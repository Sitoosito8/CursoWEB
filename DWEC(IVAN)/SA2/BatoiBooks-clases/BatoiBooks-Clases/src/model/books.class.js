import Book from './book.class.js';

export default class Books {
    constructor() {
        this.data = [];
    }

    populate(datosLibros) {
        this.data = datosLibros.map(lib => new Book(lib));
    }

    addBook(objetoLibro) {
        let nuevoid = this.data.length > 0 ? Math.max(...this.data.map(lib => lib.id)) + 1 : 1;
        let nuevoLibro = new Book({ id: nuevoid, ...objetoLibro });
        this.data.push(nuevoLibro);
        return nuevoLibro;
    }

    removeBook(idLibro) {
        let indice = this.data.findIndex(lib => lib.id === idLibro);
        if (indice === -1) throw new Error("Error al borrar el libro que se ha intentado borrar.")
        this.data.splice(indice, 1);


    }

    changeBook(libro) {
        if(!libro) throw new Error("Error al establecer el libro");
        let indice = this.data.findIndex(lib => lib.id === libro.id);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los libros");
        this.data[indice] = new Book(libro);
        return this.data[indice];
    }

    getBookById(bookId) {
        let libro = this.data.find(lib => lib.id === bookId);
        if (!libro) throw new Error("Libro no encontrado por su ID")
        return libro;

    }

    getBookIndexById(bookId) {
        let indiceLibro = this.data.findIndex(lib => lib.id === bookId);
        if (indiceLibro === -1) throw new Error("Lorbo no encontrado por su ID mediante Index");
        return indiceLibro;
    }

    bookExists(userId, moduleCode) {
        return this.data.some(lib => lib.userId === userId && lib.moduleCode === moduleCode)
    }
    booksFromUser(userId) {
        return this.data.filter(lib => lib.userId === userId);
    }

    booksFromModule(moduleCode) {
        return this.data.filter(lib => lib.moduleCode === moduleCode);
    }

    booksCheeperThan(price) {
        return this.data.filter(lib => lib.price <= price);
    }

    booksWithStatus(status) {
        return this.data.filter(lib => lib.status === status);

    }

    averagePriceOfBooks() {
        if (this.data.length === 0) return "0.00 €";
        return (this.data.reduce((total, libprice) => total += libprice.price, 0) / this.data.length).toFixed(2) + " €";

    }

    booksOfTypeNotes() {
        let libType = this.data.filter(lib => lib.publisher === "Apunts");
        if (libType.length === 0) return [];
        return libType;
    }

    booksNotSold() {
        let lista=this.data.filter(lib => !lib.soldDate);
        if(lista.length === 0) return [];
        return lista;
    }

    incrementPriceOfbooks(percentage) {
        if(percentage<0) throw new Error("Error, porcentaja inferior a 0");
        return this.data.map(lib =>({...lib, price: +(lib.price * percentage).toFixed(2)}));
    }



    toString() {
        if (this.data.length === 0) return [];
        return this.data.map(libro => libro.toString()).join("\n");
    }


}
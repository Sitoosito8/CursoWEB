export default class Book {
    constructor(dato = {}) {
        this.id = dato.id;
        this.userId = dato.userId;
        this.moduleCode = dato.moduleCode;
        this.publisher = dato.publisher;
        this.price = dato.price;
        this.pages = dato.pages;
        this.status = dato.status;
        this.soldDate = dato.soldDate ?? "";
        this.photo = dato.photo ?? "";
        this.comments = dato.comments ?? "";
    }

    toString() {
        return "Id Libro :" + this.id + "\nTitulo Libro :" + this.title + "\n" +
            "Autor Libro : " + this.author + "\nISBN Libro: " + this.isbn + "\n" +
            "Precio Libro : " + this.price + "\nCondicion Libro: " + this.condition + "\n" +
            "ID Usuario Libro : " + this.userId + "\nModulo ID Libro: " + this.moduleCode + "\n" +
            "Foto Libro:" + this.photo + "\nComentarios Libro : " + this.comments + "\n" +
            "Fecha Salida Libro: " + this.soldDate;
    }
}
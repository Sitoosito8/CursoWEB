export default class Book {
    //
    constructor(id, title, author, isbn, price, condition, userId, moduleId, photo = "", comments = "", soldDate = "") {
        this.id = id || "";
        this.title = title || "";
        this.author = author || "";
        this.isbn = isbn || "";
        this.price = price || "";
        this.condition = condition || "";
        this.userId = userId || "";
        this.moduleId = moduleId || "";
        this.photo = photo || "";
        this.comments = comments || "";
        this.soldDate = soldDate || "";
    }

    toString() {
        return "Id Libro :" + this.id + "\nTitulo Libro :" + this.title + "\n" +
            "Autor Libro : " + this.author + "\nISBN Libro: " + this.isbn + "\n" +
            "Precio Libro : " + this.price + "\nCondicion Libro: " + this.condition + "\n" +
            "ID Usuario Libro : " + this.userId + "\nModulo ID Libro: " + this.moduleId + "\n" +
            "Foto Libro:" + this.photo + "\nComentarios Libro : " + this.comments + "\n" +
            "Fecha Salida Libro: " + this.soldDate;
    }
}
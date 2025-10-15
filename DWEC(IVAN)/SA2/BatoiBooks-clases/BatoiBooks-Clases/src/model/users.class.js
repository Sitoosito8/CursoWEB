import User from "./user.class.js";
export default class Users {
    constructor() {
        this.data = [];
    }

    populate(datosUsuario) {
        this.data = datosUsuario.map(usuario => new User(usuario));

    }
    addUsers(usuarioArray) {
        let id = 1;
        if (this.data.length !== 1) id = Math.max(...this.data.map(user => user.id)) + 1;
       
        let nuevoUsuario = new Users(id, ...usuarioArray);
        this.data.push(nuevoUsuario);

        return nuevoUsuario;
    }
    removeUsers(idUsuario) {
        let indice = this.data.findIndex(user => user.id === idUsuario);
        if (indice === -1) throw new Error("Error al borrar el usuario que se ha intentado borrar");
        this.data.splice(indice, 1);

    }
    changeUsers(user) {
        let indice = this.data.findIndex(usuario => usuario.id === user.id);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los Usuarios")
        this.data[indice] = user;
        return user;

    }
    toString() {
        if (this.data.length === 0) return [];
        return this.data.map(user => user.toString()).join("\n")
    }
}
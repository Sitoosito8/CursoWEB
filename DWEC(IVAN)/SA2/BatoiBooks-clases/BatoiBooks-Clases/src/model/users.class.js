import User from "./user.class.js";
export default class Users {
    constructor() {
        this.data = [];
    }

    populate(datosUsuario) {
        this.data = datosUsuario.map(usuario => new User(usuario.id, usuario.nick, usuario.email, usuario.password));
    }
    addUser(usuarioArray) {
        let nuevoId = this.data.length > 0 ? Math.max(...this.data.map(us => us.id)) + 1 : 1;

        let nuevoUsuario = new User(nuevoId, usuarioArray.nick, usuarioArray.email, usuarioArray.password);
        this.data.push(nuevoUsuario);

        return nuevoUsuario;
    }

    removeUser(idUsuario) {
        let indice = this.data.findIndex(user => user.id === idUsuario);
        if (indice === -1) throw new Error("Error al borrar el usuario que se ha intentado borrar");
        this.data.splice(indice, 1);

    }
    changeUser(user) {
        let indice = this.data.findIndex(usuario => usuario.id === user.id);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los Usuarios")
        this.data[indice] = new User(user.id, user.nick, user.email, user.password);
        return this.data[indice];
    }

    getUserById(idUser) {
        let usuario = this.data.find(user => user.id === idUser);
        if (!usuario) throw new Error("Error a la hora de buscar por la id del Usuario")
        return usuario
    }
    getUserIndexById(userId) {
        let indiceUsuarioId = this.data.findIndex(user => user.id == userId);
        if (indiceUsuarioId === -1) throw new Error("Error al buscar el indice del Usuario");
        return indiceUsuarioId;
    }
    getUserByNickName(nick) { 

        let nickUsuario = this.data.find(niUs=>niUs.nick === nick);
        if(!nickUsuario) throw new Error("Error al buscar el usuario por su Nick")
        return nickUsuario;

    }

    toString() {
        if (this.data.length === 0) return [];
        return this.data.map(user => user.toString()).join("\n")
    }
}
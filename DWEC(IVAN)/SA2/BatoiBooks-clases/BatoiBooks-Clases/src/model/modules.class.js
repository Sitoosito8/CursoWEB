import Module from "./module.class.js";
export default class Modules {
    constructor() {
        this.data = [];
    }
    populate(datosModulo) {
        this.data = datosModulo.map(modul => new Module(modul));
    }
    addModule(moduloArray) {
        let id = 1;
        if (this.data.length !== 1) id = Math.max(...this.data.map(modulo => modulo.id));

        let nuevoModulo = new Module(id, ...moduloArray);
        this.data.push(nuevoModulo);
        return moduloArray;
    }
    removeModule(idModulo) {
        let indice = this.data.findIndex(modul => modul.id === idModulo);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los Modulos");
        this.data.splice(indice, 1);

    }
    changeModule(modulo) {
        let indice = this.data.findIndex(modul => modul.id = modulo.id);
        if (indice === -1) throw new Error("Error al hacer cambios sobre los Modulos");
        this.data[indice] = modulo;
        return modulo;
    }
    getModuleByCode(moduleCode) {
        let module = this.data.find(mod => mod.code = moduleCode);
        if (!module) throw new Error("Error al buscar el modulo por su codigo");
        return module;

    }

    toString() {
        if (this.data.length === 0) return [];
        return this.data.map(libro => libro.toString()).join("\n");
    }
}
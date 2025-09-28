function edad() {
    let edad = prompt('Introduce una edad :');
    let mensaje = comprobanteEdad(edad);
    console.log(mensaje);
    mostrarMensaje(mensaje);
}
function comprobarDecimal(valor) {
    return !Number.isInteger(Number(valor));

}

function comprobarString(valor) {
    return isNaN(valor) || valor.trim() === "";
}

function comprobanteEdad(edad) {
    try {
        if (comprobarString(edad)) return "La edad introducida no es un número";

        let numeroEdad = Number(edad);
        console.log(numeroEdad);

        if (numeroEdad < 0) return "la edad debe ser superior a 0";

        if (comprobarDecimal(numeroEdad)) return "Introduce la edad sin decimales";


        if (numeroEdad < 18 && numeroEdad >= 0)
            return "Menor de edad";
        else if (numeroEdad >= 18 && numeroEdad < 65)
            return "Trabajando o estudiando";
        else
            return "Jubilado";



    } catch (error) {
        console.error("La edad introducida, no es correcta!<br>" + error);
    }

};
mostrarMensaje = mensaje => alert(mensaje);


edad();
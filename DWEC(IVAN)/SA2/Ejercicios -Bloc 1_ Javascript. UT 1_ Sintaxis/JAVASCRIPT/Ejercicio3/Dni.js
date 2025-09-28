function dni() {
    let comprobante = false
    do {
        let dniIntroducido = pedirDni("Introduce el DNI:", "DNI INTRODUCIDO: ");
        if (comprobarDni(dniIntroducido)) {
            comprobante = true;
            alert("DNI correcto");

        } else {
            alert("DNI incorrecto");
        }
    } while (!comprobante)

}


function pedirDni(mensaje, mensajeAlert) {
    let dni = prompt(mensaje)
    alert(mensajeAlert + dni)
    return dni;
}

function formatoValido(dni) {
    dni = String(dni).trim().toUpperCase();
    const regex = /^\d{8}[A-Z]$/;
    return regex.test(dni);
}

function calcularLetra(numero) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras[numero % 23];
}

function comprobarDni(dni) {
    dni = String(dni).trim().toUpperCase();

    if (!formatoValido(dni)) return false;

    const numero = parseInt(dni.slice(0, 8), 10);
    const letraIntroducida = dni.at(-1);
    const letraCorrecta = calcularLetra(numero);

    return letraIntroducida === letraCorrecta;
}

dni();
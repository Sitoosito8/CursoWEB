

function intervaloHoras() {
    contenido();
}

/* Inicio Comprobantes*/

function comprobarFecha(fecha) {
    fecha = String(fecha);
    return fecha.includes(":");
}

function comprobaIntervalo(intervalo, fechaInicio, fechaFin){
    return intervalo<=60;
}
function comprobanteCalculo(minutos, intervalo) {
    return (minutos + intervalo) > 60;

}

function comprobarSuperarHoraFin(horaActualizada, fechaFin) {


}
function sumaIntervalo(minutos, intervalo) {
    return minutos + intervalo;
}
function restarIntervalo(minutos, intervalo) {
    return minutos - intervalo;
}
/*Fin Comprobantes*/


/*Inicio Pedir Datos*/
function pedirFechaInicial() {
    let comprobante = false

    do {
        let fechaInicio = pedirHora("Introduce la fecha de inicio(HH:MM):", "Fecha Inicio: ");
        if (comprobarFecha(fechaInicio)) {
            return fechaInicio;
        }


    } while (comprobante);

}

function pedirFechaFin() {
    let comprobante = false

    do {
        let fechaFin = pedirHora("Introduce la fecha de fin(HH:MM):", "Fecha Fin: ");
        if (comprobarFecha(fechaFin)) {
            return fechaFin;
        }


    } while (comprobante);

}

function pedirIntervalo(fechaInicio, fechaFin) {
    let comprobante = false

    do {
        let intervalo = pedirHora("Introduce los minutos del intervalo:", "Intervalo (Minutos):");
        if (comprobaIntervalo(intervalo)) {
            return intervalo;
        }


    } while (comprobante);

}

function pedirHora(mensaje, mensajeAlert) {
    let hora = prompt(mensaje)
    alert(mensajeAlert + hora)
    return hora;
}
/*Fin Pedir Datos*/





/*Inicio Calculos*/
function cambioHora(fecha, intervalo, fechaFin) {
    let separadoFechaInicio = separacionFecha(fecha);
    let separadoFechaFin = separacionFecha(fechaFin);

    if (comprobanteCalculo(separado[1], intervalo) && comprobarSuperarHoraFin(fechaFin)) {
        sumaIntervalo();
        muestroHora();
    }

}

function separacionFecha(fecha) {
    return fecha.split(":") = String(fecha);
}
/*Fin Calculos*/




function pasarMinutos(fechaSeparada){

    return ((fechaSeparada[0]*60)+ fechaSeparada[1]);


}

function contenido() {
    let comprobante
    let fechaFin
    let intervalo
    do {
        let fechaInicio = pedirFechaInicial();
        let fechaInicioMin = pasarMinutos(separacionFecha(fechaInicio));
        fechaFin = pedirFechaFin();
        intervalo = pedirIntervalo();


    } while (fechaActualizada < fechaFin);
}

intervaloHoras()
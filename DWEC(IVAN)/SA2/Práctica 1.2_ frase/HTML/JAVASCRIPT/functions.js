export function letters(frase) {
    return frase.length;

}

export function words(frase) {
    return frase.split(" ").length;

}

export function upperString(frase) {
    return String(frase).toUpperCase();
}

export function titleString(frase) {
    let palabras = frase.split("");
    let fraseFinal = "";
    for (let i = 0; i < palabras.length; i++) {
        fraseFinal = (palabras[i - 1] == " ")
            ? fraseFinal += (upperString(palabras[i]))
            : fraseFinal += (palabras[i]);
    }
    return fraseFinal;
}

export function backwardsLetters(frase) {
    let fraseFinal = "";
    for (let i = frase.length; i >= 0; i--) {
        fraseFinal += frase.charAt(i);
    }
    return fraseFinal;
}

export function backwardsWords(frase) {
    let palabras = frase.split(" ");
    let fraseFinal = "";
    for (let i = palabras.length - 1; i >= 0; i--) {
        fraseFinal += palabras[i] + " ";
    }
    return fraseFinal.trim();
}

export function palindrome(frase) {
    let fraseVuelta = backwardsLetters(frase);
    let fraseFinal = fraseVuelta.replace(/\s+/g, "");// \S+ uno o más espacios en blanco && /g es para que lo haga en toda la cadena

    if (frase.replace(/\s+/g, "").toUpperCase() == fraseFinal.toUpperCase()) {
        return true;
    }

    return false;
}


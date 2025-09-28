"use strict";
import { use } from 'react';
import {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
} from './functions.js';


function mostrarDatos() {

    let frase = prompt("Frase:");

    console.log(letters(frase) + " letras y " + words(frase) + " palabras");
    console.log(upperString(frase));
    console.log(titleString(frase));
    console.log(backwardsLetters(frase));
    console.log(backwardsWords(frase));
    console.log(palindrome(frase) ? "Sí es un palídermo" : "No es un palídermo");
}
mostrarDatos();
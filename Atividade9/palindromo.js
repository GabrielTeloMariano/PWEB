function palindromo() {
    var entrada = prompt("Digite uma palavra:");
    var inversa = entrada.split("").reverse().join("");
    if (entrada == inversa) {
        return("Sim, é um palíndromo!");
    } else {
        return("Nao, não é um palíndromo 😢");
    }
}
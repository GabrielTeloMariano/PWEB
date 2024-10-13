function maior() {
    var num1 = prompt("Digite o 1o numero");
    var num2 = prompt("Digite o 2o numero");
    var num3 = prompt("Digite o 3o numero");
    if(num1 > num2 && num1 > num3){
        return("Maior número: " + num1);
    }else if(num2 > num1 && num2 > num3){
        return("Maior número: " + num2);
    }else{
        return("Maior número: " + num3);
    }
}
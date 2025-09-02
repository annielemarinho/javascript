function triangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3) {
        return "Triângulo Equilátero"
    }
    else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        return "Trângulo Escaleno"
    }
    else {
        return "Triângulo Isósceles"
    }

}

console.log(triangulo(5, 5, 4))
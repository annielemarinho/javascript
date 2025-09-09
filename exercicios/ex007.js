function bhaskara( a, b, c) {
    let delta = b ** 2 - 4 * a * c
    if(delta < 0){
        return "Delta é negativo"
    }else{
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return [x1, x2]
    }
}

console.log(bhaskara(1, -5, 6))
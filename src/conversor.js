
const conversorARomanos = (number) => {
    const decenasRoamanas = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    if(decenasRoamanas.length >= number){
        return decenasRoamanas[number-1]
    }else{
        const nuevoIndice = number - 10;
        return  `X${decenasRoamanas[nuevoIndice -1]}`
    }
    return undefined;
}

module.exports = conversorARomanos;
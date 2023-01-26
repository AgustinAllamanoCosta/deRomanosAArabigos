
const conversorARomanos = (number) => {
    const numerosRomanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
    for (let i=0; i <= numerosRomanos.length; i++) {
        if (i + 1 === number) {
                return numerosRomanos[i];
            }
    }
    return undefined;
}

module.exports = conversorARomanos;
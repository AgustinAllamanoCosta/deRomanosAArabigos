const conversorARomanos = require("../src/conversor.js");

test('Dado el numero 10 espero obtener el simbolo X',() => {
    const numero10EnArabigo = 10;
    const numero10EnRomano = "X";
    const valorObtenidoDelConversor = conversorARomanos(numero10EnArabigo);
    expect(valorObtenidoDelConversor).toBe(numero10EnRomano);
})

test('Dado el numero 11 espero obtener el simbolo XI',() => {
    const numero11EnArabigo = 11;
    const numero11EnRomano = "XI";
    const valorObtenidoDelConversor = conversorARomanos(numero11EnArabigo);
    expect(valorObtenidoDelConversor).toBe(numero11EnRomano);
})
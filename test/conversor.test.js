// aL HACER TESTS SIEMPRE DE A UNO (eso es ser metodico). En caso de hacer varios dejarlos vacios sin llenar. Puedo comentar que voy a implementar tests para no olvidar casos de test

const conversorARomanos = require("../src/conversor.js");

test("Should return the correct value converter.", () => {
    const converterValue = conversorARomanos(1);
    expect(converterValue).toBe("I");
})

test("Should return IV if the parameter is 4", () => {
    const converterValue = conversorARomanos(4)
    expect(converterValue).toBe("IV")
})

test("Should return V if the parameter is 5", () => {
  const converterValue = conversorARomanos(5);
  expect(converterValue).toBe("V");
});

test("Should return VI if the parameter is 6", () => {
  const converterValue = conversorARomanos(6);
  expect(converterValue).toBe("VI");
});

test("Should return IX if the parameter is 9", () => {
  const converterValue = conversorARomanos(9);
  expect(converterValue).toBe("IX");
});

test("Should return X if the parameter is 10", () => {
  const converterValue = conversorARomanos(10);
  expect(converterValue).toBe("X");
});


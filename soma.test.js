const soma = require ("./soma.js");
//teste ou it - especificar novo teste
test("Soma de dois números", () => {
    const result = soma.add(5,5)
    // expect - especifica resultado esperado
    expect(result).toEqual(10);
});
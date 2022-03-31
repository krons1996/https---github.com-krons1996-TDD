const subtracao = require ("./subtracao.js");
//teste ou it - especificar novo teste
test("Subtração de dois números", () => {
    const result = subtracao.add(5,5)
    // expect - especifica resultado esperado
    expect(result).toEqual(0);
});
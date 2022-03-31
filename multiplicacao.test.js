const multiplicacao = require ("./multiplicacao.js");
//teste ou it - especificar novo teste
test("Multiplicacão de dois números", () => {
    const result = multiplicacao.add(5,5)
    // expect - especifica resultado esperado
    expect(result).toEqual(25);
});
const divisao = require ("./divisao.js");
//teste ou it - especificar novo teste
test("Divisão de dois números", () => {
    const result = divisao.add(5,5)
    // expect - especifica resultado esperado
    expect(result).toEqual(1);
});
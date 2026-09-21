import {test, expect, describe} from 'vitest'


describe('Calcular raiz quadrada de um número', () => {

    test("Raiz quadrada de uma numero perfeito: 4", () => {

        expect(Math.sqrt(-1)).toBeNaN();
    });


    test("Retorna 0 se o numero for 0", () => {
        expect(Math.sqrt(0)).toBe(0);
    });
})
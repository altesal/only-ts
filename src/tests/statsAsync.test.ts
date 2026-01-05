import * as statsAsync from "../statsAsync";

describe.only("Stats", () => {
    it("Calcula la suma de un array de numeros (async)", async () => {
        const result = await statsAsync.sum([1,2,3]);
        const expected = 6;
        expect(expected).toBe(result);
    });

    it("Calcula la media de un array de numeros  (async)", async () => {
        const result = await statsAsync.average([1,2,3]);
        const expected = 2;
        expect(expected).toBe(result);
    });
});

import { sum , average} from "../stats";

let result, expected;

describe("Stats", () => {
    it("Calcula la suma de un array de numeros", () => {
        result = sum([1,2,3]);
        expected = 6;
        expect(expected).toBe(result);
    });

    it("Calcula la media de un array de numeros", () => {
        result = average([1,2,3]);
        expected = 2;
        expect(expected).toBe(result);
    });
});





import { en } from "./strings";

describe("strings.js", () => {
    describe("en", () => {
        test("it should be defined", () => {
            expect(en).toBeDefined();
        });
        test("it should be of type object", () => {
            expect(en instanceof Object).toBeTruthy();
        });
    });
});
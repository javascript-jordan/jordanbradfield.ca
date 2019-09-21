import { convertToString, convertToObject } from "./util";

describe("util.js", () => {
    describe("convertToString()", () => {
        test("it should convert a json object to string", () => {
            expect(convertToString({name: "Jordan"})).toBe("{\"name\":\"Jordan\"}");
        });
        test("it should convert an array to string", () => {
            expect(convertToString(["jordan", 1, true])).toBe("[\"jordan\",1,true]");
        });
        test("it should convert a number to string", () => {
            expect(convertToString(42)).toBe("42");
        });
        test("it should return null as a string when passed null", () => {
            expect(convertToString(null)).toBe("null");
        });
        test("it should return an empty string when undefined is passed", () => {
            expect(convertToString()).toBe("");
        });
    });
    describe("convertToObject()", () => {
        test("it should return a JSON object when passed a stringified object", () => {
            expect(convertToObject("{\"name\":\"Jordan\"}")).toStrictEqual({"name": "Jordan"});
        });
        test("it should return an iterable array when passed a stringified array", () => {
            expect(convertToObject("[\"name\", \"Jordan\", 23]")).toStrictEqual(["name", "Jordan", 23]);
        });
        test("it should return null when passed null", () => {
            expect(convertToObject(null)).toBe(null);
        });
    })
});
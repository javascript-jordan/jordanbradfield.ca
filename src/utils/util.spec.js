import { convertToString, convertToObject, convertToLocation, xhr, extractDateComparrison, parseTemplateString } from "./util";

import config from "../config";

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
    });
    describe("convertLocationToString()", () => {
        test("it should return a location string: Halifax, Nova Scotia, Canada", () => {
            expect(convertToLocation({country: "Canada", regionName: "Nova Scotia", city: "Halifax", isp: "Fido"})).toBe("Halifax, Nova Scotia, Canada - Fido");
        });
    });
    describe("extractDateComparrison()", () => {
        let startDate = new Date("2017-09-30"), endDate = new Date("2019-09-29");
        test("it should return an object", () => {
            expect(typeof extractDateComparrison(startDate, endDate)).toBe("object");
        });
        test("it should return a valid date comparrison object", () => {
            expect(extractDateComparrison(startDate, endDate).days).toBe(729);
        });
    });
    describe("parseTemplateString()", () => {
        test("it should return an interpolated string: 'Hello Jordan'", () => {
            expect(parseTemplateString("Hello <%=name=>", {name: "Jordan"})).toBe("Hello Jordan");
        });
    });
    describe("xhr()", () => {
        test("it should reject if no configuration object was passed", () => {
            expect(xhr()).rejects.toStrictEqual({"code": config.errors.INVALID_XHR_CONFIG});
        });
        test("it should reject if method configuration parameter is missing", () => {
            expect(xhr({base: "https://jordanbradfield.ca"})).rejects.toStrictEqual({"code": config.errors.INVALID_XHR_CONFIG});
        });
        test("it should reject if base configuration parameter is missing", () => {
            expect(xhr({path: "/test"})).rejects.toStrictEqual({"code": config.errors.INVALID_XHR_CONFIG});
        });
        test("it should reject if path configuration parameter is missing", () => {
            expect(xhr({method: "post"})).rejects.toStrictEqual({"code": config.errors.INVALID_XHR_CONFIG});
        });
        test("it should reject if base is non existant in config", () => {
            expect(xhr({method: "post", base: "someapibase", path: "/hello"})).rejects.toStrictEqual({"code": config.errors.NON_EXISTANT_API_BASE});
        });
        test("it should reject if passed an invalid method", () => {
            expect(xhr({method: "invalidmethod", base: "someapibase", path: "/hello"})).rejects.toStrictEqual({"code": config.errors.INVALID_REQUEST_METHOD});
        });
        test("it should resolve with data when requesting a valid api", async () => {
            expect(await xhr(config.xhr.endpoints.testing)).toHaveProperty("status", 200);
        });
    });
});
const config = require("./config");

test("it should return type boolean for detecting prod environment", () => {
    expect(config.constants.isProduction).toBeDefined();
});
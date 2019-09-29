var isProduction = (function(){
    try {
        return window.location.protocol !== "localhost";
    } catch (error) {
        try {
            return process.env.NODE_ENV === "production";
        } catch (error) {
            throw new Error("Did not detect window or process object. Where is the code being run?");
        }
    }
}());

module.exports = {
    api: {

    },
    constants: {
        isProduction: isProduction,
        mobileBreakpoint: 800
    },
    errors: {
        INVALID_XHR_CONFIG: "INVALID_XHR_CONFIG",
        INVALID_REQUEST_METHOD: "INVALID_REQUEST_METHOD",
        NON_EXISTANT_API_BASE: "NON_EXISTANT_API_BASE"
    },
    xhr: {
        bases: {
            jordan: "http://jordanbradfield.ca",
            testing: "https://jsonplaceholder.typicode.com"
        },
        endpoints: {
            testing: {
                base: "testing",
                method: "get",
                path: "/users"
            }
        }
    }
}
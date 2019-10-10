var isProduction = (function(){
    try {
        return window.location.hostname !== "localhost";
    } catch (error) {
        try {
            return process.env.NODE_ENV === "production";
        } catch (error) {
            throw new Error("Did not detect window or process object. Where is the code being run?");
        }
    }
}());

var serverBase = isProduction ? "http://jordanbradfield.herokuapp.com" : "http://localhost:3000";

module.exports = {
    api: {
        base: serverBase,
        context: "/api"
    },
    constants: {
        email: "jordan.p.bradfield@gmail.com",
        isProduction: isProduction,
        mobileBreakpoint: 800,
        name: "Jordan Bradfield"
    },
    errors: {
        INVALID_XHR_CONFIG: "INVALID_XHR_CONFIG",
        INVALID_REQUEST_METHOD: "INVALID_REQUEST_METHOD",
        NON_EXISTANT_API_BASE: "NON_EXISTANT_API_BASE"
    },
    photos: {
        home: {
            jordanHeadshotHigh: serverBase + "/images/home/jordan-headshot-hq.png",
            jordanTransparentMedium: serverBase + "/images/home/jordan-transparent-sq.png",
            jordanTransparentHigh: serverBase + "/images/home/jordan-transparent-hq.png"
        }
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
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
            jordanTransparentMedium: "https://lh3.googleusercontent.com/vaV7SB1oJpH3UkN0S0PpZEOIROvbueQoH2qt63gZeT4q7eXbZ1bsiQKeykGwJjKsrfnTod30Y0KEk0lLOmD9Za5Py3NsLLT-XzFDrvitWGt7lA-VEWuD6EHxdC9BG6wrpOe6HdcUzDlKunPgr8OLp2M0FPy4BUKIw6j0GENGu6thzDTFiEbDlbrpBH3rVSKwrmKpRAtdgo7AMuBfpK4bVyiha0nstjRN7K2oZ2fF9g8bgJ1SK6cf0NIukZ0pG5trOaHymXZHg1xs1Xm5Uy5zNAsBjBTGI_7vG-70i7RASsvE1NI71nLAOX7AZOZ_iuEoffJYemTcgc2Beruq0vph325WJO42m4UiVQoot9h-zG7bKRNdl2IJIKweoWZm74BOzdByPZuj4-GhNQkqRQdNJh5AUGtTWJhuYFt4Ux0vV9tmlI-xWs_VIRlPEs9TxN2QNJXoScaRr9znth28181sSxUlf5-2FFRY-c2cpo1tNg_57f9iae83piggqqgIHAJgXjML0vbKZTE5n03NwTWvpANWuYAHIs6g1NOOY6bnvyIfJRz3wUGf31UxaqtG2XBDuUokEKPF9_4CrUWe7O3ssliQXjgpAriNZROGMDB4B8LasKdX2AuQamU9P1vftnrndUKAGkccOJgxafYi7X4PTXVZFm6WZthy-f1NF0587an4sUV4IgG7IQ4=w810-h1480-no",
            jordanTransparentHigh: "https://lh3.googleusercontent.com/0irVu2O5hgFJ8pMs7k0uFruuR9BB1yNf6icvw5xT99zNNQ_vFXoI3Gq4k1xXWEZLgLWE_YVjrY1D62adOddu7Gvp-O0Ifh0dKVun9LRgiHyYxuorxykjLPZ5Ly86szegySOzeeiXg0m7lAX0o2UllrlIEl1CofD4Xf5Spr99zglPyySjFrVB9TZJFdDOEkYkI7hD2CfO6q8_jFzkxPeV_dT5ElBliZy7qqDQXhRzA1uxS3qbGSQC87_e75UxCNo-XZvjEcYa1--LUMPu4AH-a7x5XAOTd7B5EI6NX87NiYrWZi5mvuSkN6mwAdHnLEjivxN4hLmLvjtQF427hZg9jm9TCZHZi48XJ0tlcCVmqmN-FOTcPjGGzVhpvgtv5EitQl1J2kHht6lfhMR5Ynfv60YWkDeoqdoEV3Kn05WnBo9ttfCYpvS9o8lIbAxKhXZiwCECq9VnUkHeIMDOvO1NVZ0O8rj_IvT9wAGHZw1B2yXY4E6K0HQvzZ3BD2qFoDRqgJ3EkcU_vgN1-NeUgCw8HNBp3_GrI_Lriafd9mU5fcE9bAJoxVkN3lBwbfJfcpSRRnoxvop7eUGKWOxArZa9ywnkrGVfdD0geCL9ad3YPHKjMxs56eI4qJ9onTCov8ilOTfiRiSLi5rKMloeOuVuVsXZx7s7EPMOqBfOJ6MCaAQTlBTuPW1-9cc=w810-h1482-no"
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
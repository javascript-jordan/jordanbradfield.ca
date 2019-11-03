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
        context: "/api",
        endpoints: {
            analytics: {
                additionalView: "/analytics/visit/additional",
                firstView: "/analytics/visit/first",
            },
            contact: {
                email: "/contact/email"
            },
            downloads: {
                resume: "/downloads/resume"
            },
            misc: {
                wake: "/misc/wake"
            }
        }
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
    links: {
        github: "https://github.com/javascript-jordan",
        gmail: "mailto:jordan.p.bradfield@gmail.com?subject=Found your from jordanbradfield.ca",
        linkedin: "https://www.linkedin.com/in/jordan-bradfield-9333a1119/",
        twitter: "https://twitter.com/JordanBradfiel4"
    },
    photos: {
        home: {
            jordanHeadshotHigh: serverBase + "/images/home/jordan-headshot-hq.png",
            jordanTransparentMedium: serverBase + "/images/home/jordan-transparent-mq.png"
        }
    },
    regex: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    storage: {
        keys: {
            lastVisit: {
                name: "JB_LAST_VISIT"
            },
            visits: {
                name: "JB_VISITS"
            }
        }
    },
    xhr: {
        bases: {
            api: serverBase + "/api",
            testing: "https://jsonplaceholder.typicode.com"
        },
        endpoints: {
            analyticsAdditionalVisit: {
                base: "api",
                method: "post",
                path: "/analytics/visit/additional"
            },
            analyticsFirstVisit: {
                base: "api",
                method: "post",
                path: "/analytics/visit/first"
            },
            email: {
                base: "api",
                method: "post",
                path: "/contact/email"
            },
            testing: {
                base: "testing",
                method: "get",
                path: "/users"
            },
            wake: {
                base: "api",
                method: "get",
                path: "/misc/wake"
            }
        }
    }
}
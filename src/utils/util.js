import axios from "axios";
import config from "../config";

export const convertToString = data => {
    try {
        //test initial type, if not string then try to convert it
        return typeof data !== "string" ? (JSON.stringify(data) || "") : (data || "");
    } catch (error) {
        //stringify must have thrown an error, try to access .toString()
        return (data && data.toString()) || (data || "")
    }
}

export const convertToObject = string => {
    try {
        //if the object exists, try to parse it
        return string ? JSON.parse(string) : string;
    } catch (error) {
        //failed parsing, just return object
        return string;
    }
}

export const xhr = (configuration, queryOrData) => new Promise(async (resolve, reject) => {
    let availableMethods = ["get", "post", "put", "delete", "patch", "head"];
    //check to see if the configuration object is valid
    if(configuration && configuration.base && configuration.path && configuration.method){
        //test to see if the method is a valid one
        if(availableMethods.indexOf(configuration.method) === -1) return reject({code: config.errors.INVALID_REQUEST_METHOD});
        //map the uri from the base that was passed
        let uri = config.xhr.bases[configuration.base];
        //if it is undefined reject
        if(!uri) return reject({code: config.errors.NON_EXISTANT_API_BASE});
        //combine the path with the base to build full url
        let url = uri + configuration.path, axiosConfig = {};
        //add the data or query to the axios config
        if(configuration.method === "get" && queryOrData) axiosConfig["params"] = queryOrData;
        if(configuration.method !== "get" && queryOrData) axiosConfig["data"] = queryOrData;
        //invoke request module
        axios[configuration.method](url, axiosConfig).then(resolve).catch(error => {
            console.error(`xhr() failed with error: ${convertToString(error)} with config: ${convertToString(configuration)}`);
            return reject(error);
        });
    }else{
        //reject if invalid config was passed
        return reject({code: config.errors.INVALID_XHR_CONFIG});
    }
});
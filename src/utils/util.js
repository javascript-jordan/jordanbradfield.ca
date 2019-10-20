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

export const convertToLocation = (location = {}) => {
    let { city, country, regionName, isp } = location;
    //return string with address and isp
    return `${city || "Unknown City"}, ${regionName || "Unknown Region"}, ${country || "Unknow Country"} - ${isp || "Unknown ISP"}`;
}

export const extractDateComparrison = (startDate, endDate) => {
    let result = {
        years: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    //if one of the arguments was not passed then error out
    if(!startDate || !endDate) throw new Error(`Did not receive two valid arguments. Start: ${startDate} - End: ${endDate}`);
    //check to see if both objects are dates
    if(!startDate instanceof Date || !endDate instanceof Date) throw new Error(`Did not receive a date object for one or more parameters. Start: ${startDate} - End: ${endDate}`);
    //get millisends between
    let difference = endDate.getTime() - startDate.getTime();
    //build the object
    result["seconds"] = difference / 1000;
    result["minutes"] = result.seconds / 60;
    result["hours"] = result.minutes / 60;
    result["days"] = result.hours / 24;
    result["weeks"] = result.days / 7;
    result["years"] = result.weeks / 52;
    //spit out the result
    return result;
}

export const parseTemplateString = (string, data) => {
    let parsed = string;
    //loop through each key and replace it with it's cooresponding data
    Object.keys(data).forEach((key) => {
        parsed = parsed.replace(new RegExp(`<%=${key}=>`, "g"), data[key]);
    });
    return parsed;
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
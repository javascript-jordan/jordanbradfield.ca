import { xhr, convertToString } from "../../utils/util";
import axios from "axios";

export const addIpAddressToHeaders = (req, res, next) => {
    try {
        let ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
        req.headers.ip = ip.includes(":") ? ip.split(":")[ip.split(":").length - 1] : ip;
    } catch (error) { }
    return next();
}

export const extractAddressToHeaders = async (req, res, next) => {
    let ip = req.header("ip");
    if(ip){
        try {
            req.headers.location = (await get(`http://ip-api.com/json/${ip}`)).data;
        } catch (error) {
            console.error(`Error getting location with ip: ${ip} with error: ${convertToString(error)}`);
        }
    }
    return next();
}
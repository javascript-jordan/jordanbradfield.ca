import { Router } from "express";
import { join } from "path";
import config from "../../config";
import { sendMail, MAIL_MAP } from "../services/emailService";
import { parseTemplateString, convertToLocation } from "../../utils/util";
import { addIpAddressToHeaders, extractAddressToHeaders } from "./middlewares";

const ROUTER = Router(),
    middleware = [addIpAddressToHeaders];

ROUTER.post(config.api.endpoints.contact.email, ...middleware, extractAddressToHeaders, (req, res) => {
    console.log(req.body)
    let body = {
            ...req.body.data,
            fromAddress: convertToLocation(req.headers.location)
        },
        emailArgs = [
            config.constants.email,
            MAIL_MAP.contact.subject,
            null,
            parseTemplateString(MAIL_MAP.contact.html, body)
        ];
    sendMail.apply(null, emailArgs).then(() => res.send({success: true})).catch(error => res.status(500).send(error));
});

ROUTER.get(config.api.endpoints.downloads.resume, (req,res) => {
    res.download(join(__dirname, "../downloads/resume.pdf"));
});

export default ROUTER;
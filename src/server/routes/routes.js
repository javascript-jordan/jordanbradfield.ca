import { Router } from "express";
import { join } from "path";
import config from "../../config";
import { sendMail, MAIL_MAP } from "../services/emailService";
import { parseTemplateString, convertToLocation } from "../../utils/util";
import { addIpAddressToHeaders, extractAddressToHeaders } from "./middlewares";

const ROUTER = Router(),
    middleware = [addIpAddressToHeaders],
    success = {success: true};

ROUTER.post(config.api.endpoints.analytics.additionalView, ...middleware, extractAddressToHeaders, (req, res) => {
    let emailParameters = {
        address: convertToLocation(req.headers.location),
        agent: req.body.data.agent,
        count: req.body.data.count
    }, emailArgs =[
        config.constants.email,
        MAIL_MAP.analyticsAdditionalVisit.subject,
        null,
        parseTemplateString(MAIL_MAP.analyticsAdditionalVisit.html, emailParameters)
    ];
    sendMail.apply(null, emailArgs).then(() => res.send(success)).catch(error => res.status(500).send(error));
});

ROUTER.post(config.api.endpoints.analytics.firstView, ...middleware, extractAddressToHeaders, (req, res) => {
    let emailParameters = {
        address: convertToLocation(req.headers.location),
        agent: req.body.data.agent
    }, emailArgs =[
        config.constants.email,
        MAIL_MAP.analyticsFirstVisit.subject,
        null,
        parseTemplateString(MAIL_MAP.analyticsFirstVisit.html, emailParameters)
    ];
    sendMail.apply(null, emailArgs).then(() => res.send(success)).catch(error => res.status(500).send(error));
});

ROUTER.post(config.api.endpoints.contact.email, ...middleware, extractAddressToHeaders, (req, res) => {
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
    sendMail.apply(null, emailArgs).then(() => res.send(success)).catch(error => res.status(500).send(error));
});

ROUTER.get(config.api.endpoints.downloads.resume, (req,res) => {
    res.download(join(__dirname, "../downloads/resume.pdf"));
});

//wake up heroku dyno (remove when upgrade to hobby dyno)
ROUTER.get(config.api.endpoints.misc.wake, (req,res) => res.send(success));

export default ROUTER;
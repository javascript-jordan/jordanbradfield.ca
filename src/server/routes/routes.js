import { Router } from "express";
import { join } from "path";
import config from "../../config";
import { sendMail, MAIL_MAP } from "../services/emailService";
import { parseTemplateString, convertToLocation } from "../../utils/util";
import { addIpAddressToHeaders, extractAddressToHeaders } from "./middlewares";

const ROUTER = Router(),
    middleware = [addIpAddressToHeaders],
    success = {success: true};

ROUTER.get(config.api.endpoints.analytics.additionalView, ...middleware, extractAddressToHeaders, (req, res) => {
    let emailParameters = {
        address: convertToLocation(req.headers.location),
        agent: req.query.agent,
        count: req.query.count
    }, emailArgs =[
        config.constants.email,
        MAIL_MAP.analyticsAdditionalVisit.subject,
        null,
        parseTemplateString(MAIL_MAP.analyticsAdditionalVisit.html, emailParameters)
    ];
    sendMail.apply(null, emailArgs).then(() => res.send(success)).catch(error => res.status(500).send(error));
});

ROUTER.get(config.api.endpoints.analytics.firstView, ...middleware, extractAddressToHeaders, (req, res) => {
    let emailParameters = {
        address: convertToLocation(req.headers.location),
        agent: req.query.agent
    }, emailArgs =[
        config.constants.email,
        MAIL_MAP.analyticsFirstVisit.subject,
        null,
        parseTemplateString(MAIL_MAP.analyticsFirstVisit.html, emailParameters)
    ];
    sendMail.apply(null, emailArgs).then(() => res.send(success)).catch(error => res.status(500).send(error));
});

ROUTER.get(config.api.endpoints.contact.email, ...middleware, extractAddressToHeaders, (req, res) => {
    let body = {
            ...req.query,
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

//wake up heroku dyno (remove when upgrade to hobby dyno)
ROUTER.get(config.api.endpoints.misc.wake, (req,res) => res.send(success));

export default ROUTER;
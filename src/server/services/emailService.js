import { google } from "googleapis";
import { createTransport } from "nodemailer";
import { convertToString } from "../../utils/util";

const AUTH_TYPE = "OAuth2";
const EMAIL_ACCOUNT = process.env.EMAIL_USER_NAME;
const EMAIL_SERVICE = "Gmail";
const OAUTH2_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const OAUTH2_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const OAUTH2_CLIENT_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
const OAUTH2_CLIENT = new google.auth.OAuth2(OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET, "https://developers.google.com/oauthplayground");

OAUTH2_CLIENT.setCredentials({
    refresh_token: OAUTH2_CLIENT_REFRESH_TOKEN
});

export const MAIL_MAP = {
    analyticsAdditionalVisit: {
        subject: "Website Additional Visit",
        html: `
            <div>
                <h1>Someone Returned</h1><br/>
                <span>Someone from: <b><%=address=></b> has visited for the: <b><%=count=></b> time.</span><br/>
                <span>Agent: <b><%=agent=></b></span><br/>
            </div>
        `
    },
    analyticsFirstVisit: {
        subject: "Website First Visit",
        html: `
            <div>
                <h1>Someone New Visited</h1><br/>
                <span>Someone from: <b><%=address=></b> has visited for the first time.</span><br/>
                <span>Agent: <b><%=agent=></b></span><br/>
            </div>
        `
    },
    contact: {
        subject: "New Contact Email",
        html: `
            <div>
                <h1>New Email</h1><br/>
                <span>Name: <b><%=fromName=></b></span><br/>
                <span>Email: <b><%=fromEmail=></b></span><br/>
                <span>Agent: <b><%=fromAgent=></b></span><br/>
                <span>Address: <b><%=fromAddress=></b></span><br/>
                <h4><%=fromMessage=></h4><br/>
                <date><%=timestamp=></date>
            </div>
        `
    }
}

export const sendMail = (to, subject, text, html) => new Promise(async (resolve, reject) => {
    let headers, transport = createTransport({
        service: EMAIL_SERVICE,
        headers,
        auth: {
            type: AUTH_TYPE,
            user: EMAIL_ACCOUNT,
            clientId: OAUTH2_CLIENT_ID,
            clientSecret: OAUTH2_CLIENT_SECRET,
            refreshToken: OAUTH2_CLIENT_REFRESH_TOKEN
        }
    });;
    try {
        headers = await OAUTH2_CLIENT.getRequestHeaders();
    } catch (error) {
        console.error(`Error getting google oauth headers: ${convertToString(errro)}`);
        return reject({code: "OAUTH_ERROR"});
    }
    try {
        transport.sendMail({
            to,
            from: EMAIL_ACCOUNT,
            subject,
            html: html || `<div>${text || "No content"}</div>`
        });
    } catch (error) {
        console.error(`Error sending mail to: ${to} from: ${EMAIL_ACCOUNT} with error: ${convertToString(error)}`);
        return reject({code: "TRANSPORT_FAILED"});
    }
    return resolve();
});
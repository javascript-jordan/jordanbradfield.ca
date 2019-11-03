import { initialize, pageview, event } from "react-ga";
import { xhr } from "../../utils/util";
import { retrieve, save } from "./storageService";
import config from "../../config";

const ADDITIONAL_VIEW_THRESHOLD = 1000 * 60 * 5;

export const init = () => {
    let container = config.analytics.containers[config.constants.isProduction ? "prod" : "dev"],
        lastVisit = retrieve(config.storage.keys.lastVisit),
        numberVisits = retrieve(config.storage.keys.visits);

    //init google analytics
    initialize(container.id);

    //dont track if it's a bot or not production
    if(window.navigator.userAgent.includes("http://www.google.com/bot.html") || !config.constants.isProduction) return;
    
    //if they visited before send email with amount of visits
    if(lastVisit && typeof lastVisit === "number"){
        if((Date.now() - lastVisit) >= ADDITIONAL_VIEW_THRESHOLD){
            let newNumberVisits = ++numberVisits;
            save(config.storage.keys.visits, typeof numberVisits === "number" ? newNumberVisits : 1);
            save(config.storage.keys.lastVisit, Date.now());
            xhr(config.xhr.endpoints.analyticsAdditionalVisit, {agent: window.navigator.userAgent, count: visits});
        }
    }else{
        //new visitor send new visitor email
        if(!numberVisits){
            save(config.storage.keys.visits, 1);
        }
        save(config.storage.keys.lastVisit, Date.now());
        xhr(config.xhr.endpoints.analyticsFirstVisit, {agent: window.navigator.userAgent});
    }
}

export const trackEvent = e => event(e);

export const trackPageView = page => pageview(page);
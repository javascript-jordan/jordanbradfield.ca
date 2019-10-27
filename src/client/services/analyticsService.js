import { xhr } from "../../utils/util";
import { retrieve, save } from "./storageService"
import config from "../../config";

const ADDITIONAL_VIEW_THRESHOLD = 1000 * 60 * 5;

function trackAdditionalView(visits){
    xhr(config.xhr.endpoints.analyticsAdditionalVisit, {agent: window.navigator.userAgent, count: visits});
}

function trackFirstVisit(){
    xhr(config.xhr.endpoints.analyticsFirstVisit, {agent: window.navigator.userAgent});
}

export const init = () => {
    let lastVisit = retrieve(config.storage.keys.lastVisit),
        numberVisits = retrieve(config.storage.keys.visits);
    
    //dont track if it's a bot or not production
    if(window.navigator.userAgent.includes("http://www.google.com/bot.html") || !config.constants.isProduction) return;
    
    if(lastVisit && typeof lastVisit === "number"){
        if((Date.now() - lastVisit) >= ADDITIONAL_VIEW_THRESHOLD){
            let newNumberVisits = ++numberVisits;
            save(config.storage.keys.visits, typeof numberVisits === "number" ? newNumberVisits : 1);
            save(config.storage.keys.lastVisit, Date.now());
            trackAdditionalView(newNumberVisits);
        }
    }else{
        if(!numberVisits){
            save(config.storage.keys.visits, 1);
        }
        save(config.storage.keys.lastVisit, Date.now());
        trackFirstVisit();
    }
}
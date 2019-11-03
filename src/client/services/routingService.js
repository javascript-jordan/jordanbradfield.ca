import { trackPageView } from "./analyticsService";
import { strings } from "./stringService";

const routeChangeEvent = new Event("routeChangeEvent");

function dispatchEvent(){
    document.dispatchEvent(routeChangeEvent);
}

function scrollViewToTop(){
    window.document.querySelector("#view").scrollTop = 0;
}

function setTitle(){
    window.document.title = "Jordan Bradfield - " + strings.navbar.items.find(item => item.path === getRoute()).name;
}

function track(){
    trackPageView(getRoute());
}

export const getRoute = () => {
    return window.location.hash.replace(/^#/, "");
}

export const route = path => {
    window.location.href = `${window.location.origin}/#${path}`;
}

export const init = () => {
    setTitle();
    //listen for hash changes
    window.onhashchange = function(event){
        //set tab title
        setTitle();
        //dispatch the event
        dispatchEvent();
        //scroll the view to top
        scrollViewToTop();
        //track page view to google analytics on route change
        track();
    }
    //wait until next event loop and track initial view
    setTimeout(() => track());
}
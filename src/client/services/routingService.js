const routeChangeEvent = new Event("routeChangeEvent");

export const getRoute = () => {
    return window.location.hash.replace(/^#/, "");
}

export const route = path => {
    window.location.href = `${window.location.origin}/#${path}`;
}

export const init = () => {
    //listen for hash changes
    window.onhashchange = function(event){
        //dispatch the event
        document.dispatchEvent(routeChangeEvent)
    }
}
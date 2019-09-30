import config from "../../config";

export const isMobile = () => window.innerWidth < config.constants.mobileBreakpoint;

export const subscribeToWindowSizeChange = callback => {
    window.addEventListener("resize", callback);
}

export const unSubscribeToWindowSizeChange = callback => {
    window.addEventListener("resize", callback);
}
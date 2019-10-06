import config from "../../config";

export const getScreenWidth = () => window.innerWidth;

export const isMobile = () => getScreenWidth() < config.constants.mobileBreakpoint;

export const subscribeToWindowSizeChange = callback => {
    window.addEventListener("resize", callback);
}

export const unSubscribeToWindowSizeChange = callback => {
    window.removeEventListener("resize", callback);
}
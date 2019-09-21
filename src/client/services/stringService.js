import { en } from "../data/strings";

const LANG_STRING_MAP = {
    en: en
}


export const strings = LANG_STRING_MAP[window.navigator.language.split("-")[0]] || LANG_STRING_MAP.en;
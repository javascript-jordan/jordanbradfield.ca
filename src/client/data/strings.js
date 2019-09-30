import { extractDateComparrison } from "../../utils/util";
import constants from "./constants";

export const en = {
    home: {
        intro: {
            slogan: {
                0: "ideation",
                1: "iteration",
                2: "innovation"
            },
            overview: `Hi I'm Jordan Bradfield. I'm an intermediate level full stack developer 
                with ${Math.floor(extractDateComparrison(constants.dates.INDUSTRY_START_DATE, new Date()).years)}+ years of industry experience.
                I specialize in web and hybrid applications.`,
            buttons: {
                contact: "Contact me",
                resume: "Download CV"
            }
        }
    },
    navbar: {
        title: "Jordan Bradfield",
        role: "Full Stack Developer",
        items: [
            {name: "Home", path: "/"},
            {name: "Experience", path: "/experience"},
            {name: "Skills", path: "/skills"},
            {name: "About", path: "/about"},
            {name: "Contact", path: "/contact"},
        ],
        menu: "Open Menu",
        slogan: "The professional you need with the skills you want",
        links: {
            github: "Github Repository",
            linkedin: "Linkedin Profile",
            mail: "Email",
            twitter: "Twitter Feed"
        }
    }
}
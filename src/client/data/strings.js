import { extractDateComparrison } from "../../utils/util";
import constants from "./constants";

export const en = {
    experience: {
        timeline: {
            title: `${Math.floor(extractDateComparrison(constants.dates.INDUSTRY_START_DATE, new Date()).years)} years experience`,
            current: "Current",
            roles: [
                {
                    company: "IBM",
                    start: "2017-06-19",
                    role: "Application Developer",
                    description: `
                        During my time at IBM I have worked on a few internal projects as well as production client applications. I have had the opportunity to grow professionally and personally. I have learned many new emerging skills and provide clients with high quality applications to be released into the public on a major scale. I have worked with new technology like Blockchain, NodeJS, Angular 2+ and AngularJS. I have had opportunity to travel and take courses to help grow myself and provide more value to the business. IBM also gave me the opportunity to speak at events and setup formal learning sessions to teach other professionals new skills. I have also been able to take part in Mentoring other professionals as well as be Mentored by experienced professionals.
                    `
                },
                {
                    company: "IBM CO-OP",
                    start: "2016-05-16",
                    end: "2016-08-25",
                    role: "Application Developer",
                    description: `
                        Over the course of my 14 week CO-OP I had the opportunity to grow my personal development skills while being on an internal IBM project using the MEAN development stack. The application allowed me to develop skills like AngularJS, NodeJS, MongoDB, JWT, Passport, Socket.io, Node Mailer, etc. This CO-OP was my first introduction to the Development Industry. I believe if it weren't for this amazing opportunity I would have never found my passion for development and might have been doing something I wasn't fully interested in.
                    `
                },
                {
                    company: "YMCA",
                    start: "2017-05-01",
                    end: "2017-07-11",
                    role: "Wellness Leader",
                    description: `
                        Working at the YMCA was a great opportunity for myself. I was able to work in an Industry I was passionate about at the time. I had the ability to help others achieve their goals and live a healthier life. I was given opportunities to develope workout plans based on a clients needs and help them execute the daily exercises in the gym. I was also able to work on my leadership by leading a couple fitness classes as well. This job was a gateway to learning what a consultant was all about and how to keep clients happy.
                    `
                }
            ]
        }
    },
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
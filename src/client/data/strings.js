import { extractDateComparrison } from "../../utils/util";
import constants from "./constants";

export const en = {
    aria: {
        carousel: {
            name: "Carousel",
            controls: "Carousel Controls",
            next: "Next",
            previous: "Previous",
            item: "Carousel Item"
        }
    },
    contact: {
        address: {
            title: "Contact Address",
            email: "Email: jordan.p.bradfield@gmail.com",
            street: "Address: Halifax, Nova Scotia, Canada",
            website: "Website: www.jordanbradfield.ca",
            links: {
                name: "Links",
                github: "Github Link",
                linkedin: "Linkedin Link",
                twitter: "Twitter Link"
            }
        },
        form: {
            title: "Contact Form",
            button: "Send",
            fields: {
                name: {
                    label: "Name",
                    placeholder: "Ex. John Doe"
                },
                email: {
                    label: "Email",
                    placeholder: "Ex. johndoe@gmail.com"
                },
                message: {
                    label: "Message",
                    placeholder: "Ex. Let's grab a coffee"
                }
            }
        },
        title: "Get in touch with me"
    },
    errors: {
        typeMismatch: {
            email: "Please enter a valid email address"
        },
        valueMissing: "This field is required"
    },
    experience: {
        timeline: {
            title: `${Math.floor(extractDateComparrison(constants.dates.INDUSTRY_START_DATE, new Date()).years)} years experience`,
            current: "Current",
            roles: [
                {
                    company: "IBM",
                    start: "2017-06-19",
                    role: "Application Developer",
                    icon: "business",
                    description: `
                        During my time at IBM I have worked on a few internal projects as well as production client applications. I have had the opportunity to grow professionally and personally. I have learned many new emerging skills and provide clients with high quality applications to be released into the public on a major scale. I have worked with new technology like Blockchain, NodeJS, Angular 2+ and AngularJS. I have had opportunity to travel and take courses to help grow myself and provide more value to the business. IBM also gave me the opportunity to speak at events and setup formal learning sessions to teach other professionals new skills. I have also been able to take part in Mentoring other professionals as well as be Mentored by experienced professionals.
                    `
                },
                {
                    company: "IBM CO-OP",
                    start: "2016-05-16",
                    end: "2016-08-25",
                    role: "Application Developer",
                    icon: "code",
                    description: `
                        Over the course of my 14 week CO-OP I had the opportunity to grow my personal development skills while being on an internal IBM project using the MEAN development stack. The application allowed me to develop skills like AngularJS, NodeJS, MongoDB, JWT, Passport, Socket.io, Node Mailer, etc. This CO-OP was my first introduction to the Development Industry. I believe if it weren't for this amazing opportunity I would have never found my passion for development and might have been doing something I wasn't fully interested in.
                    `
                },
                {
                    company: "YMCA",
                    start: "2017-05-01",
                    end: "2017-07-11",
                    role: "Wellness Leader",
                    icon: "fitness",
                    description: `
                        I had some down time after finishing school in 2017 before I started my job a few months later. Luckily the YMCA I had worked at before was looking for resources and was able to have me back to help out part time. I took this opportunity to help others in the gym with their fitness goals and mentor them on how to properly work out and diet.
                    `
                },
                {
                    company: "YMCA",
                    start: "2015-05-15",
                    end: "2015-08-24",
                    role: "Wellness Leader",
                    icon: "fitness",
                    description: `
                        Working at the YMCA was a great opportunity for myself. I was able to work in an Industry I was passionate about at the time. I had the ability to help others achieve their goals and live a healthier life. I was given opportunities to develope workout plans based on a clients needs and help them execute the daily exercises in the gym. I was also able to work on my leadership by leading a couple fitness classes as well. This job was a gateway to learning what a consultant was all about and how to keep clients happy.
                    `
                },
                {
                    company: "Lawtons Drugs",
                    start: "2012-07-20",
                    end: "2015-08-21",
                    role: "Customer Service",
                    icon: "shopping",
                    description: `
                        Working at lawtons was my first job as a teenager and I started when I was just 15. This was a great learning opportunity for myself and really gave me the skills and confidence needed to interact and deal with clients/customers. I developed a proper work ethic and was one of the friendlist/hardest worker at the time.
                    `
                }
            ]
        },
        testimonials: {
            title: "Testimonials",
            reviews: [
                {
                    from: "Colleague",
                    review: "Jordan's determination, motivation and enthusiasm when dealing with new issues and requirements makes it great to work with him. Jordan is always strategic and takes a positive approach when new challenges arise.",
                    gender: "male"
                },
                {
                    from: "Colleague",
                    review: "Jordan is an awesome developer with amazing skills. He is always learning new technology and staying up to date on latest industry trends and standards. His motivation carries throughout the team.",
                    gender: "female"
                },
                {
                    from: "Colleague",
                    review: "Jordan has been great to work with on many aspects including developing new features or tracking new issues and pain points in current design. He also renders professionalism in the workplace.",
                    gender: "male"
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
    },
    skills: {
        title: "skills Repository",
        graphs: {
            technical: {
                title: "Technical Skills",
                list: [
                    {
                        name: "Javascript",
                        value: 95
                    },
                    {
                        name: "HTML/CSS",
                        value: 88
                    },
                    {
                        name: "Angular",
                        value: 80
                    },
                    {
                        name: "React",
                        value: 85
                    },
                    {
                        name: "AngularJS",
                        value: 97
                    }
                ]
            },
            knowledge: {
                title: "Knowledge",
                list: [
                    "Material Design",
                    "Accessibility",
                    "CSS Preprocessors (LESS, SCSS)",
                    "Source Control (GIT, SVN)",
                    "Build Tools (Webpack, Grunt)",
                    "Package Managers (NPM)",
                    "Responsive Design (Flexbox)",
                    "Animations (Keyframes, JS)",
                    "REST API's",
                    "AJAX Requests",
                    "ECMA Script 6+",
                    "Agile Methodology",
                    "Hybrid Mobile",
                    "DevOps (CI, CD)"
                ]
            }
        },
        charts: {
            title: "Behavioral Tendencies",
            list: [
                {
                    name: "Attitude",
                    level: "Fantastic",
                    value: 92
                },
                {
                    name: "Communication",
                    level: "Strong",
                    value: 90
                },
                {
                    name: "Time Management",
                    level: "Spectacular",
                    value: 85
                }
            ]
        }
    }
}
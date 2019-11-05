import { extractDateComparrison } from "../../utils/util";
import constants from "./constants";
import GraduateImage from "../images/about/goals/graduate.svg";
import GetHiredImage from "../images/about/goals/get-hired.svg";
import FirstProjectImage from "../images/about/goals/first-project.svg";
import MentorImage from "../images/about/goals/mentor.svg";
import TeamLeadImage from "../images/about/goals/team-lead.svg";
import ApplicationArchitectImage from "../images/about/goals/application-architect.svg";
import SolutionsArchitectImage from "../images/about/goals/solutions-architect.svg";
import ApiImage from "../images/home/ApiImage.svg";


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
    about: {
        title: "More about me",
        bio: {
            title: "Full Stack Developer",
            description: `
                I am a motivated and eager early professional with a passion for innovation and creation.
                I specialize in Full Stack Javascript Development but have a technically diversified portfolio.
                I have experience working on larger and smaller applications in all team sizes operating on agile principles.
                On a non technical note I would say I have a great attitude and am an easy going person to work with.
                I am a self learner and am able to pick up and run with new roles and assignments fairly seamlessly.
                Feel free to contact me if you would like to connect.
            `,
            infoPoints: [
                {
                    key: "Date of Birth",
                    value: "August 1996"
                },
                {
                    key: "Email",
                    value: "jordan.p.bradfield@gmail.com"
                },
                {
                    key: "Address",
                    value: "Halifax, Nova Scotia, Canada"
                },
                {
                    key: "Website",
                    value: "https://jordanbradfield.ca"
                }
            ],
            hobbies: {
                title: "My Hobbies",
                items: {
                    code: "Coding",
                    fitness: "Fitness",
                    fishing: "Fishing",
                    travel: "Traveling"
                }
            }
        },
        goals: {
            title: "Career Goals",
            notAcquired: "In Progress",
            list: [
                {
                    name: "IT Diploma",
                    aquired: "2017-07-19",
                    description: "I acheived this goal with dedication to doing the best I could at every piece of work I submitted. I had an overachiever mindset and overall loved the   work I was doing. I would enjoy going to school each day with the intent of furthering my knowledge base and becoming an IT professional.",
                    img: GraduateImage
                },
                {
                    name: "Entry level position",
                    aquired: "2017-07-20",
                    description: "I acheived this goal by completing a very successful CO-OP at IBM in 2016. I performed at a top level each day during my CO-OP and later was offered\n                            an opportunity to come back the year later once I had finished my schooling. Even though I was offered the Job before finishing school I still wanted to work as hard as I could during my remaining time at school, which paid off and I graduated with Honors and a 98% average for my final year.",
                    img: GetHiredImage
                },
                {
                    name: "First Project",
                    aquired: "2017-09-19",
                    description: "Since I began at IBM in 2016 as a CO-OP I really wanted to be a a part of a big project that reached many users. It's nice to have the feeling that you've helped multiple people by making their lives easier/less stressful. I was able to achieve this by ramping up on skills I didn't have at the time and ended up playing a big role in further development of the project.",
                    img: FirstProjectImage
                },
                {
                    name: "Mentoring",
                    aquired: "2018-06-01",
                    description: "Mentoring has been something I have always wanted to do. I love helping other people that have walked a similar path as myself. I was able to achieve this by providing advice and guidance to early professionals still in school and in the workplace. I wish I had a mentor going through school and I'm glad to be able to fill a position that I wanted.",
                    img: MentorImage
                },
                {
                    name: "Team Lead",
                    img: TeamLeadImage
                },
                {
                    name: "Application Architect",
                    img: ApplicationArchitectImage
                },
                {
                    name: "Solution Architect",
                    img: SolutionsArchitectImage
                },
                // {
                //     name: "Distinguished Engineer"
                // },
                // {
                //     name: "IBM Fellow or Equivilant"
                // }
            ]
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
        },
        marketing: {
            title: "What I do",
            description: `
                I consider myself to be a Full Stack Consultant. Rather than focusing on a single area or domain in an application, I prefer to work on each functional 
                area in the applications tech stack. I can also take on non technical roles focusing on the delivery of an application/service and successfully manage a team.
            `,
            items: [
                {
                    title: "Web Development",
                    image: FirstProjectImage,
                    description: `
                        Over the past ${Math.floor(extractDateComparrison(constants.dates.INDUSTRY_START_DATE, new Date()).years)}+ years I have gained extensive
                        knowledge on the subject of Web Development. I understand and can implement concepts like Responsive Layouts, Accessibility, Animations, Conditional Rendering,
                        Component Based Architecture, Advanced Styling, etc.
                    `
                },
                {
                    title: "Hybrid Development",
                    image: ApplicationArchitectImage,
                    description: `
                        I started gaining exposure to Hybrid App Development in late 2017. Since then I have become pretty fluent in extending a single code base to run 
                        on multiple platforms. I've used the Cordova Framework to build out my Native Apps powered by AngularJS, Angular and React.
                    `
                },
                {
                    title: "Api Development",
                    image: ApiImage,
                    description: `
                        I have a good understanding of how REST API's work and the supported HTTP Methods. Most of my experience with building API's has been with ExpressJS.
                        I've also integrated with third party API's like Facebook and Instagram to implement SSO functionality in my Applications.
                    `
                }
            ]
        },
        links: {
            title: "Keep Exploring",
            description: `
                I have documented a lot of my experience and skills that I've picked up since entering the IT industry. Feel free to check out the below links and have a look at the other domains
                on this website. While I am currently happily employed I do like to make new connections, so feel free to contact/connect with me.
            `,
            items: [
                {
                    name: "Experience"
                },
                {
                    name: "Skills"
                },
                {
                    name: "About"
                },
                {
                    name: "Contact"
                }
            ]
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
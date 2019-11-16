import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import { strings } from "../../services/stringService";
import AboutImageComponent from "./AboutImage.component";
import AboutBioComponent from "./AboutBio.component";
import AboutGoalsComponent from "./AboutGoals.component";

const AboutComponentStyles = theme => ({
    "@keyframes fade": {
        "25%": {opacity: "0.3"},
        "50%": {opacity: "0.6"},
        "75%": {opacity: "0.75"},
        "100%": {opacity: "1"},
    },
    root: {
        animation: "$fade 0.75s ease-out forwards",
        opacity: 0,
        "& .about-image": {
            flexBasis: "40%"
        },
        "& .about-bio-component": {
            maxWidth: 800
        },
        [theme.breakpoints.up("md")]: {
            "& .about-overview-container .about-image": {
                flexBasis: "20%"
            }
        },
        [theme.breakpoints.up(config.constants.mobileBreakpoint * 2)]: {
            "& .about-overview-container .about-image": {
                flexBasis: "15%"
            }
        },
        [theme.breakpoints.up(2000)]: {
            "& .about-overview-container .about-image": {
                flexBasis: "250px"
            }
        },
        [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
            "&.root .about-overview-container .about-image": {
                display: "none"
            },
            "&.root .about-bio-component": {
                paddingLeft: 0
            }
        }
    }
});

class AboutComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root} root set-max-width`}>
                <Typography className={`page-title page-title-spacing`} color="textPrimary" variant="h6">{strings.about.title}</Typography>
                <div className={`about-overview-container flex row align-vertical-start align-horizontal-space-around`}>
                    <AboutImageComponent className={`about-image`}></AboutImageComponent>
                    <AboutBioComponent className={`about-bio-component`}></AboutBioComponent>
                </div>
                <AboutGoalsComponent />
            </div>
        );
    }
}

export default withStyles(AboutComponentStyles)(AboutComponent);
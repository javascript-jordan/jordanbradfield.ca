import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import ContactAddressComponent from "./ContactAddress.component";
import ContactFormComponent from "./ContactForm.component";
import { strings } from "../../services/stringService";
import { xhr } from "../../../utils/util";
import config from "../../../config";

const ContactComponentStyles = theme => ({
    root: {
        "& .main-section": {
            overflowX: "hidden",
            "& .contact-address": {
                animation: "SlideInFromLeftAnimation 250ms linear forwards",
                flexBasis: "40%"
            },
            "& .contact-form": {
                animation: "SlideInFromRightAnimation 250ms linear forwards",
                flexBasis: "60%"
            }
        },
        [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
            "&.root .main-section": {
                flexDirection: "column-reverse",
                alignItems: "flex-start",
                "& > div": {
                    animation: "FadeInAnimation 1s linear forwards",
                    flexBasis: "auto",
                    width: "100%"
                }
            }
        }
    }
});

class ContactComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root} root`}>
                <Typography className={`page-title page-title-spacing`} variant="h6">
                    {strings.contact.title}
                </Typography>
                <div className={`main-section flex row align-vertical-start`}>
                    <ContactAddressComponent className={`contact-address grow`} />
                    <ContactFormComponent className={`contact-form grow`} />
                </div>
            </div>
        )
    }
}

export default withStyles(ContactComponentStyles)(ContactComponent);
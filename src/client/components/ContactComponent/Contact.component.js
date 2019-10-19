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
            "& .contact-address": {
                flexBasis: "35%"
            },
            "& .contact-address": {
                flexBasis: "65%"
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
            <div className={`${classes.root}`}>
                <Typography className={`page-title page-title-spacing`} variant="h6">
                    {strings.contact.title}
                </Typography>
                <div className={`main-section flex row align-vertical-center align-horizontal-center`}>
                    <ContactAddressComponent className={`contact-address`} />
                    <ContactFormComponent className={`contact-form`} />
                </div>
            </div>
        )
    }
}

export default withStyles(ContactComponentStyles)(ContactComponent);
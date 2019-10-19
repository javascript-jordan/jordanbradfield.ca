import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import ContactAddressComponent from "./ContactAddress.component";
import ContactFormComponent from "./ContactForm.component";

const ContactComponentStyles = theme => ({
    root: {
        
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
                <div className={`page-title`}>
                    
                </div>
                <div className={`main-section flex row align-vertical-center align-horizontal-center`}>
                    <ContactAddressComponent />
                    <ContactFormComponent />
                </div>
            </div>
        )
    }
}

export default withStyles(ContactComponentStyles)(ContactComponent);
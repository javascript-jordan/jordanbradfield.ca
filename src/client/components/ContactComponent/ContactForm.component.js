import React from "react";
import { withStyles } from "@material-ui/styles";
import { strings } from "../../services/stringService";
import { Typography, TextField, Button } from "@material-ui/core";

const ContactFormComponentStyles = theme => {
    return {
        root: {
            "& form": {
                "& button": {
                    marginTop: theme.spacing(2)
                }
            }
        }
    }
}

const ContactFormComponent = ({ classes, className }) => {

    function onInputChange(){

    }

    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.contact.form.title}
            </Typography>
            <form>
                <TextField
                    label={strings.contact.form.fields.name.label}
                    className={`text-field`}
                    fullWidth
                    onChange={onInputChange('name')}
                    margin="dense"
                    required
                    type="text"
                    placeholder={strings.contact.form.fields.name.placeholder} />
                <TextField
                    label={strings.contact.form.fields.email.label}
                    className={`text-field`}
                    fullWidth
                    onChange={onInputChange('name')}
                    margin="dense"
                    required
                    type="email"
                    placeholder={strings.contact.form.fields.email.placeholder} />
                <TextField
                    label={strings.contact.form.fields.message.label}
                    className={`text-field`}
                    fullWidth
                    multiline
                    rows="4"
                    onChange={onInputChange('name')}
                    margin="dense"
                    required
                    placeholder={strings.contact.form.fields.message.placeholder} />
                <Button color="primary" variant="contained">
                    {strings.contact.form.button}
                </Button>
            </form>
        </div>
    );
}

export default withStyles(ContactFormComponentStyles)(ContactFormComponent);
import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { strings } from "../../services/stringService";
import { Typography, TextField, Button, FormHelperText } from "@material-ui/core";

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

    let [form, setForm] = useState({
        name: {
            error: "",
            value: ""
        },
        email: {
            error: "",
            value: ""
        },
        message: {
            error: "",
            value: ""
        }
    });

    function onInputChange(field){
        return event => {
            let value = event.currentTarget.value;
            setForm(form => {
                let newForm = {...form};
                newForm[field].value = value;
                newForm[field].error = value ? "" : strings.errors.required;
                return newForm;
            });
        }
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
                    error={Boolean(form.name.error)}
                    fullWidth
                    onChange={onInputChange("name")}
                    margin="dense"
                    required
                    type="text"
                    value={form.name.value}
                    placeholder={strings.contact.form.fields.name.placeholder} />
                {form.name.error ? <FormHelperText error>{form.name.error}</FormHelperText> : null}
                <TextField
                    label={strings.contact.form.fields.email.label}
                    className={`text-field`}
                    error={Boolean(form.email.error)}
                    fullWidth
                    onChange={onInputChange("email")}
                    margin="dense"
                    required
                    type="email"
                    value={form.email.value}
                    placeholder={strings.contact.form.fields.email.placeholder} />
                {form.email.error ? <FormHelperText error>{form.email.error}</FormHelperText> : null}
                <TextField
                    label={strings.contact.form.fields.message.label}
                    className={`text-field`}
                    error={Boolean(form.message.error)}
                    fullWidth
                    multiline
                    rows="4"
                    onChange={onInputChange("message")}
                    margin="dense"
                    required
                    type="text"
                    value={form.message.value}
                    placeholder={strings.contact.form.fields.message.placeholder} />
                    {form.message.error ? <FormHelperText error>{form.message.error}</FormHelperText> : null}
                <Button color="primary" variant="contained">
                    {strings.contact.form.button}
                </Button>
            </form>
        </div>
    );
}

export default withStyles(ContactFormComponentStyles)(ContactFormComponent);
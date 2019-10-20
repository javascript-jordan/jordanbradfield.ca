import React, { useState, useRef } from "react";
import { withStyles } from "@material-ui/styles";
import { strings } from "../../services/stringService";
import { Typography, TextField, Button, FormHelperText, CircularProgress } from "@material-ui/core";
import config from "../../../config";
import { xhr } from "../../../utils/util";

const ContactFormComponentStyles = theme => {
    return {
        root: {
            "& form": {
                "& button": {
                    marginTop: theme.spacing(2),
                    "& .progress": {
                        color: "rgba(100, 100, 100, 0.6)",
                        height: "20!important",
                        width: "20!important",
                        marginRight: theme.spacing(1)
                    }
                }
            }
        }
    }
}

const ContactFormComponent = ({ classes, className }) => {

    let initialForm = {
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
        },
        [form, setForm] = useState(initialForm),
        [loading, setLoading] = useState(false),
        formElement = useRef();

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

    function onSubmitClick(){
        if(validateForm()){
            let email = {
                fromAgent: window.navigator.userAgent,
                fromName: form.name.value,
                fromEmail: form.email.value,
                fromMessage: form.message.value,
                timestamp: new Date().toJSON()
            }
            setLoading(true);
            xhr(config.xhr.endpoints.email, email).finally(() => {
                setForm(initialForm);
                setLoading(false);
            });
        }
    }

    function validateForm(){
        let inputs = Array.prototype.slice.call(formElement.current.elements, 0, 3),
            valid = true;
        Array.prototype.forEach.call(inputs, (input, index) => {
            if(!input.validity.valid){
                valid = false;
                setForm(form => {
                    let newForm = {...form},
                        badInput = Object.keys(form)[index], error;
                    switch(true){
                        case input.validity.valueMissing:
                            error = strings.errors.valueMissing;
                            break;
                        case input.validity.typeMismatch:
                            error = strings.errors.typeMismatch[input.type];
                            break;
                    }
                    newForm[badInput].error = error;
                    return newForm;
                });
            }
        });
        return valid;
    }

    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.contact.form.title}
            </Typography>
            <form ref={formElement} name="emailForm">
                <TextField
                    label={strings.contact.form.fields.name.label}
                    className={`text-field`}
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
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
                <Button color="primary" disabled={loading} onClick={onSubmitClick} variant="contained">
                    {loading ? <CircularProgress className={`progress`} /> : null}
                    {strings.contact.form.button}
                </Button>
            </form>
        </div>
    );
}

export default withStyles(ContactFormComponentStyles)(ContactFormComponent);
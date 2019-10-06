import React from "react";
import { withStyles } from "@material-ui/styles";
import { AcUnit, Code, Business, FitnessCenter } from "@material-ui/icons";
import ImageBackdropComponent from "../../Widgets/ImageBackdrop.component";
import config from "../../../../config";

const ICON_MAP = {
    code: Code,
    business: Business,
    fitness: FitnessCenter
}

const IconLineComponentStyles = theme => {
    return {
        root: {
            margin: `0 ${theme.spacing(7)}`,
            marginBottom: theme.spacing(-2),
            "& .icon-container": {
                "& .icon": {
                    padding: theme.spacing(1.5),
                    fontSize: theme.spacing(5)
                }
            },
            "& .line": {
                "& div": {
                    borderRight: "2px dashed black",
                    transform: "translateX(-1px)",
                    width: 2
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                margin: `0 ${theme.spacing(1)}`,
                marginBottom: theme.spacing(-2)
            }
        }
    }
}

const IconLineComponent = ({ classes, className, role, last }) => {
    let Icon = ICON_MAP[role.icon] || ICON_MAP.business;
    return (
        <div aria-hidden="true" className={`${className || ""} ${classes.root} flex column align-vertical-center`}>
            <div className={`icon-container`}>
                <ImageBackdropComponent padding={0.5}>
                    <Icon className={`icon`} />
                </ImageBackdropComponent>
            </div>
            <div className={`line center grow flex column ${last ? "hide" : ""}`}>
                <div className={`grow`}></div>
            </div>
        </div>
    );
}

export default withStyles(IconLineComponentStyles)(IconLineComponent);
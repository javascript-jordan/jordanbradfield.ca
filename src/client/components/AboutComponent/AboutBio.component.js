import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";
import AboutHobbiesComponent from "./AboutHobbies.component";
import { strings } from "../../services/stringService";
import config from "../../../config";
import SignatureImage from "../../images/about/signature.png";

const AboutBioComponentStyles = theme => {
    return {
        root: {
            paddingLeft: theme.spacing(2),
            "& .description": {
                margin: `${theme.spacing(3)} 0`
            },
            "& .signature-container": {
                margin: `${theme.spacing(3)} 0`,
                "& .signature-image": {
                    "& img": {
                        width: "30%",
                        maxWidth: "75%",
                        marginLeft: "5%"
                    }
                },
                "& .signature-line": {
                    "& .dot": {
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "50%",
                        boxShadow: theme.shadows[4],
                        height: 15,
                        width: 15,
                        "& .fill": {
                            borderRadius: "50%",
                            boxShadow: theme.shadows[4],
                            height: 7.5,
                            width: 7.5
                        }
                    },
                    "& .line": {
                        borderBottom: "3px dashed #000000",
                        height: 1
                    }
                }
            },
            "& .info-list": {
                "& .info-point": {
                    flexFlow: "row wrap",
                    textTransform: "uppercase",
                    "& .value": {
                        marginLeft: theme.spacing(1)
                    },
                    "&:not(:last-child)": {
                        marginBottom: theme.spacing(1)
                    }
                }
            },
            "& .hobbies": {
                "& .page-sub-title": {
                    margin: `${theme.spacing(3)} 0`
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root .signature-container": {
                    "& .signature-image": {
                        "& img": {
                            width: "50%",
                            marginLeft: theme.spacing(2)
                        }
                    }
                }
            },
            [theme.breakpoints.down("xs")]: {
                "&.root .signature-container": {
                    "& .signature-image": {
                        "& img": {
                            width: "80%"
                        }
                    }
                }
            }
        }
    }
}

function InfoPoint({ point }){
    return (
        <div className={`info-point flex row`}>
            <Typography color="textSecondary" className={`key`} variant="subtitle1">
                <b>{point.key}:</b>
            </Typography>
            <Typography color="textSecondary" className={`value`} variant="subtitle1">
                {point.value}
            </Typography>
        </div>
    );
}

function Signature(){
    return (
        <div className={`signature-container`}>
            <div className={`signature-image`}>
                <img src={SignatureImage} />
            </div>
            <div className={`signature-line flex row align-vertical-center`}>
                <div className={`dot flex row align-vertical-center align-horizontal-center`}>
                    <span className={`fill background-white`}></span>
                </div>
                <div className={`line grow`}></div>
                <div className={`dot flex row align-vertical-center align-horizontal-center`}>
                    <span className={`fill background-white`}></span>
                </div>
            </div>
        </div>
    );
}

const AboutBioComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.about.bio.title}
            </Typography>
            <div className={`description`}>
                <Paper>
                    <Typography color="textSecondary" className={`paper`} variant="body2">
                        {strings.about.bio.description}
                    </Typography>
                </Paper>
            </div>
            <Signature />
            <div className={`info-list`}>
                {strings.about.bio.infoPoints.map((point, index) => {
                    return <InfoPoint key={`info-point-${index}`} point={point} />;
                })}
            </div>
            <div className={`hobbies`}>
                <Typography className={`page-sub-title`} variant="h6">
                    {strings.about.bio.hobbies.title}
                </Typography>
                <AboutHobbiesComponent className={`hobbies`} />
            </div>
        </div>
    );
}

export default withStyles(AboutBioComponentStyles)(AboutBioComponent);
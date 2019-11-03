import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import ImageBackdrop from "../../Widgets/ImageBackdrop.component";
import Avatar from "../../../images/experience/avatar.png";

const TestimonialComponentStyles = theme => {
    return {
        root: {
            marginTop: theme.spacing(3),
            "& .image-container": {
                width: "fit-content",
                "& img": {
                    padding: theme.spacing(2.5)
                }
            },
            "& .graphic-container": {
                margin: `${theme.spacing(2.5)} 0 ${theme.spacing(2.5)} 0`,
                "& .line": {
                    backgroundColor: theme.palette.primary.main,
                    position: "relative",
                    height: theme.spacing(0.5),
                    width: 60,
                    "&:after": {
                        content: "' '",
                        height: 0,
                        width: 0,
                        borderStyle: "solid",
                        borderWidth: `${theme.spacing(1)} ${theme.spacing(0.75)} 0 ${theme.spacing(0.75)}`,
                        borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
                        position: "absolute",
                        bottom: -theme.spacing(1),
                        left: "50%",
                        transform: "translateX(-50%)"
                    }
                }
            },
            "& .testimonial-container": {
                fontStyle: "italic",
                "&>*": {
                    fontSize: "1rem"
                }
            },
            "& .from-container": {
                "&>*": {
                    fontSize: "90%"
                }
            }
        }
    }
}

const TestimonialComponent = ({ classes, testimonial }) => {
    return (
        <div className={`${classes.root} flex column align-vertical-center`}>
            <div aria-hidden="true" className={`image-container`}>
                <ImageBackdrop padding={0.5}>
                    <img height="45" src={Avatar} />
                </ImageBackdrop>
            </div>
            <div className={`graphic-container`}>
                <div className={`line`}></div>
            </div>
            <div className={`testimonial-container`}>
                <Typography color="textSecondary" className={`center`} variant="h6">
                    &#34;{testimonial.review}&#34;
                </Typography>
            </div>
            <div className={`from-container`}>
                <Typography variant="overline" color="textSecondary">
                    {testimonial.from}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(TestimonialComponentStyles)(TestimonialComponent);
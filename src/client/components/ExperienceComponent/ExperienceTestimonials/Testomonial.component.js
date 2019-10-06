import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import ImageBackdrop from "../../Widgets/ImageBackdrop.component";
import AvatarMale from "../../../images/experience/avatar-male.png";
import AvatarWoman from "../../../images/experience/avatar-woman.jpg";

const TestomonialComponentStyles = theme => {
    return {
        root: {
            marginTop: theme.spacing(3),
            "& .image-container": {
                width: "fit-content"
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
            "& .testomonial-container": {
                fontStyle: "italic"
            },
            "& .from-container": {
                "&>*": {
                    fontSize: "90%"
                }
            }
        }
    }
}

const TestomonialComponent = ({ classes, testomonial }) => {
    let img = {male: AvatarMale, female: AvatarWoman}[testomonial.gender];
    return (
        <div className={`${classes.root} flex column align-vertical-center`}>
            <div aria-hidden="true" className={`image-container`}>
                <ImageBackdrop padding={1}>
                    <img height="80" src={img} />
                </ImageBackdrop>
            </div>
            <div className={`graphic-container`}>
                <div className={`line`}></div>
            </div>
            <div className={`testomonial-container`}>
                <Typography color="textPrimary" className={`center`} variant="h6">
                    &#34;{testomonial.review}&#34;
                </Typography>
            </div>
            <div className={`from-container`}>
                <Typography variant="overline" color="textSecondary">
                    {testomonial.from}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(TestomonialComponentStyles)(TestomonialComponent);
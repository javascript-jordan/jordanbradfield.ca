import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const BarComponentStyles = theme => {
    return {
        root: {
            margin: `${theme.spacing(1)} 0`,
            "& .skill-name": {
                marginBottom: theme.spacing(1),
                "&>*": {
                    fontSize: "90%"
                }
            },
            "& .skill-bar-container": {
                backgroundColor: "rgba(0,0,0,0.1)",
                boxShadow: theme.shadows[1],
                height: theme.spacing(1),
                width: "100%",
                "& .skill-bar": {
                    backgroundColor: theme.palette.primary.main,
                    height: "100%",
                    transition: "width 0.75s ease-in-out",
                    width: 0
                },
                "& .skill-value": {
                    boxShadow: theme.shadows[4],
                    padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
                    height: theme.spacing(3),
                    width: theme.spacing(3),
                    transform: "translateX(-50%)",
                    transition: "all 100ms ease"
                }
            },
            "&:hover": {
                "& .skill-bar-container .skill-value": {
                    padding: theme.spacing(1),
                    borderRadius: "50%"
                }
            }
        }
    }
}

const BarComponent = ({ classes, className, key, skill, index }) => {

    let self = useRef();

    useEffect(componentDidMount, []);

    function componentDidMount(){
        setSkillBarWidth();
    }

    function setSkillBarWidth(){
        setTimeout(() => {
            self.current.querySelector(`.skill-bar-${index}`).style.width = `${skill.value}%`;
        }, index * 100);
    }
    
    return (
        <div className={`${classes.root} ${className || ""} cursor-crosshair`} ref={self} key={key}>
            <div className={`skill-name`}>
                <Typography color="textSecondary" variant="overline">
                    {skill.name}
                </Typography>
            </div>
            <div className={`skill-bar-container flex row align-vertical-center align-horizontal-start`}>
                <div className={`skill-bar skill-bar-${index}`}>

                </div>
                <div className={`skill-value background-white flex row align-vertical-center`}>
                    <Typography color="textSecondary" variant="overline">
                        {skill.value}%
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default withStyles(BarComponentStyles)(BarComponent);
import React, { useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { withStyles, withTheme } from "@material-ui/styles";
import { subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../../services/responsiveService";
import config from "../../../../config";

const ChartComponentStyles = theme => {
    return {
        root: {
            opacity: "0",
            transition: "opacity 500ms ease",
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
            "& .create-circle": {
                borderRadius: "50%",
                position: "absolute"
            },
            "& .rotation-transition": {
                transition: "transform 1s ease-in-out"
            },
            "& .circle-container": {
                backgroundColor: "rgba(0,0,0,0.1)",
                width: "180px",
                marginRight: theme.spacing(1),
                position: "relative",
                "& .mask": {
                    "& .fill": {
                        backgroundColor: theme.palette.primary.main,
                        transform: "rotate(0deg)"
                    },
                    "&.full": {
                        transform: "rotate(0deg)"
                    }
                },
                "& .inside-circle": {
                    borderRadius: "50%",
                    background: "#e0e0e0",
                    textAlign: "center",
                    position: "absolute",
                    zIndex: "100",
                    fontWeight: "700",
                    fontSize: "2em",
                    "& .text": {
                        borderRadius: "50%",
                        boxShadow: theme.shadows[4],
                        width: theme.spacing(8),
                        height: theme.spacing(8)
                    }
                }
            },
            "& .skill-name": {
                margin: "auto 0",
                marginLeft: theme.spacing(2),
                wordBreak: "break-all",
                "& .name>*, .level>*": {
                    fontSize: "100%",
                    textTransform: "uppercase",
                    lineHeight: "1.5"
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "& .circle-container": {
                    flexBasis: "160px"
                }
            }
        }
    }
}

const ChartComponent = ({ classes, className, chart, delay, key, theme }) => {

    let self = useRef();

    useEffect(componentDidMount, []);

    function componentDidMount(){
        let lastTimeout; //to cancel timeout on destroy
        buildCircle();
        lastTimeout = setTimeout(() => {
            self.current.style.opacity = "1";
            lastTimeout = setTimeout(() => {
                rotateCircles();
            }, 500);
        }, delay);
        subscribeToWindowSizeChange(onWindowSizeChange);
        return () => {
            unSubscribeToWindowSizeChange(onWindowSizeChange);
            clearTimeout(lastTimeout);
        }
    }

    function buildCircle(){
        let container = self.current.querySelector(".circle-container"),
            circles = self.current.querySelectorAll(".create-circle"),
            fills = container.querySelectorAll(".fill"),
            insideCircle = container.querySelector(".inside-circle"),
            masks = container.querySelectorAll(".mask"),
            width = container.clientWidth;

        function buildCircles(){
            Array.prototype.forEach.call(circles, circle => {
                circle.style.height = `${width}px`;
                circle.style.width = `${width}px`;
            });
            Array.prototype.forEach.call(fills, fill => {
                fill.style.clip = `rect(0px, ${width / 2}px, ${width}px, 0px)`;
            });
            Array.prototype.forEach.call(masks, mask => {
                mask.style.clip = `rect(0px, ${width}px, ${width}px, ${width / 2}px)`;
            });
        }

        function buildInnerCircle(){
            let ninetyPercent = width * 0.90;
            insideCircle.style.height = `${ninetyPercent}px`;
            insideCircle.style.width = `${ninetyPercent}px`;
            insideCircle.style.lineHeight = `${ninetyPercent}px`;
            insideCircle.style.marginLeft = `${(width - ninetyPercent) / 2}px`;
            insideCircle.style.marginTop = `${(width - ninetyPercent) / 2}px`;
        }

        buildCircles();
        buildInnerCircle();
    }

    function rotateCircles(){
        let fills = self.current.querySelectorAll(".fill"),
            full = self.current.querySelector(".full"),
            percent = 180 * (chart.value / 100);
        Array.prototype.forEach.call(fills, fill => {
            fill.style.transform = `rotate(${percent}deg)`;
        });
        full.style.transform = `rotate(${percent}deg)`;
    }

    function onWindowSizeChange(){
        buildCircle();
    }

    return (
        <div className={`${classes.root} ${className || ""} flex row align-horizontal-start align-vertical-start`} key={key} ref={self}>
            <div className={`circle-container create-circle`}>
                <div className={`circle`}>
                    <div className={`mask full rotation-transition create-circle`}>
                        <div className={`fill rotation-transition create-circle`}>

                        </div>
                    </div>
                    <div className={`mask half create-circle`}>
                        <div className={`fill rotation-transition create-circle`}>

                        </div>
                    </div>
                    <div className={`inside-circle flex column align-horizontal-center align-vertical-center`}>
                        <span className={`text flex row align-horizontal-center align-vertical-center background-white`}>
                            <Typography>
                                {chart.value}%
                            </Typography>
                        </span>
                    </div>
                </div>
            </div>
            <div className={`skill-name flex column grow`}>
                <div className={`name`}>
                    <Typography variant="subtitle2">
                        {chart.name}
                    </Typography>
                </div>
                <div className={`level`}>
                    <Typography color="textSecondary" variant="overline">
                        {chart.level}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default withTheme(withStyles(ChartComponentStyles)(ChartComponent));
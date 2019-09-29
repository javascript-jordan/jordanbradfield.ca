import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { strings } from "../../services/stringService";
import config from "../../../config";
import JordanTransparent from "../../images/home/jordan-transparent.png";
import { route } from "../../services/routingService";

const HomeIntroComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        "@keyframes spin": {
            "from": {transform: "rotateZ(0deg)"},
            "to": {transform: "rotateZ(360deg)"}
        },
        root: {
            marginTop: sectionMarginTop,
            "& .verbiage-section": {
                flexGrow: "1",
                maxWidth: "60%",
                "& .slogan": {
                    "& .row": {
                        flexWrap: "wrap",
                        "& .word": {
                            color: "#323232",
                            marginRight: theme.spacing(2),
                            marginBottom: "-5px",
                            textTransform: "capitalize",
                            "& sup": {
                                color: theme.palette.primary.main,
                                fontSize: "3.5rem",
                                fontWeight: "bold",
                                marginBottom: "10px",
                                transform: "center center"
                            },
                            "&:hover": {
                                "& sup": {
                                    animation: "$spin 300ms ease forwards"
                                }
                            }
                        }
                    }
                }
            },
            "& .picture-section": {
                flexBasis: "25%",
                "& img": {
                    opacity: "0",
                    width: "100%",
                    // transition: "opacity 1s ease",
                    "&.ready": {
                        opacity: "1"
                    }
                }
            },
            "& .overview": {
                margin: sectionMarginTop
            },
            "& .action-buttons": {
                "& button": {
                    "&:first-child": {
                        marginRight: theme.spacing(2)
                    }
                }
            },
            [theme.breakpoints.down("1100")]: {
                "&.root": {
                    "& .verbiage-section .slogan": {
                        "& .row .word h1": {
                            fontSize: "4.5rem"
                        },
                        "& .row .word sup": {
                            fontSize: "2rem"
                        }
                    }
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: sectionMarginTop / 2,
                    "& .verbiage-section": {
                        maxWidth: "100%"
                    },
                    "& .picture-section": {
                        marginTop: sectionMarginTop / 2
                    }
                }
            },
            [theme.breakpoints.down("xs")]: {
                "&.root .verbiage-section .slogan .row .word": {
                    "& h1": {
                        fontSize: "3rem"
                    },
                    "& sup": {
                        fontSize: "1.5rem"
                    }
                }
            },
            [theme.breakpoints.up("lg")]: {
                marginTop: theme.spacing(6),
                "&.root .verbiage-section": {
                    maxWidth: "60%"
                }
            },
            [theme.breakpoints.between("sm", "md")]: {
                "& .picture-section": {
                    width: "50%!important"
                }
            }
        }
    }
}

const HomeIntroComponent = ({ classes }) => {

    let [state, setState] = React.useState({imageReady: false, mobile: window.innerWidth <= config.constants.mobileBreakpoint}),
        imageRef = React.createRef(null);

    let slogan = strings.home.intro.slogan;

    React.useEffect(() => {
        window.addEventListener("resize", onWindowSizeChange);
        return () => {
            window.removeEventListener("resize", onWindowSizeChange);
        }
    }, []);

    function onImageLoad(){
        resizeImage();
        setState({ imageReady: true });
    }

    function onWindowSizeChange(){
        resizeImage();
        if(window.innerWidth <= config.constants.mobileBreakpoint){
            setState({ imageReady: true, mobile: true });
        }
    }

    function resizeImage(){
        let img = document.querySelector(".picture-section").querySelector("img"),
            imgHeight = img.clientHeight,
            imgWidth = img.clientWidth,
            imgHeightToWidthRatio = imgHeight / imgWidth,
            imgClientRect = img.getBoundingClientRect(),
            parent = img.parentNode,
            view = document.querySelector("#view"),
            viewHeight = view.clientHeight,
            viewWidth = view.clientWidth,
            viewClientRect = view.getBoundingClientRect(),
            imgOffsetFromTop = imgClientRect.top - viewClientRect.top;
        let newImgWidth = (viewHeight - imgOffsetFromTop) / imgHeightToWidthRatio,
            flexBasisStyleToAdd;
        if(viewWidth >= config.constants.mobileBreakpoint){
            //will the image be bigger than 50% width if full height
            if((viewHeight / imgHeightToWidthRatio) > (viewWidth / 2)){
                flexBasisStyleToAdd = (viewWidth / 2);
            }else{
                flexBasisStyleToAdd = newImgWidth;
            }
            requestAnimationFrame(() => parent.style.flexBasis = `${flexBasisStyleToAdd}px`);
        }else{
            requestAnimationFrame(() => parent.style.width = "70%");
        }
    }

    function Overview(){
        return (
            <div className={`overview`}>
                <Typography color="textSecondary" variant="body1">
                    {strings.home.intro.overview}
                </Typography>
            </div>
        )
    }

    function ActionButtons(){
        return (
            <div className={`action-buttons flex align-horizontal-center`}>
                <Button onClick={route.bind(null, "/contact")} className={`white-button`} variant="contained">
                    {strings.home.intro.buttons.contact}
                </Button>
                <Button color="primary" variant="contained">
                    {strings.home.intro.buttons.resume}
                </Button>
            </div>
        );
    }

    return (
        <div className={`${classes.root} root flex row align-vertical-start align-horizontal-center`}>
            <div className={`verbiage-section`}>
                <div className={`slogan`}>
                    <div className={`row flex align-horizontal-center`}>
                        <div className={`word flex align-vertical-center`}>
                            <Typography variant="h1">
                                {slogan[0]}
                            </Typography>
                            <sup>+</sup>
                        </div>
                        <div className={`word flex align-vertical-center`}>
                            <Typography variant="h1">
                                {slogan[1]}
                            </Typography>
                            <sup>+</sup>
                        </div>
                    </div>
                    <div className={`row flex align-horizontal-center`}>
                        <div className={`word flex align-vertical-center`}>
                            <Typography variant="h1">
                                {slogan[2]}
                            </Typography>
                            <sup>+</sup>
                        </div>
                    </div>
                </div>
                <Overview />
                <ActionButtons />
            </div>
            <div className={`picture-section`}>
                <img className={state.imageReady ? "ready" : ""} ref={imageRef} onLoad={onImageLoad} src={JordanTransparent} height="auto" />
            </div>
        </div>
    );
}

export default withStyles(HomeIntroComponentStyles)(HomeIntroComponent);
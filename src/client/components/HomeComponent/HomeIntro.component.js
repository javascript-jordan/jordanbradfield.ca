import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { strings } from "../../services/stringService";
import config from "../../../config";
import JordanTransparentLow from "../../images/home/jordan-transparent-low.png";
import JordanHeadshot from "../../images/home/jordan-headshot-low.png";
import { route } from "../../services/routingService";
import { lazyLoadImage } from "../../services/imageLazyLoadService";
import { subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";
import ImageBackdropComponent from "../Widgets/ImageBackdrop.component";
import { trackEvent } from "../../services/analyticsService";

const HomeIntroComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        "@keyframes spin": {
            "from": {transform: "rotateZ(0deg)"},
            "to": {transform: "rotateZ(360deg)"}
        },
        root: {
            marginTop: `${sectionMarginTop}px!important`,
            "& .verbiage-section": {
                flexGrow: "1",
                maxWidth: "60%",
                "& .slogan": {
                    "& .row": {
                        flexWrap: "wrap",
                        "& .word": {
                            color: "#232323",
                            "& .text": {
                                fontSize: "4rem",
                                textTransform: "uppercase"
                            },
                            "&.small": {
                                "& .text":{
                                    fontSize: "3rem"
                                },
                                "& sup": {
                                    fontSize: "3rem"
                                }
                            },
                            "& sup": {
                                color: theme.palette.primary.main,
                                fontSize: "3.5rem",
                                fontWeight: "bold",
                                margin: `0 ${theme.spacing(0.5)} ${theme.spacing(1)} ${theme.spacing(0.5)}`,
                                transform: "center center"
                            },
                            "&:hover": {
                                "& sup": {
                                    animation: "$spin 300ms ease forwards"
                                }
                            },
                            "&:last-child.small": {
                                marginLeft: theme.spacing(2)
                            }
                        }
                    }
                }
            },
            "& .picture-section": {
                flexBasis: "25%",
                "& img": {
                    width: "100%"
                },
                "&.desktop-img": {
                    display: "block",
                    "& img": {
                        opacity: "0"
                    }
                },
                "&.mobile-img": {
                    display: "none",
                    margin: "auto",
                    marginTop: sectionMarginTop
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
                        "& .row .word": {
                            "&.small": {
                                "& .text": {
                                    fontSize: "3rem"
                                },
                                "& sup": {
                                    fontSize: "2rem"
                                }
                            },
                            "& .text": {
                                fontSize: "3.5rem"
                            }
                        },
                        "& .row .word sup": {
                            fontSize: "2.5rem"
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
                        marginTop: sectionMarginTop / 2,
                        width: '50%',
                        "&.desktop-img": {
                            display: "none"
                        },
                        "&.mobile-img": {
                            display: "block"
                        }
                    },
                    "& .action-buttons": {
                        marginBottom: theme.spacing(2)
                    }
                }
            },
            [theme.breakpoints.down("xs")]: {
                "&.root .verbiage-section .slogan .row .word": {
                    "&.small .text": {
                        fontSize: "2rem"
                    },
                    "& .text": {
                        fontSize: "2.5rem"
                    },
                    "& sup": {
                        fontSize: "1.5rem!important"
                    }
                },
                "&.root .picture-section.mobile-img": {
                    width: "75%"
                }
            },
            [theme.breakpoints.down(400)]: {
                "&.root .verbiage-section .slogan": {
                    "& .row:first-child .word.small h4": {
                        fontSize: "1.7rem"
                    },
                    "& :first-child :last-child.small": {
                        marginLeft: "0!important"
                    }
                }
            },
            [theme.breakpoints.up("lg")]: {
                marginTop: theme.spacing(6),
                "&.root .verbiage-section": {
                    maxWidth: "60%"
                }
            }
        }
    }
}

const HomeIntroComponent = ({ classes }) => {

    let desktopImageRef = React.useRef(),
        mobileImageRef = React.useRef();

    let slogan = strings.home.intro.slogan,
        desktopImageSrcArray = [
            config.photos.home.jordanTransparentMedium
        ], 
        mobileImageSrcArray = [
            config.photos.home.jordanHeadshotHigh
        ];

    React.useEffect(() => {
        subscribeToWindowSizeChange(onWindowSizeChange);
        //start loading higher quality images
        lazyLoadImage(desktopImageSrcArray, getImage("desktop"));
        lazyLoadImage(mobileImageSrcArray, getImage("mobile"));
        return () => {
            unSubscribeToWindowSizeChange(onWindowSizeChange);
        }
    }, []);

    function getImage(type){
        return {
            desktop: desktopImageRef,
            mobile: mobileImageRef
        }[type].current;
    }

    function onContactButtonClick(){
        trackEvent({...config.analytics.events.button, action: "ContactMe"});
        route("/contact");
    }

    function onDownloadButtonClick(){
        trackEvent({...config.analytics.events.button, action: "DownloadResume"});
    }

    function onImageLoad(){
        resizeDesktopImage();
    }

    function onWindowSizeChange(){
        resizeDesktopImage();
    }

    function resizeDesktopImage(){
        let img = getImage("desktop"),
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
            requestAnimationFrame(() => parent.style.flexBasis = `${flexBasisStyleToAdd + 1}px`);
        }else{
            requestAnimationFrame(() => parent.style.width = "70%");
        }
        img.style.opacity = "1";
    }

    function ActionButtons(){
        return (
            <div className={`action-buttons flex align-horizontal-center`}>
                <Button onClick={onContactButtonClick} className={`white-button`} variant="contained">
                    {strings.home.intro.buttons.contact}
                </Button>
                <Button color="primary" download href={config.api.base + config.api.context + config.api.endpoints.downloads.resume} onClick={onDownloadButtonClick} variant="contained">
                    {strings.home.intro.buttons.resume}
                </Button>
            </div>
        );
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

    function Picture({ className, type, src, onLoad, mobile }){
        var imageProps = {
            src,
            onLoad: onLoad || (()=>null),
            ref: {mobile: mobileImageRef, desktop: desktopImageRef}[type]
        }, image = <img {...imageProps} height="auto" />;
        return (
            <div className={`${className} picture-section`}>
                {mobile ? <ImageBackdropComponent>{image}</ImageBackdropComponent> : image}
            </div>
        );
    }

    function Word({ text, small }){
        return (
            <div className={`word flex align-vertical-center ${small ? "small" : ""}`}>
                <Typography className={`text`} variant={small ? "h4" : "h3"}>
                    {text}
                </Typography>
                <sup>+</sup>
            </div>
        );
    }

    return (
        <div className={`${classes.root} root flex row align-vertical-start align-horizontal-center`}>
            <div className={`verbiage-section`}>
                <div className={`slogan cursor-crosshair`}>
                    <div className={`row flex align-horizontal-center align-vertical-center`}>
                        <Word text={slogan[0]} small={true} />
                        <Word text={slogan[1]} small={true} />
                    </div>
                    <div className={`row flex align-horizontal-center`}>
                        <Word text={slogan[2]} />
                    </div>
                </div>
                {/* Only on mobile */}
                <Picture className={`mobile-img`} type="mobile" src={JordanHeadshot} mobile={true} />
                <Overview />
                <ActionButtons />
            </div>
            {/* Only on desktop */}
            <Picture className={`desktop-img`} type="desktop" src={JordanTransparentLow} onLoad={onImageLoad} />
        </div>
    );
}

export default withStyles(HomeIntroComponentStyles)(HomeIntroComponent);
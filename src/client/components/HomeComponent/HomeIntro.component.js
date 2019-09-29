import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import config from "../../../config";
import JordanTransparent from "../../images/home/jordan-transparent.png";

const HomeIntroComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        root: {
            marginTop: sectionMarginTop,
            "& .verbiage-section": {
                flexGrow: "1"
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
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    alignItems: "center",
                    flexDirection: "column"
                },
                "&.root .picture-section": {
                    marginTop: sectionMarginTop
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

    let [state, setState] = React.useState({imageReady: false}),
        imageRef = React.createRef(null);

    window.addEventListener("resize", resizeImage)

    React.useEffect(() => {
        console.log("Updated")
    })

    function onImageLoad(){
        resizeImage();
        setState({ imageReady: true })
    }

    function resizeImage(){
        // console.log(imageRef.current)
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
            newImgHeight = viewHeight - imgOffsetFromTop,
            flexBasisStyleToAdd;
        if(viewWidth >= config.constants.mobileBreakpoint){
            //will the image be bigger than 50% width if full height
            if((viewHeight / imgHeightToWidthRatio) > (viewWidth / 2)){
                flexBasisStyleToAdd = (viewWidth / 2);
            }else{
                flexBasisStyleToAdd = newImgWidth;
            }
            parent.style.flexBasis = `${flexBasisStyleToAdd}px`;
        }else{
            parent.style.width = "70%";
        }
    }


    return (
        <div className={`${classes.root} root flex row align-vertical-start align-horizontal-center`}>
            <div className={`verbiage-section`}>
                <Typography variant="h2">Innovate</Typography>
            </div>
            <div className={`picture-section`}>
                <img className={state.imageReady ? "ready" : ""} ref={imageRef} onLoad={onImageLoad} src={JordanTransparent} height="auto" />
            </div>
        </div>
    );
}

export default withStyles(HomeIntroComponentStyles)(HomeIntroComponent);
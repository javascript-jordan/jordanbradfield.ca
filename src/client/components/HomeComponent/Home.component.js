import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import JordanTransparent from "../../images/home/jordan-transparent.png";

const HomeComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        root: {
            textAlign: "center",
            "& .intro-section": {
                marginTop: sectionMarginTop,
                "& .verbiage-section": {
                    flexBasis: "60%"
                },
                "& .picture-section": {
                    flexBasis: "25%",
                    "& img": {
                        opacity: "0",
                        width: "100%",
                        transition: "opacity 500ms ease",
                        "&.ready": {
                            opacity: "1"
                        }
                    }
                }
            }
        }
    }
}

class HomeComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            imageReady: false
        }
        this.componentContainerRef = React.createRef();
        this.imageRef = React.createRef();
    }

    componentDidMount(){
    }

    onImageLoad(){
        this.resizeImage();
        this.setState({ imageReady: true });
    }

    resizeImage(){
        let img = this.imageRef.current,
            imgHeight = img.clientHeight,
            imgWidth = img.clientWidth,
            imgHeightToWidthRatio = imgHeight / imgWidth,
            imgClientRect = img.getBoundingClientRect(),
            parent = img.parentNode,
            view = document.querySelector("#view"),
            viewHeight = view.clientHeight,
            viewClientRect = view.getBoundingClientRect(),
            imgOffsetFromTop = imgClientRect.top - viewClientRect.top;
        img.style.height = `${viewHeight - imgOffsetFromTop}px`;
        parent.style.flexBasis = `${(viewHeight - imgOffsetFromTop) / imgHeightToWidthRatio}px`
    }

    render(){
        let { classes } = this.props;

        return (
            <div ref={this.componentContainerRef} className={`${classes.root}`}>
                <div className={`intro-section flex row align-vertical-start align-horizontal-center`}>
                    <div className={`verbiage-section`}>
                        Verbiage
                    </div>
                    <div className={`picture-section`}>
                        <img className={this.state.imageReady ? "ready" : ""} ref={this.imageRef} onLoad={this.onImageLoad.bind(this)} src={JordanTransparent} height="auto" />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);
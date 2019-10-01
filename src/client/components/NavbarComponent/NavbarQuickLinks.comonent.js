import React, { useEffect, useState, createRef, useRef } from "react";
import { AppBar, Typography, withStyles, useMediaQuery, useTheme, IconButton } from "@material-ui/core";
import { FormatQuote, Mail } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import GithubImage from "../../images/navbar/github.png";
import LinkedinImage from "../../images/navbar/linkedin.png";
import TwitterImage from "../../images/navbar/twitter.jpg";
import config from "../../../config";
import { isMobile, subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";

const NavbarQuickLinksComponentStyles = theme => ({
    root: {
        color: "white",
        padding: theme.spacing(1),
        maxHeight: "200",
        transition: "all 0.2s ease",
        transitionDelay: 0,
        "&.hidden": {
            maxHeight: 0,
            overflow: "hidden",
            padding: 0
        },
        "& .slogan-container": {
            "& .left-quote": {
                transform: "rotate(180deg)"
            }
        },
        "& .links-container": {
            "& img": {
                cursor: "pointer",
                marginRight: theme.spacing(2),
                transition: "opacity 250ms ease",
                "-webkit-backface-visibility": "hidden",
                "&:hover": {
                    opacity: "0.7"
                }
            }
        }
    }
});

const NavbarQuickLinksComponent = ({ classes, className, onNavItemClick }) => {

    let [state, setState] = useState({ mobile: isMobile(), hidden: false });

    let links = state.mobile ? [
        {click: onEmailIconClick, icon: Mail, name: strings.navbar.links.mail}
    ] : [
        {src: GithubImage, name: strings.navbar.links.github},
        {src: LinkedinImage, name: strings.navbar.links.linkedin},
        {src: TwitterImage, name: strings.navbar.links.twitter},
    ];

    let self = useRef(null);

    let view = null;

    useEffect(() => {
        //get active view
        view = document.querySelector("#view");
        //listen for scroll to hide this navbar
        view.addEventListener("scroll", onScroll);
        return () => {
            view.removeEventListener("scroll", onScroll);
        }
    }, []);

    function onEmailIconClick(){
        window.open(`mailto:${config.constants.email}`, "_blank");
    }

    function onScroll(){
        if(self.current.clientHeight < (view.scrollHeight - view.clientHeight)){
            let oldState = {...state};
            if(view.scrollTop > 0){
                oldState.hidden = true;
            }else{
                oldState.hidden = false;
            }
            setState(oldState);
        }
    }

    function onWindowSizeChange(){
        setState({ mobile: isMobile() });
    }

    useEffect(() => {
        subscribeToWindowSizeChange(onWindowSizeChange);
        return () => {
            unSubscribeToWindowSizeChange(onWindowSizeChange);
        }
    }, []);

    function BlockQuote(){
        return (
            <>
                <FormatQuote className={`left-quote`} />
                <Typography component="i" color="inherit" variant="subtitle2">{strings.navbar.slogan}</Typography>
                <FormatQuote className={`right-quote`} />
            </>
        );
    }

    function Name(){
        return (
            <Typography className={`color-white`} variant="h6">
                Jordan Bradfield
            </Typography>
        );
    }

    return (
        <AppBar ref={self} color="primary" className={`${className} ${classes.root} ${state.hidden ? "hidden" : ""} flex row align-vertical-center align-horizontal-space-between`} position="relative">
            <div className={`slogan-container flex row align-vertical-center`}>
                {state.mobile ? <Name /> : <BlockQuote />}
            </div>
            <div className={`links-container flex row align-vertical-center`}>
                {links.map((link, index) => {
                    if(link.icon){
                        return (
                            <IconButton onClick={link.click} key={`mobile-icon-${link.name}`}>
                                <link.icon className={`color-white`} aria-label={link.name} />
                            </IconButton>
                        );
                    }
                    return (
                        <img alt={link.name} key={`quick-link-${index}`} height="30" width="auto" role="link" src={link.src} />
                    );
                })}
            </div>
        </AppBar>
    );
}

export default withStyles(NavbarQuickLinksComponentStyles)(NavbarQuickLinksComponent);
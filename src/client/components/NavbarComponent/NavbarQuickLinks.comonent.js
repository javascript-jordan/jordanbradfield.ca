import React, { useEffect, useState, createRef, useRef } from "react";
import { AppBar, Typography, withStyles, useMediaQuery, useTheme, IconButton, Menu, MenuItem, Popover } from "@material-ui/core";
import { FormatQuote, Mail, MoreVert } from "@material-ui/icons";
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
            textTransform: "uppercase"
        },
        "& .links-container": {
            "& .single-link": {

            },
            "& .multiple-links": {
                "& button.icon-button": {
                    color: "#ffffff",
                    "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.2)"
                    }
                }
            }
        }
    }
});

const NavbarQuickLinksComponent = ({ classes, className, onNavItemClick }) => {

    let [state, setState] = useState({ anchorElement: null, mobile: isMobile(), hidden: false });

    let open = Boolean(state.anchorElement);

    let links = [
        {click: onEmailIconClick, icon: Mail, name: strings.navbar.links.mail},
        {src: GithubImage, name: strings.navbar.links.github},
        {src: LinkedinImage, name: strings.navbar.links.linkedin},
        {src: TwitterImage, name: strings.navbar.links.twitter}
    ]

    let self = useRef(null);

    let view = null;
    console.log(state)
    useEffect(() => {
        //get active view
        view = document.querySelector("#view");
        //listen for scroll to hide this navbar
        view.addEventListener("scroll", onScroll);
        //bind to window size change
        subscribeToWindowSizeChange(onWindowSizeChange);
        //listen for route changes to show navbar if user was scrolled
        document.addEventListener("routeChangeEvent", onRouteChange);
        return () => {
            view.removeEventListener("scroll", onScroll);
            unSubscribeToWindowSizeChange(onWindowSizeChange);
            document.removeEventListener("routeChangeEvent", onRouteChange);
        }
    }, []);

    function onEmailIconClick(){
        window.open(`mailto:${config.constants.email}`, "_blank");
    }

    function onLinkClick(link){
        console.log(link)
        // window.PerformanceMark(link.src)
    }

    function onMenuClick(event){
        setState(state => ({...state, anchorElement: event.currentTarget}));
    }

    function onMenuClose(){
        setState(state => ({...state, anchorElement: null}));
    }

    function onScroll(){
        if(self.current.clientHeight < (view.scrollHeight - view.clientHeight)){
            setState(state => ({...state, hidden: view.scrollTop > 0}));
        }
    }

    function onWindowSizeChange(){
        setState(state => ({...state, mobile: isMobile()}));
    }

    function onRouteChange(){
        setState(state => ({...state, hidden: false}));
    }

    function BlockQuote(){
        return (
            <Typography color="inherit" variant="subtitle2">{strings.navbar.slogan}</Typography>
        );
    }

    function Name(){
        return (
            <Typography className={`color-white`} variant="h6">
                Jordan Bradfield
            </Typography>
        );
    }

    function Links(){
        try {
            console.log(state.anchorElement.getBoundingClientRect())
        } catch (error) {
            
        }
        return (
            <div className={`multiple-links`}>
                <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" className={`icon-button`} onClick={onMenuClick}>
                    <MoreVert />
                </IconButton>
                <Popover
                    anchorEl={state.anchorElement}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    anchorPosition={{ top: 55, right: 55, left: 500 }}
                    getContentAnchorEl={null}
                    // color="t"
                    // keepMounted
                    open={open}
                    onClose={onMenuClose}
                    PaperProps={{
                        style: {
                            maxHeight: 500,
                            width: 200
                        }
                    }}>
                    {links.map(link => (
                        <MenuItem key={`link-${link.name}`} onClick={onLinkClick.bind(null, link)}>
                            {link.name}
                        </MenuItem>
                    ))}
                </Popover>
            </div>
        );
    }

    return (
        <AppBar ref={self} color="primary" className={`${className} ${classes.root} ${state.hidden ? "hidden" : ""} flex row align-vertical-center align-horizontal-space-between`} position="relative">
            <div className={`slogan-container flex row align-vertical-center`}>
                {state.mobile ? <Name /> : <BlockQuote />}
            </div>
            <div className={`links-container flex row align-vertical-center`}>
                <Links />
                {/* {links.map((link, index) => {
                    if(link.icon){
                        return (
                            <IconButton className={`mobile-icon`} onClick={link.click} key={`mobile-icon-${link.name}`}>
                                <link.icon className={`color-white`} aria-label={link.name} />
                            </IconButton>
                        );
                    }
                    return (
                        <img alt={link.name} key={`quick-link-${index}`} height="30" width="auto" role="link" src={link.src} />
                    );
                })} */}
            </div>
        </AppBar>
    );
}

export default withStyles(NavbarQuickLinksComponentStyles)(NavbarQuickLinksComponent);
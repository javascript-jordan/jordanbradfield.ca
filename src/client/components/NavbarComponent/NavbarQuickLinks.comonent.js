import React, { useEffect, useState, createRef, useRef } from "react";
import { AppBar, Typography, withStyles, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Mail, MoreVert, CloudDownload } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import config from "../../../config";
import { isMobile, subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";
import JordanResume from "../../downloads/JordanBradfieldResume.pdf";

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
            "&>:first-child": {
                marginRight: theme.spacing(1)
            },
            "& button.icon-button": {
                color: "#ffffff",
                padding: theme.spacing(1),
                "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)!important"
                }
            }
        }
    },
    menuItem: {
        textTransform: "uppercase"
    }
});

const NavbarQuickLinksComponent = ({ classes, className, onNavItemClick }) => {

    let [state, setState] = useState({ anchorElement: null, mobile: isMobile(), hidden: false });

    let open = Boolean(state.anchorElement);

    let links = [
        {src: config.links.gmail, icon: Mail, name: strings.navbar.links.mail},
        {src: config.links.github, name: strings.navbar.links.github},
        {src: config.links.linkedin, name: strings.navbar.links.linkedin},
        {src: config.links.twitter, name: strings.navbar.links.twitter}
    ]

    let self = useRef(null);

    let view = null;

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

    function onLinkClick(link){
        onMenuClose();
        window.open(link.src, "_blank");
    }

    function onMenuClick(event){
        setState(state => ({...state, anchorElement: document.querySelector(".links-container")}));
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
                <Menu
                    anchorEl={state.anchorElement}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    getContentAnchorEl={null}
                    open={open}
                    onClose={onMenuClose}
                    PaperProps={{
                        style: {
                            maxHeight: 500,
                            minWidth: 110,
                            transform: "translateX(-15px)"
                        }
                    }}>
                    {links.map(link => (
                        <MenuItem className={`${classes.menuItem}`} key={`link-${link.name}`} onClick={onLinkClick.bind(null, link)}>
                            <Typography color="textSecondary" variant="subtitle2">
                                {link.name}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }

    return (
        <AppBar ref={self} color="primary" className={`${className} ${classes.root} ${state.hidden ? "hidden" : ""} flex row align-vertical-center align-horizontal-space-between`} position="relative">
            <div className={`slogan-container flex row align-vertical-center`}>
                {state.mobile ? <Name /> : <BlockQuote />}
            </div>
            <div className={`links-container flex row align-vertical-center`}>
                <a download href={JordanResume}>
                    <IconButton className={`icon-button`}>
                        <CloudDownload className={`color-white`} />
                    </IconButton>
                </a>
                <Links />
            </div>
        </AppBar>
    );
}

export default withStyles(NavbarQuickLinksComponentStyles)(NavbarQuickLinksComponent);
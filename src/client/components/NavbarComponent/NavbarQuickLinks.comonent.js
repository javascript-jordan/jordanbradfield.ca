import React from "react";
import { AppBar, Typography, withStyles } from "@material-ui/core";
import { FormatQuote } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import GithubImage from "../../images/navbar/github.png";
import LinkedinImage from "../../images/navbar/linkedin.png";
import TwitterImage from "../../images/navbar/twitter.jpg";
import { getRoute } from "../../services/routingService";

const linkes = [
    {src: GithubImage, name: strings.navbar.links.github},
    {src: LinkedinImage, name: strings.navbar.links.linkedin},
    {src: TwitterImage, name: strings.navbar.links.twitter},
]

const NavbarQuickLinksComponentStyles = theme => ({
    root: {
        color: "white",
        padding: theme.spacing(1),
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
    return (
        <AppBar color="primary" className={`${className} ${classes.root} flex row align-vertical-center align-horizontal-space-between`} position="relative">
            <div className={`slogan-container flex row align-vertical-center`}>
                <FormatQuote className={`left-quote`} />
                <Typography component="i" color="inherit" variant="subtitle2">{strings.navbar.slogan}</Typography>
                <FormatQuote className={`right-quote`} />
            </div>
            <div className={`links-container flex row align-vertical-center`}>
                {linkes.map((link, index) => {
                    return <img alt={link.name} key={`quick-link-${index}`} height="30" width="auto" role="link" src={link.src} />;
                })}
            </div>
        </AppBar>
    );
}

export default withStyles(NavbarQuickLinksComponentStyles)(NavbarQuickLinksComponent);
import React from "react";
import { withStyles, Typography, AppBar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import NavbarNavItemsComponent from "./NavbarNavItemsComponent";

const NavbarComponentStyles = theme => ({
    root: {
        "& .marketing-appbar": {
            color: "white",
            padding: theme.spacing(1)
        },
        "& .navigation-appbar": {
            paddingRight: theme.spacing(10),
            "& .hamburger-menu": {
                display: "none",
                visibility: 'hidden'
            },
            "& .name-section": {
                cursor: "pointer",
                fontSize: 22,
                marginLeft: theme.spacing(2)
            },
            "& .invisible-spacer": {
                display: "none",
            },
            [theme.breakpoints.down("sm")]: {
                paddingRight: 0,
                "& .name-section": {
                    textAlign: "center",
                    fontSize: 20
                }
            }
        },
        [theme.breakpoints.down(700)]: {
            "& .navigation-appbar": {
                justifyContent: "inherit",
                padding: theme.spacing(1),
                "& .hamburger-menu": {
                    display: "block!important",
                    visibility: "visible!important",
                    flex: "1 0 15%"
                },
                "& .name-section": {
                    marginLeft: "0!important",
                    flex: "1 0 70%",
                },
                "& .invisible-spacer": {
                    display: "block!important",
                    flex: "1 0 15%"
                },
            },
            "& .marketing-appbar": {
                display: "none",
                visibility: "hidden"
            }
        }
    }
});

class NavbarComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    onNavItemClick(item){
        console.log(item);
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <AppBar color="primary" className={`marketing-appbar`} position="relative">
                    <Typography component="i" color="inherit" variant="subtitle2">{strings.navbar.slogan}</Typography>
                </AppBar>
                <nav>
                    <AppBar color="inherit" className={`navigation-appbar flex row align-vertical-center align-horizontal-space-between`} position="relative">
                        <div className={`hamburger-menu`}>
                            <IconButton aria-label={strings.navbar.menu}>
                                <Menu />
                            </IconButton>
                        </div>
                        <div className={`name-section`}>
                            <Typography color="textPrimary" className={``} variant="h5">Jordan Bradfield</Typography>
                        </div>
                        <NavbarNavItemsComponent onNavItemClick={this.onNavItemClick.bind(this)} />
                        <div aria-hidden="true" className={`invisible-spacer`}>

                        </div>
                    </AppBar>
                </nav>
            </div>
        )
    }
}

export default withStyles(NavbarComponentStyles)(NavbarComponent);
import React from "react";
import { withStyles, Typography, AppBar, IconButton } from "@material-ui/core";
import { Menu, FormatQuote } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import { route, getRoute } from "../../services/routingService";
import NavbarNavItemsComponent from "./NavbarNavItems.component";
import NavbarQuickLinksComonent from "./NavbarQuickLinks.comonent";
import NavbarSideDrawerComponent from "./NavbarSideDrawer.component";

const NavbarComponentStyles = theme => ({
    root: {
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
            "& .quick-links-appbar": {
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
            active: getRoute(),
            drawerOpen: false
        }
        document.addEventListener("routeChangeEvent", this.onRouteChange.bind(this));
    }

    componentWillUnmount(){
        document.removeEventListener("routeChangeEvent", this.onRouteChange.bind(this), false);
    }

    onDrawerClose(){
        this.setState({ drawerOpen: false });
    }

    onNavItemClick(item){
        route(item.path);
    }

    onRouteChange(){
        this.setState({active: getRoute()});
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <NavbarQuickLinksComonent className={`quick-links-appbar`} />
                <nav>
                    <AppBar color="inherit" className={`navigation-appbar flex row align-vertical-center align-horizontal-space-between`} position="relative">
                        <div className={`hamburger-menu`}>
                            <IconButton onClick={() => this.setState({ drawerOpen: true })} aria-label={strings.navbar.menu}>
                                <Menu />
                            </IconButton>
                        </div>
                        <NavbarSideDrawerComponent open={this.state.drawerOpen} onDrawerClose={() => this.setState({ drawerOpen: false })} />
                        <div className={`name-section`}>
                            <Typography color="textPrimary" className={``} variant="h5">Jordan Bradfield</Typography>
                        </div>
                        <NavbarNavItemsComponent active={this.state.active} onNavItemClick={this.onNavItemClick.bind(this)} />
                        <div aria-hidden="true" className={`invisible-spacer`}>

                        </div>
                    </AppBar>
                </nav>
            </div>
        )
    }
}

export default withStyles(NavbarComponentStyles)(NavbarComponent);
import React from "react";
import { withStyles, Typography, AppBar, IconButton } from "@material-ui/core";
import { Menu, FormatQuote } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import { route, getRoute } from "../../services/routingService";
import NavbarNavItemsComponent from "./NavbarNavItems.component";
import NavbarQuickLinksComonent from "./NavbarQuickLinks.comonent";
import NavbarSideDrawerComponent from "./NavbarSideDrawer.component";
import config from "../../../config";
import { isMobile, subscribeToWindowSizeChange, unSubscribeToWindowSizeChange } from "../../services/responsiveService";
import { trackEvent } from "../../services/analyticsService";

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
        [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
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
        subscribeToWindowSizeChange(this.onWindowSizeChange.bind(this));
        document.addEventListener("routeChangeEvent", this.onRouteChange.bind(this));
    }

    componentDidMount(){
        this.setState({title: this.getTitle()});
    }

    componentWillUnmount(){
        unSubscribeToWindowSizeChange(this.onWindowSizeChange.bind(this));
        document.removeEventListener("routeChangeEvent", this.onRouteChange.bind(this), false);
    }

    getTitle(){
        let active = getRoute();
        if(isMobile()){
            return strings.navbar.items.find(item => item.path === active).name;
        }
        return config.constants.name;
    }

    onDrawerClose(){
        this.setState({ drawerOpen: false });
    }

    onNavItemClick(item){
        trackEvent({...config.analytics.events.button, action: `${item.name}NavItemClick`})
        this.setState({drawerOpen: false}, () => route(item.path));
    }

    onRouteChange(){
        this.setState({active: getRoute(), title: this.getTitle()});
    }

    onWindowSizeChange(){
        this.setState({ title: this.getTitle() });
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
                        <NavbarSideDrawerComponent 
                            active={this.state.active} 
                            open={this.state.drawerOpen}
                            onDrawerClose={() => this.setState({ drawerOpen: false })}
                            onNavItemClick={this.onNavItemClick.bind(this)} />
                        <div className={`name-section`}>
                            <Typography color="textPrimary" variant="h5">{this.state.title}</Typography>
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
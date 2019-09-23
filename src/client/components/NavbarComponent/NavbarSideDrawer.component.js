import React from "react";
import { Drawer, Divider, IconButton, List, ListItem, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { strings } from "../../services/stringService";
import JordanHeadshot from "../../images/navbar/jordan-headshot.png";

const NavbarSideDrawerStyles = theme => ({
    root: {
        "& .header": {
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[4],
            padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(2.5)} ${theme.spacing(2)}`,
            "& .close-button *": {
                color: "#ffffff"
            },
            "& .overview": {
                marginTop: theme.spacing(0.5),
                "& .image": {
                    borderRadius: "50%",
                    boxShadow: theme.shadows[8],
                    padding: theme.spacing(1),
                    marginRight: theme.spacing(2),
                    overflow: "hidden",
                    "& img": {
                        backgroundColor: "#e0e0e0",
                        borderRadius: "50%"
                    }
                },
                "& .name-title": {
                    marginTop: theme.spacing(0.5),
                    "& .name": {
                        fontSize: "1.2em",
                        lineHeight: "initial"
                    }
                },
                [theme.breakpoints.down(350)]: {
                    "& .image img": {
                        height: "50"
                    },
                    "& .name-title .name.color-white": {
                        fontSize: "1em"
                    },
                    "& .name-title .title.fade": {
                        fontSize: "85%"
                    }
                }
            }
        },
        "& .navitems": {
            overflowY: "auto",
            "& .navitem": {
                "&.active": {
                    backgroundColor: "rgba(0,0,0,0.1)"
                }
            }
        }
    }
});

const NavbarSideDrawerComponent = ({ active, classes, open, onDrawerClose, onNavItemClick }) => {

    return (
        <Drawer className={`${classes.root} flex column`} open={open} onClose={onDrawerClose}>
            <div className={`header`}>
                <div className={`close-button flex row align-horizontal-end color-white`}>
                    <IconButton onClick={onDrawerClose} >
                        <Close />
                    </IconButton>
                </div>
                <div className={`overview flex row align-vertical-start`}>
                    <div className={`image background-white`}>
                        <img src={JordanHeadshot} height="60" width="auto" />
                    </div>
                    <div className={`name-title flex column`}>
                        <Typography variant="overline" className={`name color-white`}>
                            Jordan Bradfield
                        </Typography>
                        <Typography variant="subtitle1" className={`title fade color-white`}>
                            Full Stack Developer
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={`navitems grow`}>
                <List component="nav">
                    {strings.navbar.items.map((navitem, index) => {
                        return (
                            <React.Fragment>
                                <ListItem className={`navitem ${active === navitem.path ? "active" : ""}`} onClick={() => onNavItemClick(navitem)}>
                                    <Typography color="textSecondary">
                                        {navitem.name}
                                    </Typography>
                                </ListItem>
                                {index + 1 !== strings.navbar.items.length ? <Divider /> : null}
                            </React.Fragment>
                        );
                    })}
                </List>
            </div>
        </Drawer>
    );
}

export default withStyles(NavbarSideDrawerStyles)(NavbarSideDrawerComponent);
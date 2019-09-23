import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { strings } from "../../services/stringService";

const NavbarNavItemsComponentStyles = theme => ({
    root: {
        padding: 0,
        margin: 0,
        listStyleType: "none",
        "& li": {
            display: "block",
            cursor: "pointer",
            margin: 0,
            "& .active-indicator": {
                height: 3,
                transition: "background-color 0.3s ease, transform 0.3s ease",
                transform: "scaleX(0)",
                transformOrigin: "center center",
                marginTop: theme.spacing(1.5),
                width: "100%",
                "&.active": {
                    backgroundColor: theme.palette.primary.main,
                    transform: "scaleX(1)"
                }
            },
            "&:hover": {
                "& .active-indicator": {
                    backgroundColor: theme.palette.primary.main,
                    transform: "scaleX(1)"
                }
            },
            "& .text": {
                padding: `${theme.spacing(1.5)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`,
                fontSize: 16,
            }
        },
        [theme.breakpoints.down("sm")]: {
            "& li.flex": {
                "& .text": {
                    padding: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0 ${theme.spacing(1.5)}`
                }
            }
        },
        [theme.breakpoints.down(700)]: {
            display: "none",
            visibility: "hidden"
        }
    }
});

const NavbarNavItemsComponent = ({ active, classes, onNavItemClick }) => {
    return (
        <ul className={`${classes.root} flex row align-vertical-center`} role="menu">
            {strings.navbar.items.map((route, index) => {
                return (
                    <li className={`flex column`} key={`navbar-item-${index}`} role="menuitem" onClick={() => onNavItemClick(route)}>
                        <Typography className={`text`} component="div" color="textSecondary" variant="button">
                            {route.name}
                        </Typography>
                        <div className={`active-indicator ${active === route.path ? "active" : ""}`}></div>
                    </li>
                );
            })}
        </ul>
    );
}

export default withStyles(NavbarNavItemsComponentStyles)(NavbarNavItemsComponent);
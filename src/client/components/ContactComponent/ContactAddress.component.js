import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { EmailOutlined, MyLocationOutlined, DesktopMacOutlined } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import config from "../../../config";
import GithubBlackIcon from "../../images/contact/github-black.svg";
import GithubWhiteIcon from "../../images/contact/github-white.svg";
import LinkedinBlackIcon from "../../images/contact/linkedin-black.svg";
import LinkedinWhiteIcon from "../../images/contact/linkedin-white.svg";
import TwitterBlackIcon from "../../images/contact/twitter-black.svg";
import TwitterWhiteIcon from "../../images/contact/twitter-white.svg";
import GmailBlackIcon from "../../images/contact/gmail-black.svg";
import GmailWhiteIcon from "../../images/contact/gmail-white.svg";

const ContactAddressComponentStyles = theme => {
    let margin = theme.spacing(6);
    return {
        root: {
            "& .address-items": {
                marginTop: margin,
                paddingLeft: theme.spacing(2),
                "& .address-item": {
                    color: "rgb(102, 102, 102)",
                    "&:not(:last-child)": {
                        marginBottom: theme.spacing(2.5)
                    },
                    "& .icon": {
                        marginRight: theme.spacing(1),
                        "&>*": {
                            fontSize: "1.3rem"
                        }
                    },
                    "& .text > *": {
                        fontWeight: "100"
                    }
                }
            },
            "& .link-items": {
                marginTop: margin,
                padding: theme.spacing(1.5),
                paddingLeft: theme.spacing(2),
                "& .link-item": {
                    borderRadius: "50%",
                    boxShadow: theme.shadows[6],
                    cursor: "pointer",
                    padding: theme.spacing(1.5),
                    overflow: "hidden",
                    transition: "all 250ms",
                    "& img": {
                        height: 20,
                        width: 20
                    },
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        boxShadow: theme.shadows[8]
                    },
                    "&:not(:last-child)": {
                        marginRight: theme.spacing(2)
                    }
                }
            }
        }
    }
}

const ContactAddressComponent = ({ classes, className }) => {

    let links = [
        {
            black: GithubBlackIcon,
            white: GithubWhiteIcon,
            name: strings.contact.address.links.github,
            link: config.links.github
        },
        {
            black: LinkedinBlackIcon,
            white: LinkedinWhiteIcon,
            name: strings.contact.address.links.linkedin,
            link: config.links.linkedin
        },
        {
            black: TwitterBlackIcon,
            white: TwitterWhiteIcon,
            name: strings.contact.address.links.twitter,
            link: config.links.twitter
        },
        {
            black: GmailBlackIcon,
            white: GmailWhiteIcon,
            name: strings.contact.address.links.gmail,
            link: config.links.gmail
        }
    ];

    function onImageMouseOver(className, whiteImg){
        document.querySelector(`.${className}`).src = whiteImg;
    }

    function onImageMouseLeave(className, blackImg){
        document.querySelector(`.${className}`).src = blackImg;
    }

    function onImageClick(link){
        window.open(encodeURI(link), "_blank");
    }

    function AddressItem({ Icon, text }){
        return (
            <div className={`address-item flex row`}>
                <div className={`icon`}>
                    <Icon />
                </div>
                <div className={`text`}>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                </div>
            </div>
        );
    }

    function LinkItem({ index, link }){
        let klass = `img-link-${index}`;
        return (
            <div className={`link-item background-white`} 
                role="listitem" 
                onClick={() => onImageClick(link.link)}
                onMouseEnter={() => onImageMouseOver(klass, link.white)} 
                onMouseLeave={() => onImageMouseLeave(klass, link.black)}>
                <img alt={link.name} 
                    className={klass} 
                    src={link.black} 
                    role="button" />
            </div>
        );
    }

    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.contact.address.title}
            </Typography>
            <div className={`address-items`}>
                <AddressItem Icon={MyLocationOutlined} text={strings.contact.address.street} />
                <AddressItem Icon={EmailOutlined} text={strings.contact.address.email} />
                <AddressItem Icon={DesktopMacOutlined} text={strings.contact.address.website} />
            </div>
            <div aria-label={strings.contact.address.links.name} className={`link-items flex row align-vertical-center`} role="list">
                {links.map((link, index) => <LinkItem index={index} key={`link-${index}`} link={link} />)}
            </div>
        </div>
    );
}

export default withStyles(ContactAddressComponentStyles)(ContactAddressComponent);
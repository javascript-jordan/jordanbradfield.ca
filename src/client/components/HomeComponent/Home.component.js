import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import HomeIntroComponent from "./HomeIntro.component";
import HomeMarketingComponent from "./HomeMarketing.component";

const HomeComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        "@keyframes fade": {
            "25%": {opacity: "0.3"},
            "50%": {opacity: "0.6"},
            "75%": {opacity: "0.75"},
            "100%": {opacity: "1"},
        },
        root: {
            animation: "$fade 0.75s ease-out forwards",
            opacity: 0,
            textAlign: "center"
        }
    }
}

class HomeComponent extends React.Component {
    constructor(){
        super();
        this.state = {
        }
        this.imageRef = React.createRef();
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <HomeIntroComponent />
                <HomeMarketingComponent />
            </div>
        );
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);
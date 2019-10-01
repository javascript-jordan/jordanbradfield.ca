import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import HomeIntroComponent from "./HomeIntro.component";

const HomeComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        root: {
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

    componentDidMount(){
        
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <HomeIntroComponent />
            </div>
        );
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);
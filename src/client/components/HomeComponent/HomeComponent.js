import React from "react";
import { withStyles } from "@material-ui/core";

const HomeComponentStyles = theme => ({
    root: {

    }
});

class HomeComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div>Home</div>
        )
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);
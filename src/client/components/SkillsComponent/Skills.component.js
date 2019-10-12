import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import SkillsGraphsComponent from "./SkillsGraphs/SkillsGraphs.component";
import { strings } from "../../services/stringService";
import SkillsChartsComponent from "./SkillsCharts/SkillsCharts.component";

const SkillsComponentStyles = theme => ({
    root: {
        
    }
});

class SkillsComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <Typography className={`page-title page-title-spacing`} variant="h6">
                    {strings.skills.title}
                </Typography>
                <SkillsGraphsComponent />
                <SkillsChartsComponent />
            </div>
        )
    }
}

export default withStyles(SkillsComponentStyles)(SkillsComponent);
import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../../../services/stringService";
import SkillComponent from "./Skill.component";
import config from "../../../../../config";

const KnowledgeSkillsComponentStyles = theme => {
    return {
        root: {
            "& .skills-list": {
                marginTop: theme.spacing(3),
                "& .left-list": {
                    paddingRight: theme.spacing(1)
                },
                "& .right-list": {
                    paddingLeft: theme.spacing(1)
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "& .skills-list": {
                    flexDirection: "column",
                    "& .left-list, .right-list": {
                        padding: "0!important"
                    }
                }
            }
        }
    }
}

const KnowledgeSkillsComponent = ({ classes, className }) => {
    let list = strings.skills.graphs.knowledge.list.sort(sortList),
        halfOfList = Math.ceil(list.length / 2),
        leftList = list.slice(0, halfOfList),
        rightList = list.slice(halfOfList, list.length);

    function sortList(a, b){
        return a < b ? -1 : 1;
    }

    function renderList(list){
        return list.map((item, index) => <SkillComponent key={`knowledge-${index}`} index={index} item={item}></SkillComponent>);
    }

    return (
        <div className={`${classes.root} ${className || ""}`}>
            <div className={`title`}>
                <Typography className={`page-sub-title`} variant="h6">
                    {strings.skills.graphs.knowledge.title}
                </Typography>
            </div>
            <div className={`skills-list flex row align-vertical-start`}>
                <div className={`left-list grow shrink basis`}>
                    {renderList(leftList)}
                </div>
                <div className={`right-list grow shrink basis`}>
                    {renderList(rightList)}
                </div>
            </div>
        </div>
    );
}

export default withStyles(KnowledgeSkillsComponentStyles)(KnowledgeSkillsComponent);